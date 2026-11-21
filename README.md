# BrandProof AI — BugHunters Edition

> **“Every claim checked. Every flag proven.”**  
> *Your brand's final checkpoint before publication.*

Developed by **Team BugHunters, IIT Patna**  
Problem Statement: **Inkloom AI Brand-Governance Challenge**

---

## 🎯 Overview

**BrandProof AI** is an enterprise-grade brand governance platform designed to check marketing drafts, captions, brochures, posters, and product listings against approved brand facts, guidelines, terminology, and visual palettes before publication.

This repository is an **independent team-member demonstration build** created for the **BugHunters** team. It features genuine deterministic governance rules, multi-turn review workflows (Creator → Compliance → Reviewer), purpose-preserving auto-fixes, and cryptographic, hash-chained **Proof Certificates** (SHA-256).

---

## 👥 Team BugHunters — IIT Patna

| Member | Role | Core Contributions |
|---|---|---|
| **Ayush Kumar** | Team Leader, AI & Architecture | System architecture, deterministic engine, prompt strategy, hash certificate verification |
| **Akanksha Mishra** | Backend Engineer | FastAPI endpoints, SQLite schema, workspace isolation, session authentication & RBAC |
| **Shiksha Rawat** | Frontend Engineer | Vanilla JS SPA architecture, reactive checking UI, difference highlighters & interactive stepper |
| **Mahima Kumari** | UI/UX & Accessibility | Design system (Navy/Indigo/Emerald), WCAG 2.1 AA accessibility, contrast validation & responsive layouts |
| **Md Akil Akhtar** | Images & DevOps | Vision pipeline, logo template matching, poster contrast analysis, CI test workflows |
| **Antra Priyadarshini** | Research, QA & Documentation | Benchmark dataset curation, multilingual rule validation (Hindi/Hinglish), edge-case testing & user documentation |

---

## 🚀 Key Features

1. **Deterministic Rule Engine (Python 3.11+)**
   - **Prices & Outdated Prices:** Flags non-matching prices against the active price list (e.g. ₹10,000 MRP for SoundPods Pro) and cites expired price history.
   - **Discount Limits:** Enforces maximum discount limits (e.g. 20% festive cap) and catches verbal equivalents like *"half price"* or *"aadhe daam"*.
   - **Warranty & Guarantees:** Disallows unsupported claims such as *"lifetime warranty"* or *"100% guarantee"*.
   - **Battery & Specs:** Validates tested claims (e.g. 30 hours) vs false claims like *"battery never runs out"*.
   - **Superlatives & Pressure Tactics:** Detects unapproved superlatives (*"India's No. 1"*, *"best earbuds"*) and false urgency (*"Hurry, last chance"*).
   - **Confidential Information:** Flags confidential project codenames (*Project Falcon*) with high severity.
   - **Multilingual Support:** Native regex boundaries supporting **English, Hindi (Devanagari), and Hinglish (Roman Hindi)** including written-in-words numbers (*"saat hazaar"*, *"सात हज़ार"*).

2. **Purpose Guard & Suggested Fixes**
   - Automatically generates context-aware corrections that keep the creator's product, offer, and call to action intact.
   - Provides word-level before/after diffs and real-time risk score reduction (e.g., dropping from **Risk 100** down to **Risk 0**).

3. **Multi-Role Governance Workflow (RBAC)**
   - **Creator:** Drafts content, tests copy, accepts fixes, and submits to review.
   - **Compliance:** Mandatory checkpoint when high-severity claims are present; dismissals require mandatory audit explanations.
   - **Reviewer:** Final approval gate. Enforces the **four-eyes rule** (cannot approve content you submitted yourself).
   - **Brand Admin:** Updates Brand Memory facts, adds terminology, modifies color palettes, and previews impact.

4. **Cryptographic Proof Certificates**
   - Tamper-evident audit seal issued upon reviewer approval.
   - Implements **SHA-256 hash chaining** where each certificate points to the previous certificate hash in the workspace.
   - Features online verification, copy hash, and printable/downloadable JSON certificate views.

5. **Brand Memory & Guideline Impact Preview**
   - Versioned facts (active and historical records with validity dates).
   - Simulates hypothetical fact changes against all approved content before committing, highlighting items that would be newly flagged.

