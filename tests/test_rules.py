"""Unit and integration tests for BrandProof AI rule engine (BugHunters Edition)."""
import pytest
from app import engine
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture(scope="module")
def brand_dict():
    c = TestClient(app)
    c.__enter__()
    c.post("/api/demo/start")
    b = c.get("/api/brand").json()
    return b

def test_approved_price_clean(brand_dict):
    text = "Get SoundPods Pro for ₹10,000 with 20% festive discount and 2 years warranty. Terms and conditions apply."
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    high_findings = [f for f in findings if f["severity"] == "high"]
    assert len(high_findings) == 0, f"Expected no high-risk findings for clean copy, got {high_findings}"
    assert res["risk"]["score"] < 15

def test_incorrect_price(brand_dict):
    text = "SoundPods Pro for just ₹5,000 only! Hurry!"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    price_flags = [f for f in findings if "price" in f["rule_id"].lower() or "price" in f["title"].lower()]
    assert len(price_flags) > 0, "Expected incorrect price to be flagged"
    assert any(f["severity"] == "high" for f in price_flags)

def test_outdated_price(brand_dict):
    text = "SoundPods Pro now available at ₹12,000 in stores."
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    outdated_flags = [f for f in findings if "outdated" in f["message"].lower() or "expired" in str(f.get("evidence", "")).lower()]
    assert len(outdated_flags) > 0, "Expected outdated price to be flagged"

def test_discount_above_limit(brand_dict):
    text = "SoundPods Pro at 50% OFF today!"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    disc_flags = [f for f in findings if "discount" in f["rule_id"].lower() or "discount" in f["title"].lower()]
    assert len(disc_flags) > 0, "Expected 50% discount to violate 20% limit"
    assert disc_flags[0]["severity"] == "high"

def test_unsupported_lifetime_warranty(brand_dict):
    text = "SoundPods Pro comes with lifetime warranty and 100% guarantee!"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    warranty_flags = [f for f in findings if "warranty" in f["rule_id"].lower() or "warranty" in f["title"].lower()]
    assert len(warranty_flags) > 0, "Expected lifetime warranty violation"

def test_confidential_word_leakage(brand_dict):
    text = "Top secret update on Project Falcon before launch!"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    conf_flags = [f for f in findings if "confidential" in f["rule_id"].lower() or "confidential" in f["title"].lower()]
    assert len(conf_flags) > 0, "Expected confidential term Falcon to be flagged"
    assert conf_flags[0]["severity"] == "high"

def test_hinglish_patterns(brand_dict):
    text = "SoundPods Pro sirf saat hazaar rupaye mein, aadhe daam par! Saath mein lifetime warranty, battery kabhi khatam nahi hogi!"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    assert res["risk"]["score"] >= 40, f"Expected high risk score for risky Hinglish, got {res['risk']['score']}"
    titles = [f["title"].lower() for f in findings]
    rule_ids = [f["rule_id"].lower() for f in findings]
    assert any("discount" in t or "discount" in r for t, r in zip(titles, rule_ids))
    assert any("warranty" in t or "warranty" in r for t, r in zip(titles, rule_ids))

def test_hindi_devanagari_patterns(brand_dict):
    text = "सिर्फ सात हज़ार रुपये में SoundPods Pro! पचास प्रतिशत की छूट और आजीवन वारंटी।"
    res = engine.run_rules(text, brand_dict)
    findings = res["findings"]
    assert res["risk"]["score"] >= 40, f"Expected high risk score for risky Hindi, got {res['risk']['score']}"
    titles = [f["title"].lower() for f in findings]
    rule_ids = [f["rule_id"].lower() for f in findings]
    assert any("discount" in t or "discount" in r for t, r in zip(titles, rule_ids))
    assert any("warranty" in t or "warranty" in r for t, r in zip(titles, rule_ids))
