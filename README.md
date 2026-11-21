# BrandProof AI — BugHunters Edition

<p align="center">
  <img src="static/brandproof_logo.svg" width="110" height="110" alt="BrandProof AI Logo" />
</p>

<h3 align="center">
  <strong>Trust Every Claim Before It Goes Live.</strong>
</h3>

<p align="center">
  An intelligent brand-governance platform that detects risky claims, checks creatives against approved policies, recommends deterministic corrections, and preserves an accountable cryptographic approval record.
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture--stack">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-deterministic-rules-engine">Rules Engine</a> •
  <a href="#-walkthrough--judge-path">Judge Path</a> •
  <a href="#-team-bughunters">Team</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Tests-47%2F47%20Passing-39C98A?style=flat" />
  <img src="https://img.shields.io/badge/Team-BugHunters-C7F36B?style=flat&colorA=10192C" />
  <img src="https://img.shields.io/badge/Institution-IIT%20Patna-blue?style=flat" />
</p>

---

## 🌟 Executive Summary

**BrandProof AI — BugHunters Edition** is built by **Team BugHunters, IIT Patna**. It replaces fallible manual brand reviews with **deterministic policy enforcement**, **multilingual tokenization** (English, Hindi, Hinglish), **visual creative scans**, and **tamper-evident SHA-256 Proof Certificates**.

Before marketing campaigns reach customers or regulators, BrandProof AI verifies that prices, discount bounds, warranties, and terminology strictly conform to approved enterprise Brand Memory.

---

## 🚀 Key Features

### 1. 🛡️ Smart Audit Studio
- Evaluates copy in real-time across channels (**Instagram, Facebook, WhatsApp, Website, Email, Print**).
- Computes exact text offsets, severity classifications (`high`, `medium`, `review`), and produces deterministic risk scores ($0 - 100$).
- Cites exact approved facts and date sources from Brand Memory.

### 2. ⚡ AI Fix Lab
- Side-by-side diff view of flagged claims versus approved deterministic corrections.
- Selective batch application of fixes with live risk-reduction calculation.
- **Purpose Guard**: Verifies product mentions, active offers, and calls-to-action remain intact after revisions.

### 3. 📖 Brand Policy Centre
- Single source of truth for versioned product facts (Price/MRP, maximum discount limits, warranty duration, battery life).
- Canonical terminology dictionaries (banned terms and preferred replacements).
- Confidential term masking (`R-CONF-01`) to protect unreleased projects before sending content anywhere.

### 4. 🖼️ Creative Scan
- Audits digital posters and banner creatives (JPG, PNG, WEBP).
- Measures pixel template matching for approved logo marks.
- Computes color Delta-E ($\Delta E$ CIE76) against the approved brand color palette.

### 5. 👥 Review Desk (Four-Eyes Workflow)
- Role-based access control with seamless persona switching for demonstrations:
  - **Creator** (`Riya Sharma`): Writes, tests copy, applies fixes, and submits.
  - **Compliance** (`Neha Verma`): Validates and clears high-severity regulatory claims.
  - **Reviewer** (`Kabir Singh`): Performs final brand audit and approves or requests changes.
  - **Brand Admin** (`Ayush Kumar`): Updates facts, rules, and imports brand guidelines.
- **Four-eyes principle enforced**: Creators cannot approve their own submissions.

### 6. ⛓️ Proof Vault & Verifiable Certificates
- Every approval generates a cryptographic **Proof Certificate**.
- Chained using **SHA-256** where each certificate embeds the hash of the preceding record (`prev_hash`).
- An interactive **Text Verification Tool** re-hashes copy to prove it has not been tampered with post-approval.

### 7. 🔮 Impact Simulator
- Allows Brand Admins to test the downstream impact of proposed policy changes (e.g., lowering maximum discount from 20% to 10%) against stored historical campaigns before committing.

### 8. 📜 Activity Log
- Complete audit trail tracking every submission, approval, revision, and policy change.

---

## 📐 Architecture & Tech Stack

```
bughunters-brandproof/
│
├── app/                      # Backend application
│   ├── main.py               # FastAPI router and REST endpoints
│   ├── engine.py             # Deterministic rules engine & risk scoring
│   ├── lang.py               # Multilingual tokenization (EN, HI, Hinglish)
│   ├── certs.py              # SHA-256 hash chaining & verification
│   ├── service.py            # Workflow state machine & impact simulator
│   ├── auth.py               # Session authentication & RBAC
│   ├── db.py                 # SQLite/PostgreSQL storage abstraction
│   ├── seed.py               # Seed data for demo brand (ABC Electronics)
│   ├── vision.py             # Image analysis, logo match, and palette Delta-E
│   └── extract.py            # DOCX & PDF brand book parser
│
├── static/                   # Frontend assets (Vanilla HTML5 / Modern CSS / ES6)
│   ├── index.html            # Main SPA entrypoint
│   ├── css/
│   │   ├── design-system.css # Design tokens, colors, typography, sidebar
│   │   ├── app.css           # Workspace components, diff viewer, cards
│   │   ├── landing.css       # Public SaaS landing page styles
│   │   └── responsive.css    # Mobile & tablet breakpoints
│   ├── js/
│   │   ├── api.js            # Fetch API client
│   │   ├── findings.js       # Text highlighter & card renderer
│   │   ├── landing.js        # Public landing page controller
│   │   └── workflow.js       # All 10 workspace view controllers
│   └── samples/              # Test posters, brand update DOCX, and logos
│
├── tests/                    # Automated Pytest suite (47 tests)
│   ├── test_brandproof.py    # Core pipeline & API integration tests
│   ├── test_rules.py         # Deterministic multilingual rules tests
│   ├── test_workflow.py      # Governance state machine & four-eyes tests
│   └── test_certificates.py  # SHA-256 chain verification tests
│
├── requirements.txt
├── README.md
└── .env.example
```

