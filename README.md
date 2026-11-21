# BrandProof AI — BugHunters Edition

<p align="center">
  <img src="static/brandproof_logo.svg" width="90" height="90" alt="BrandProof AI Logo" />
  <br>
  <b>Every claim checked. Every flag proven.</b>
  <br>
  <i>Intelligent brand-governance platform by Team BugHunters, IIT Patna.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Tests-47%2F47%20Passed-39C98A?style=flat" />
  <img src="https://img.shields.io/badge/Team-BugHunters-C7F36B?style=flat&colorA=10192C" />
  <img src="https://img.shields.io/badge/IIT-Patna-1E3A8A?style=flat" />
</p>

---

## 📸 Product Preview

<p align="center">
  <b>Public Landing Page</b>
  <br>
  <img src="static/screenshots/landing_preview.png" width="95%" alt="BrandProof AI Landing Page Preview" style="border-radius:8px; border:1px solid #2C3E56;" />
</p>

<p align="center">
  <b>Governance Workspace Dashboard</b>
  <br>
  <img src="static/screenshots/workspace_preview.png" width="95%" alt="BrandProof AI Workspace Dashboard" style="border-radius:8px; border:1px solid #2C3E56;" />
</p>

---

## ⚡ Architecture Pipeline

```mermaid
flowchart LR
    A["Ad Copy & Creative<br>(EN / Hindi / Hinglish)"] --> B["Smart Audit Studio"]
    B --> C{"Rules Engine"}
    
    subgraph BM["Brand Memory"]
      M1[("Facts & MRP")]
      M2[("Discount Caps")]
      M3[("Warranty & Specs")]
    end
    
    C --- BM
    C --> D["Risk Scoring<br>(0 - 100)"]
    D --> E["AI Fix Lab<br>(Diff Preview)"]
    E --> F["Review Desk<br>(Four-Eyes)"]
    F --> G["Proof Vault<br>(SHA-256 Chain)"]
```

---

## 📊 Telemetry & Coverage

```mermaid
pie title Detected Issues Distribution
    "Price & Outdated MRP (R-PRC-01)" : 32
    "Discount Beyond Limit (R-PRC-02)" : 28
    "Warranty Contradiction (R-WAR-01)" : 25
    "Absolute Guarantees (R-CLM-02)" : 15
    "Missing T&C (R-PRC-03)" : 12
    "Superlatives (R-CLM-01)" : 10
```

```mermaid
pie title Supported Languages
    "English" : 55
    "Hinglish" : 27
    "Hindi" : 18
```

---

## 🔄 Governance Lifecycle

```mermaid
sequenceDiagram
    autonumber
    actor Creator as ✍️ Creator
    participant Audit as 🛡️ Audit Studio
    participant Fix as ⚡ Fix Lab
    actor Compliance as ⚖️ Compliance
    actor Reviewer as 🔍 Reviewer
    participant Vault as ⛓️ Proof Vault

    Creator->>Audit: Check Copy & Creative
    Audit-->>Creator: Flags & Risk Score (0-100)
    Creator->>Fix: Apply Corrections
    Creator->>Compliance: Submit for Clearance
    Compliance->>Reviewer: Route for Approval
    Reviewer->>Vault: Approve (Anti-Self-Approval)
    Vault-->>Reviewer: Mint SHA-256 Proof Certificate
```

---

## 🚀 Quickstart

```bash
# 1. Clone & install
git clone https://github.com/mahik2007/BrandProof-AI.git
cd BrandProof-AI
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# 2. Run local server
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

# 3. Test suite
python -m pytest -q
```

- **Landing Page:** `http://127.0.0.1:8000/`
- **Workspace:** `http://127.0.0.1:8000/workspace`
- **API Docs:** `http://127.0.0.1:8000/docs`

---

## 👥 Team BugHunters (IIT Patna)

```mermaid
graph TD
    Leader["Ayush Kumar<br>Team Leader & Architecture"]
    Backend["Akanksha Mishra<br>Backend Lead"]
    Frontend["Shiksha Rawat<br>Frontend Lead"]
    Design["Mahima Kumari<br>UI/UX & Accessibility"]
    DevOps["Md Akil Akhtar<br>Images & DevOps"]
    QA["Antra Priyadarshini<br>Research & Proof Vault"]

    Leader --> Backend
    Leader --> Frontend
    Leader --> Design
    Leader --> DevOps
    Leader --> QA
```

<p align="center">
  <b>BrandProof AI — BugHunters Edition</b> • IIT Patna
</p>
