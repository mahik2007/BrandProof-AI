# BrandProof AI — BugHunters Edition

<p align="center">
  <img src="static/brandproof_logo.svg" width="100" height="100" alt="BrandProof AI Logo" />
  <br>
  <b>Every claim checked. Every flag proven.</b>
  <br>
  <i>An intelligent brand-governance platform developed by Team BugHunters, IIT Patna.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Tests-47%2F47%20Passed-39C98A?style=flat" />
  <img src="https://img.shields.io/badge/Team-BugHunters-C7F36B?style=flat&colorA=10192C" />
  <img src="https://img.shields.io/badge/IIT-Patna-1E3A8A?style=flat" />
</p>

---

## ⚡ System Architecture

```mermaid
flowchart LR
    A["Marketing Copy & Creatives\n(EN / Hindi / Hinglish)"] --> B["Smart Audit Studio"]
    B --> C{"Deterministic Rules Engine"}
    
    subgraph Brand Memory
      M1[("Product Facts & MRP")]
      M2[("Discount Thresholds")]
      M3[("Warranty & Specs")]
      M4[("Approved Terminology")]
    end
    
    C <--> Brand Memory
    C --> D["Risk Scoring\n(0 - 100)"]
    D --> E["AI Fix Lab\n(Diff & Purpose Guard)"]
    E --> F["Review Desk\n(Four-Eyes Approval)"]
    F --> G["Proof Vault\n(SHA-256 Hash Chain)"]
```

---

## 📊 Evaluation & Detection Breakdown

```mermaid
pie title Rule Violations Detected in First Drafts
    "Price & Outdated MRP (R-PRC-01)" : 32
    "Discount Beyond Limit (R-PRC-02)" : 28
    "Warranty Contradiction (R-WAR-01)" : 25
    "Absolute Guarantees (R-CLM-02)" : 15
    "Missing T&C Disclaimer (R-PRC-03)" : 12
    "Unverified Superlatives (R-CLM-01)" : 10
```

```mermaid
pie title Multilingual Coverage Distribution
    "English Copy" : 55
    "Hinglish Copy" : 27
    "Hindi Copy" : 18
```

---

## 🔄 Four-Eyes Governance Lifecycle

```mermaid
sequenceDiagram
    autonumber
    actor Creator as ✍️ Creator
    participant Audit as 🛡️ Smart Audit Studio
    participant Fix as ⚡ AI Fix Lab
    actor Compliance as ⚖️ Compliance
    actor Reviewer as 🔍 Reviewer
    participant Vault as ⛓️ Proof Vault

    Creator->>Audit: Submit Draft Copy / Creative
    Audit-->>Creator: Flagged Claims + Evidence + Risk (0-100)
    Creator->>Fix: Apply Suggested Corrections
    Fix-->>Creator: Re-Audited (Risk Reduced)
    Creator->>Compliance: Submit Campaign for Review
    Compliance->>Compliance: Validate & Clear High-Risk Claims
    Compliance->>Reviewer: Hand Over to Reviewer
    Reviewer->>Vault: Final Approval (Four-Eyes Enforced)
    Vault-->>Reviewer: Mint SHA-256 Proof Certificate
```

---

## 🛠️ Feature Matrix

| Module | Core Functionality | Telemetry / Output |
|---|---|---|
| **🛡️ Smart Audit Studio** | Tokenizes text in English, Hindi & Hinglish | Text offsets, severity tags, risk $0-100$ |
| **⚡ AI Fix Lab** | Deterministic claim rewrite & diff comparison | Live risk drop & Purpose Guard check |
| **📖 Brand Policy Centre** | Versioned facts, prices, warranty & banned terms | Single-source-of-truth brand memory |
| **🖼️ Creative Scan** | Image template match, contrast & palette $\Delta E$ | Logo detection & color compliance score |
| **👥 Review Desk** | Role-based approval (Creator $\to$ Compliance $\to$ Reviewer) | Four-eyes enforcement (anti-self-approval) |
| **⛓️ Proof Vault** | SHA-256 hash chaining of approved campaigns | Cryptographic tamper-evident certificate |
| **🔮 Impact Simulator** | Previews policy change impact on past campaigns | Affected campaigns count before commit |
| **📜 Activity Log** | Chronological record of all team decisions | Transparent governance history |

---

## 🚦 Quickstart

```bash
# 1. Clone & install dependencies
git clone https://github.com/mahik2007/BrandProof-AI.git
cd BrandProof-AI
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# 2. Run local server
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

# 3. Run automated tests (47 tests)
python -m pytest -q
```

- **Landing Page:** `http://127.0.0.1:8000/`
- **Application Workspace:** `http://127.0.0.1:8000/workspace`
- **API Documentation:** `http://127.0.0.1:8000/docs`

---

## 👥 Team BugHunters (IIT Patna)

```mermaid
graph TD
    Leader["Ayush Kumar\nTeam Leader, AI & Architecture"]
    Backend["Akanksha Mishra\nBackend Lead"]
    Frontend["Shiksha Rawat\nFrontend Lead"]
    Design["Mahima Kumari\nUI/UX & Accessibility"]
    DevOps["Md Akil Akhtar\nImages & DevOps"]
    QA["Antra Priyadarshini\nResearch & Proof Vault"]

    Leader --> Backend
    Leader --> Frontend
    Leader --> Design
    Leader --> DevOps
    Leader --> QA
```

<p align="center">
  <b>BrandProof AI — BugHunters Edition</b> • IIT Patna
  <br>
  <i>“Trust every claim before it goes live.”</i>
</p>
