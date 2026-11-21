"""Unit tests for hash-chained Proof Certificates (BugHunters Edition)."""
import json
import pytest
from app import certs

def test_content_hash_deterministic():
    text = "SoundPods Pro Diwali campaign copy."
    h1 = certs.content_hash(text)
    h2 = certs.content_hash(text)
    assert h1 == h2
    assert len(h1) == 64  # SHA-256 hex string

def test_tamper_detection_on_hash():
    text1 = "SoundPods Pro price ₹7,000"
    text2 = "SoundPods Pro price ₹6,999"
    assert certs.content_hash(text1) != certs.content_hash(text2)

def test_certificate_chain_integrity():
    genesis = certs.GENESIS
    assert genesis == "0" * 64

    # Simulate issuing certificate 1
    sub1 = {"id": "sub-101", "title": "Campaign 1", "channel": "Instagram", "current_text": "Text 1", "image": None}
    ver1 = {"version": 1, "text": "Text 1", "findings": [], "risk_score": 0, "created_at": "2026-11-20T10:00:00Z"}
    approvers1 = [{"name": "Kabir Singh", "role": "reviewer", "at": "2026-11-20T10:05:00Z", "verified": True}]
    
    # We can test canon and sha
    body1 = {
        "submission_id": "sub-101",
        "brand_version": 1,
        "content_hash": certs.content_hash(sub1["current_text"]),
        "approvers": approvers1,
        "previous_cert_hash": genesis,
        "issued_at": "2026-11-20T10:05:00Z"
    }
    cert1_hash = certs.sha(certs.canon(body1))
    assert len(cert1_hash) == 64

    # Certificate 2 points to Certificate 1
    approvers2 = [{"name": "Ayush (Brand Admin)", "role": "admin", "at": "2026-11-20T11:00:00Z", "verified": True}]
    body2 = {
        "submission_id": "sub-102",
        "brand_version": 1,
        "content_hash": certs.content_hash("Text 2"),
        "approvers": approvers2,
        "previous_cert_hash": cert1_hash,
        "issued_at": "2026-11-20T11:00:00Z"
    }
    cert2_hash = certs.sha(certs.canon(body2))
    assert cert2_hash != cert1_hash
    assert body2["previous_cert_hash"] == cert1_hash