---

## ⚙️ Deterministic Rules Engine

| Rule ID | Category | Detection Condition | Severity |
|---|---|---|---|
| `R-PRC-01` | Price | Price does not match active MRP (e.g., ₹7,000 vs. ₹10,000) | **High** |
| `R-PRC-02` | Discount | Discount exceeds approved threshold (e.g., 50% vs. 20%) | **High** |
| `R-PRC-03` | Disclaimer | Promotional offer missing mandated "T&C apply" disclaimer | **Medium** |
| `R-WAR-01` | Warranty | Warranty claim contradicts approved duration or promises lifetime | **High** |
| `R-CLM-01` | Claims | Unverified superlatives or rankings without proof | **Medium** |
| `R-CLM-02` | Guarantees | Unqualified absolute guarantees (e.g., "100% guaranteed") | **High** |
| `R-CONF-01`| Security | Leaking unreleased/confidential codenames (e.g., "Project Falcon") | **High** |
| `R-TERM-01`| Terminology| Using deprecated terms instead of preferred brand naming | **Medium** |
| `R-SPEC-01`| Specs | Battery life or water resistance claims exceeding tested specs | **Medium** |
| `R-LOGO-01`| Creative | Creative image missing approved logo template match | **High** |
| `R-VIS-01` | Creative | Creative color palette exceeds $\Delta E > 20$ tolerance | **Medium** |

---

## 🚦 Getting Started

### Prerequisites
- Python 3.11+
- Git

### 1. Clone & Set Up Environment
```bash
git clone https://github.com/mahik2007/BrandProof-AI.git
cd BrandProof-AI

python -m venv .venv
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

pip install -r requirements.txt
```

### 2. Run the Application
```bash
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

Open your browser and navigate to:
- **Landing Page**: `http://127.0.0.1:8000/`
- **Application Workspace**: `http://127.0.0.1:8000/workspace` or click **"Launch Workspace"**
- **Interactive REST API Docs**: `http://127.0.0.1:8000/docs`

### 3. Run Automated Tests
```bash
python -m pytest -v
```
All **47 automated tests** run against an isolated in-memory test database and verify the rule engine, state transitions, and hash-chain cryptography.

---

## 🧭 5-Minute Judge Walkthrough

1. **Visit Landing Page**: Open `http://127.0.0.1:8000/` to explore the public overview.
2. **Launch Workspace**: Click **"Launch Workspace →"** to enter the private demo sandbox.
3. **Smart Audit Studio (`#/audit`)**: Click **"Load Risky Ad"** and run the audit. Observe the **100/100 risk score** and highlighted flags.
4. **AI Fix Lab (`#/fixlab`)**: Select the suggested corrections and click **"Apply Selected Fixes & Re-Audit"** to see risk drop to safe levels.
5. **Review Desk (`#/desk`)**: Switch persona to **Reviewer** (`Kabir Singh`) and click **"Approve"**.
6. **Proof Vault (`#/vault`)**: Inspect the newly minted **SHA-256 Proof Certificate**. Paste the text into the verification tool to confirm the hash match.
7. **Impact Simulator (`#/simulator`)**: Propose lowering the maximum discount from 20% to 10% and click **"Preview Impact"** to preview affected campaigns before saving.

---

## 👥 Team BugHunters (IIT Patna)

| Member | Role | Responsibilities |
|---|---|---|
| **Ayush Kumar** | Team Leader, AI & Architecture | System architecture, rule specifications, and evaluation models |
| **Akanksha Mishra** | Backend Lead | Deterministic engine implementation, database abstraction, and APIs |
| **Shiksha Rawat** | Frontend Lead | Dynamic workspace views, findings highlighter, and interactive panels |
| **Mahima Kumari** | UI/UX & Accessibility | Design system, visual identity, accessibility, and landing page |
| **Md Akil Akhtar** | Images & DevOps | Creative scan visual telemetry, test automation, and CI/CD pipelines |
| **Antra Priyadarshini** | Research, QA & Documentation | Proof Vault hash-chaining verification, test coverage, and documentation |

---

<p align="center">
  <b>BrandProof AI — BugHunters Edition</b> • Indian Institute of Technology Patna
  <br>
  <i>“Trust every claim before it goes live.”</i>
</p>
