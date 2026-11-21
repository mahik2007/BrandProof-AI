"""Integration tests for review workflow, permissions, four-eyes rule and audit actions."""
import pytest
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture
def client():
    c = TestClient(app)
    c.__enter__()
    # Start fresh demo sandbox
    assert c.post("/api/demo/start").status_code == 200
    return c

def H(role):
    return {"X-Acting-Role": role}

def test_workflow_state_transitions(client):
    # 1. Creator checks and submits risky ad
    risky_ad = "SoundPods Pro Diwali offer ₹7,000! 50% discount and lifetime warranty!!"
    chk_res = client.post("/api/check", json={"text": risky_ad, "title": "Diwali Offer", "channel": "Instagram"}, headers=H("creator"))
    assert chk_res.status_code == 200, chk_res.text
    chk = chk_res.json()
    risk_score = chk["risk"]["score"] if isinstance(chk.get("risk"), dict) else chk.get("risk", 0)
    assert risk_score > 0
    
    sub = client.post("/api/submissions", json={
        "title": "Diwali Offer",
        "channel": "Instagram",
        "goal": "Test goal",
        "text": risky_ad,
        "findings": chk["findings"],
        "risk_score": risk_score
    }, headers=H("creator")).json()
    sub_id = sub["id"]
    
    # 2. Check initial status
    sub_detail = client.get(f"/api/submissions/{sub_id}", headers=H("creator")).json()
    # High risk flags require Compliance review
    assert sub_detail["status"] == "compliance_review"

    # 3. Creator cannot approve or dismiss
    fail_app = client.post(f"/api/submissions/{sub_id}/action", json={"action": "approve"}, headers=H("creator"))
    assert fail_app.status_code == 403

    # 4. Reviewer cannot approve before Compliance clears high risk
    fail_rev = client.post(f"/api/submissions/{sub_id}/action", json={"action": "approve"}, headers=H("reviewer"))
    assert fail_rev.status_code == 403

    # 5. Compliance clears high-severity finding with mandatory reason
    cur_version = len(sub_detail["versions"])
    high_findings = [f for f in sub_detail["versions"][-1]["findings"] if f["severity"] == "high"]
    if high_findings:
        target_f = high_findings[0]
        # Must fail without reason (service.py raises Denied(403) when reason is empty)
        fail_dismiss = client.post(f"/api/submissions/{sub_id}/action", json={
            "action": "dismiss",
            "finding_key": target_f["key"],
            "version": cur_version,
            "reason": ""
        }, headers=H("compliance"))
        assert fail_dismiss.status_code in (400, 403, 422)

        # Clear all high findings with reason
        for hf in high_findings:
            ok_dismiss = client.post(f"/api/submissions/{sub_id}/action", json={
                "action": "dismiss",
                "finding_key": hf["key"],
                "version": cur_version,
                "reason": "Approved by senior brand manager for special festive campaign."
            }, headers=H("compliance"))
            assert ok_dismiss.status_code == 200

    # 6. Now compliance marks clear_claims
    clear_act = client.post(f"/api/submissions/{sub_id}/action", json={"action": "clear_claims"}, headers=H("compliance"))
    assert clear_act.status_code == 200

    # 7. Now Reviewer can approve
    app_act = client.post(f"/api/submissions/{sub_id}/action", json={"action": "approve"}, headers=H("reviewer"))
    assert app_act.status_code == 200
    res = app_act.json()
    assert res["status"] == "approved"
    assert "certificate" in res

    # 8. Duplicate approval is rejected (idempotency / 409)
    dup = client.post(f"/api/submissions/{sub_id}/action", json={"action": "approve"}, headers=H("reviewer"))
    assert dup.status_code == 409