6. **Interactive Demo Sandbox & Walkthrough Guide**
   - Zero-friction one-click demo sandbox for fictional brand **ABC Electronics**.
   - Built-in 9-step **Judge Walkthrough** guide to navigate the complete end-to-end journey in under 3 minutes.

---

## 🛠️ Technology Stack

- **Backend:** Python 3.11+ / 3.14, FastAPI, Pydantic, Uvicorn
- **Storage:** SQLite (local development and demo) / PostgreSQL ready
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (zero bundler dependency, fast native SPA)
- **Document & Image Processing:** `pypdf`, `python-docx`, `Pillow`, `numpy`
- **Testing:** `pytest`, `pytest-asyncio`, Starlette TestClient (47 automated tests passing)

---

## ⚡ Quick Start (Local Setup)

### 1. Prerequisites
- Python 3.11+ (Tested on Python 3.14.6)
- Git

### 2. Clone and Install Dependencies
```bash
# Clone the repository
git clone https://github.com/sanjaykumarpathak640-png/brandproof-ai.git
cd brandproof-ai

# Create virtual environment (optional but recommended)
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Linux/macOS:
source .venv/bin/activate

# Install required packages
pip install -r requirements.txt
```

### 3. Run the Application
```bash
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
Open your browser and navigate to:
👉 **`http://localhost:8000`**

Click **“Start free demo”** or **“Open workspace”** to immediately begin testing.

---

## 🧪 Running Automated Tests

Run the full test suite (47 comprehensive tests):
```bash
python -m pytest -v
```

### Test Coverage Highlights:
- **`tests/test_rules.py`**: Validates prices, outdated prices, discount limits, lifetime warranties, confidential leakages, and multilingual English/Hindi/Hinglish patterns.
- **`tests/test_certificates.py`**: Validates content SHA-256 calculation, tamper detection, and genesis-to-tip hash chaining.
- **`tests/test_workflow.py`**: Validates role transitions, Compliance dismissal reason mandates, Reviewer gating, and idempotency.
- **`tests/test_brandproof.py`**: 35 end-to-end system tests covering workspace isolation, document imports, vision pipelines, and four-eyes enforcement.

---

## 🔍 Judge & Demonstration Walkthrough (3-Minute Tour)

1. **Launch Sandbox:** Click **“Start free demo”** on the landing page to enter the ABC Electronics workspace.
2. **Test Risky Ad:** Under **Check content**, click the **“Risky AI ad”** sample button and click **“Run BrandProof check”**. Observe the **Risk 100** score and 7 evidence-backed findings.
3. **Inspect Findings:** Click on any highlighted phrase to scroll directly to the corresponding finding card displaying the exact guideline broken and date-stamped fact.
4. **Apply Fixes:** Click **“Apply all fixes”**. Observe the word-level diff and notice the risk score drop to **0**.
5. **Submit for Review:** Click **“Submit version for review”**. The state updates to `compliance_review`.
6. **Switch Role to Compliance:** In the top-right switcher, select **Compliance**. Dismiss any flagged finding with an explanation or approve the claims.
7. **Switch Role to Reviewer & Approve:** Select **Reviewer** and click **“Approve”**. A tamper-evident **Proof Certificate** is issued.
8. **Verify Certificate:** Navigate to **Certificates**, view the cryptographic hash chain, and click **“Verify certificate”** to validate integrity.
9. **Brand Memory & Impact Preview:** Go to **Brand Memory**, change the maximum discount from 20% to 15%, and click **“Preview impact”** to see which approved posts would be impacted before saving.

---

## 🔒 Trust, Transparency & Limitations

- **Independent Demonstration:** Built as a standalone team demonstration. Uses local SQLite demo storage and sample seed data.
- **Deterministic vs AI:** Core pricing, discount, warranty, superlatives, and terminology checks are 100% deterministic code. An optional Gemini API key can be supplied via `.env` for semantic paraphrasing and vision OCR.
- **Certificates:** Proof Certificates provide cryptographic audit integrity; they are not legal electronic signatures.

---

© 2026 Team BugHunters — IIT Patna. All rights reserved.

