/**
 * BrandProof AI — Public Landing Page Generator & Controller
 */
"use strict";

const LandingPage = {
  render() {
    return `
    <div class="landing-body">
      <!-- Section 1: Navbar -->
      <header class="lp-header">
        <div class="lp-container">
          <nav class="lp-nav">
            <a href="#" class="lp-logo" style="text-decoration:none !important;">
              <div class="lp-logo-box">BP</div>
              <div>
                <span class="lp-brand-name">BrandProof AI</span>
                <span class="lp-team-tag">BugHunters · IIT Patna</span>
              </div>
            </a>

            <div class="lp-menu">
              <a href="#" class="lp-menu-link">Home</a>
              <a href="#platform" class="lp-menu-link">Platform</a>
              <a href="#features" class="lp-menu-link">Features</a>
              <a href="#workflow" class="lp-menu-link">How It Works</a>
              <a href="#multilingual" class="lp-menu-link">Languages</a>
              <a href="#team" class="lp-menu-link">Our Team</a>
            </div>

            <div class="lp-nav-actions">
              <a href="#/overview" class="btn btn-primary" id="lp-btn-nav-launch">Launch Workspace →</a>
            </div>
          </nav>
        </div>
      </header>

      <!-- Section 2: Hero -->
      <section class="lp-hero">
        <div class="lp-container">
          <div class="lp-hero-grid">
            <div>
              <div class="lp-badge-label">
                <span>🛡️ Intelligent Brand Governance Platform</span>
              </div>
              <h1 class="lp-hero-title">
                Your brand deserves <span class="accent">more than a spell-check.</span>
              </h1>
              <p class="lp-hero-desc">
                Catch misleading claims, verify marketing creatives against approved brand policies, and ensure every campaign is reviewed before it reaches your audience.
              </p>
              <div class="lp-hero-ctas">
                <a href="#/overview" class="btn btn-primary btn-lg" id="lp-btn-hero-launch">Launch Workspace →</a>
                <a href="#platform" class="btn btn-dark btn-lg">Explore the Platform</a>
              </div>

              <div class="lp-checklist">
                <div class="lp-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Evidence-backed claim detection</span>
                </div>
                <div class="lp-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Multilingual content checking</span>
                </div>
                <div class="lp-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Four-eyes human approval</span>
                </div>
                <div class="lp-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Tamper-evident proof certificates</span>
                </div>
              </div>
            </div>

            <!-- Product Mockup Widget -->
            <div class="lp-mockup">
              <div class="lp-mockup-top">
                <div class="lp-mockup-dots">
                  <span class="lp-mockup-dot"></span>
                  <span class="lp-mockup-dot"></span>
                  <span class="lp-mockup-dot"></span>
                </div>
                <span class="mono" style="font-size:11px;color:#A9B8D0;">Audit Telemetry — SoundPods Pro</span>
                <span class="badge badge-high">Risk 100/100</span>
              </div>
              <div class="lp-mockup-body">
                <div class="lp-mockup-card">
                  <div style="display:flex;justify-content:space-between;font-size:11.5px;color:#A9B8D0;margin-bottom:4px;">
                    <strong>Campaign: Diwali Flash Sale Copy</strong>
                    <span>Channel: Instagram</span>
                  </div>
                  <div class="lp-mockup-quote">
                    “DIWALI SALE! SoundPods Pro for ₹7,000! 50% OFF! Guaranteed performance with lifetime warranty!!”
                  </div>
                  <div class="lp-mockup-finding">
                    <strong>[R-PRC-02]</strong>
                    <span>Discount 50% exceeds approved maximum of 20%</span>
                  </div>
                  <div class="lp-mockup-finding">
                    <strong>[R-WAR-01]</strong>
                    <span>Lifetime warranty contradicts approved 2-year warranty</span>
                  </div>
                </div>

                <div class="lp-mockup-cert">
                  <span>✓ Proof Certificate: SHA-256 #9f83...a210</span>
                  <span class="badge badge-ok" style="font-size:9px;">Tamper-Evident</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Trust Strip -->
      <section class="lp-trust">
        <div class="lp-container">
          <div class="lp-trust-grid">
            <div class="lp-trust-item">
              <div class="lp-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div class="lp-trust-text">
                <strong>Smart Claim Detection</strong>
                <span>Deterministic rules & fact offsets</span>
              </div>
            </div>
            <div class="lp-trust-item">
              <div class="lp-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <div class="lp-trust-text">
                <strong>Brand Policy Verification</strong>
                <span>Price, warranty & terminology memory</span>
              </div>
            </div>
            <div class="lp-trust-item">
              <div class="lp-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div class="lp-trust-text">
                <strong>Multilingual Intelligence</strong>
                <span>English, Hindi & Hinglish claim audit</span>
              </div>
            </div>
            <div class="lp-trust-item">
              <div class="lp-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <div class="lp-trust-text">
                <strong>Verifiable Approvals</strong>
                <span>Hash-chained SHA-256 certificates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: The Problem -->
      <section class="lp-light-section" id="platform">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">The Governance Challenge</span>
            <h2 class="lp-sec-title">One misleading claim can damage years of brand trust.</h2>
            <p class="lp-sec-desc">Marketing moves fast. Traditional manual reviews are slow, inconsistent, and often miss critical price caps and compliance mandates.</p>
          </div>

          <div class="lp-problem-grid">
            <div class="lp-problem-card">
              <h3>1. Unsupported Marketing Claims</h3>
              <p>Hype phrases like “100% guaranteed” or unverified superlatives expose organizations to regulatory penalties and consumer backlash.</p>
            </div>
            <div class="lp-problem-card">
              <h3>2. Outdated Product Information</h3>
              <p>Copywriters and agencies frequently reuse expired prices, obsolete discount bounds, or incorrect warranty terms across fast-paced ad channels.</p>
            </div>
            <div class="lp-problem-card">
              <h3>3. Off-brand Creatives</h3>
              <p>Visual assets published with missing logos, unapproved palettes, or low contrast diminish visual identity and fail enterprise accessibility standards.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: The Solution (Features) -->
      <section class="lp-grey-section" id="features">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">Enterprise Capabilities</span>
            <h2 class="lp-sec-title">Meet your brand's intelligent quality-control layer.</h2>
            <p class="lp-sec-desc">Deterministic enforcement meets intuitive human governance across every published asset.</p>
          </div>

          <div class="lp-features-grid">
            <div class="lp-feat-card">
              <div class="lp-feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <div class="lp-feat-content">
                <h3>1. Smart Audit Studio</h3>
                <p>Analyze marketing copy against approved brand facts in real-time with precise text offsets, quote extraction, and evidence-backed citations.</p>
              </div>
            </div>

            <div class="lp-feat-card">
              <div class="lp-feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div class="lp-feat-content">
                <h3>2. AI Fix Lab</h3>
                <p>Discover safer ways to rewrite flagged claims with side-by-side diff comparisons, purpose guards, and instant risk reduction telemetry.</p>
              </div>
            </div>

            <div class="lp-feat-card">
              <div class="lp-feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <div class="lp-feat-content">
                <h3>3. Brand Policy Centre</h3>
                <p>Manage single-source-of-truth brand memory with versioned facts, pricing rules, warranty terms, and unapproved terminology.</p>
              </div>
            </div>

            <div class="lp-feat-card">
              <div class="lp-feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div class="lp-feat-content">
                <h3>4. Proof Vault</h3>
                <p>Maintain tamper-evident SHA-256 hash chains of approvals, ensuring verifiable audit trails for compliance officers and external regulators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: How It Works -->
      <section class="lp-light-section" id="workflow">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">The Workflow</span>
            <h2 class="lp-sec-title">From draft to approved in four traceable steps.</h2>
            <p class="lp-sec-desc">Automated rules do the checking; your qualified reviewers make the final decision.</p>
          </div>

          <div class="lp-steps-grid">
            <div class="lp-step-card">
              <div class="lp-step-num">01</div>
              <h3>Create</h3>
              <p>Creator inputs copy or uploads creative posters, specifying the product and targeted marketing channel.</p>
            </div>
            <div class="lp-step-card">
              <div class="lp-step-num">02</div>
              <h3>Verify</h3>
              <p>Deterministic rules engine validates price lists, discount thresholds, warranty duration, and mandated disclaimers.</p>
            </div>
            <div class="lp-step-card">
              <div class="lp-step-num">03</div>
              <h3>Improve</h3>
              <p>Fix Lab presents recommended corrections, allowing instant acceptance and purpose verification.</p>
            </div>
            <div class="lp-step-card">
              <div class="lp-step-num">04</div>
              <h3>Approve</h3>
              <p>Four-eyes human review approves the content, issuing a cryptographically chained Proof Certificate.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7: Multilingual Intelligence -->
      <section class="lp-grey-section" id="multilingual">
        <div class="lp-container">
          <div class="lp-lang-grid">
            <div>
              <span class="lp-sec-tag">Multilingual Governance</span>
              <h2 class="lp-sec-title">Brand protection should speak your language.</h2>
              <p class="lp-sec-desc" style="margin-bottom:20px;">
                Campaigns in India and global markets blend languages. BrandProof AI evaluates claims written in English, Hindi, and Hinglish against the same canonical brand facts.
              </p>
              <div style="font-size:13.5px;color:var(--text-secondary);line-height:1.6;">
                Our multilingual tokenizers map spoken and written numbers (e.g., “₹7,000”, “seven thousand”, “saat hazaar”, “सात हज़ार”) back to exact rule conditions with zero false alarms.
              </div>
            </div>

            <div>
              <div class="lp-lang-card">
                <div class="lp-lang-tag">English Copy</div>
                <div class="lp-lang-text">“SoundPods Pro now for only ₹7,000 with 50% discount and lifetime warranty!”</div>
                <div style="margin-top:6px;font-size:12px;color:var(--danger);">→ Flags 50% discount & unsupported lifetime warranty</div>
              </div>
              <div class="lp-lang-card">
                <div class="lp-lang-tag">Hinglish Copy</div>
                <div class="lp-lang-text">“SoundPods Pro sirf saat hazaar rupaye mein, aadhe daam par! Aajeevan warranty!”</div>
                <div style="margin-top:6px;font-size:12px;color:var(--danger);">→ Flags written price & ‘aadhe daam’ (50% off) against policy</div>
              </div>
              <div class="lp-lang-card">
                <div class="lp-lang-tag">Hindi Copy</div>
                <div class="lp-lang-text">“सिर्फ सात हज़ार रुपये में SoundPods Pro! पचास प्रतिशत की छूट और आजीवन वारंटी।”</div>
                <div style="margin-top:6px;font-size:12px;color:var(--danger);">→ Flags Hindi price and warranty contradiction exactly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 8: Visual Creative Checking -->
      <section class="lp-light-section">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">Creative Inspection</span>
            <h2 class="lp-sec-title">Visual brand governance before printing or posting.</h2>
            <p class="lp-sec-desc">Ensure digital posters and print creatives adhere to approved logos, color palettes, and contrast ratios.</p>
          </div>

          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:var(--radius-lg);padding:30px;display:grid;grid-template-columns:1fr 1.2fr;gap:30px;align-items:center;">
            <div>
              <img src="/static/samples/diwali_poster_offbrand.png" alt="Creative Scan Preview" style="width:100%;border-radius:8px;border:1px solid #CBD5E1;box-shadow:0 4px 14px rgba(0,0,0,0.06);">
            </div>
            <div>
              <div style="display:flex;gap:8px;margin-bottom:12px;">
                <span class="badge badge-high">Missing Logo</span>
                <span class="badge badge-medium">Palette Match: 62%</span>
                <span class="badge" style="background:#F1F5F9;">1080 × 1080 px</span>
              </div>
              <h3 style="font-size:20px;color:var(--navy-bg);margin-bottom:10px;">Automated Creative Scan Telemetry</h3>
              <p style="font-size:14.5px;color:var(--text-secondary);margin-bottom:16px;">
                Deterministic vision rules inspect pixel template matching for the approved ABC Electronics logo mark, measure contrast across text bounding boxes, and compute color Delta-E against the approved brand palette.
              </p>
              <div style="background:#FFFFFF;border:1px solid #E2E8F0;padding:12px 16px;border-radius:6px;font-size:13px;">
                <strong>Inspection Finding:</strong> Creative draft lacks the approved primary logo mark and utilizes unverified promotional banner colors.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 9: Proof and Accountability -->
      <section class="lp-grey-section">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">Proof & Verification</span>
            <h2 class="lp-sec-title">Every approval deserves evidence.</h2>
            <p class="lp-sec-desc">Cryptographically sealed records that prevent disputes and guarantee provenance.</p>
          </div>

          <div style="background:var(--navy-bg);border:1px solid var(--navy-border);border-radius:var(--radius-lg);padding:36px;color:#FFFFFF;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;">
            <div>
              <h3 style="font-size:22px;color:var(--lime);margin-bottom:12px;">Tamper-Evident SHA-256 Hash Chaining</h3>
              <p style="font-size:14.5px;color:#CBD5E1;line-height:1.6;margin-bottom:20px;">
                When a Reviewer approves a campaign, BrandProof computes a SHA-256 hash of the final content, binds it to the active Brand Memory version, and links it to the previous certificate's hash.
              </p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;font-size:13.5px;color:#A9B8D0;">
                <li>✓ <strong>Four-eyes rule:</strong> Creators cannot approve their own submissions</li>
                <li>✓ <strong>Immutable linkage:</strong> Modifying past approvals invalidates the chain</li>
                <li>✓ <strong>Instant public verification:</strong> Re-hash any text against the vault</li>
              </ul>
            </div>

            <div style="background:var(--navy-surface);border:1px solid var(--navy-border);border-radius:var(--radius-md);padding:24px;font-family:var(--font-mono);font-size:12px;">
              <div style="color:var(--lime);font-weight:700;margin-bottom:10px;">// PROOF CERTIFICATE SEAL</div>
              <div style="color:#A9B8D0;margin-bottom:6px;">Certificate ID: <span style="color:#FFF;">#CERT-89241</span></div>
              <div style="color:#A9B8D0;margin-bottom:6px;">Content Hash: <span style="color:#FFF;">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span></div>
              <div style="color:#A9B8D0;margin-bottom:6px;">Prev Hash: <span style="color:#FFF;">7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</span></div>
              <div style="color:#A9B8D0;margin-bottom:6px;">Approver: <span style="color:#FFF;">Kabir Singh (Reviewer)</span></div>
              <div style="color:var(--emerald);margin-top:12px;font-weight:700;">✓ CHAIN STATUS: VERIFIED & INTACT</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 10: Team BugHunters -->
      <section class="lp-light-section" id="team">
        <div class="lp-container">
          <div class="lp-sec-head">
            <span class="lp-sec-tag">Team BugHunters</span>
            <h2 class="lp-sec-title">Built by BugHunters. Designed for trustworthy brands.</h2>
            <p class="lp-sec-desc">Department of Computer Science & Engineering · Indian Institute of Technology Patna</p>
          </div>

          <div class="lp-team-grid">
            <div class="lp-team-card">
              <div class="lp-avatar">AK</div>
              <div>
                <h4>Ayush Kumar</h4>
                <span>Team Leader, AI & Architecture</span>
              </div>
            </div>
            <div class="lp-team-card">
              <div class="lp-avatar">AM</div>
              <div>
                <h4>Akanksha Mishra</h4>
                <span>Backend</span>
              </div>
            </div>
            <div class="lp-team-card">
              <div class="lp-avatar">SR</div>
              <div>
                <h4>Shiksha Rawat</h4>
                <span>Frontend</span>
              </div>
            </div>
            <div class="lp-team-card">
              <div class="lp-avatar">MK</div>
              <div>
                <h4>Mahima Kumari</h4>
                <span>UI/UX & Accessibility</span>
              </div>
            </div>
            <div class="lp-team-card">
              <div class="lp-avatar">MA</div>
              <div>
                <h4>Md Akil Akhtar</h4>
                <span>Images & DevOps</span>
              </div>
            </div>
            <div class="lp-team-card">
              <div class="lp-avatar">AP</div>
              <div>
                <h4>Antra Priyadarshini</h4>
                <span>Research, QA & Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 11: Final CTA -->
      <section class="lp-cta-sec">
        <div class="lp-container">
          <h2>Before your next campaign goes live, make sure it is BrandProof verified.</h2>
          <p>Audit your content. Protect your identity. Prove your approvals.</p>
          <a href="#/overview" class="btn btn-primary btn-lg" id="lp-btn-bottom-launch" style="padding:14px 28px;font-size:16px;">
            Launch BrandProof Workspace →
          </a>
        </div>
      </section>

      <!-- Section 12: Footer -->
      <footer class="lp-footer">
        <div class="lp-container">
          <div class="lp-footer-grid">
            <div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
                <div class="lp-logo-box" style="width:28px;height:28px;font-size:13px;">BP</div>
                <strong style="color:#FFF;font-size:16px;">BrandProof AI</strong>
              </div>
              <p style="max-width:380px;line-height:1.6;margin-bottom:14px;">
                An intelligent brand-governance platform that detects risky claims, checks creatives against approved policies, and preserves an accountable approval record.
              </p>
              <div style="color:var(--lime);font-weight:600;font-size:12px;">Team BugHunters · IIT Patna</div>
            </div>

            <div class="lp-footer-col">
              <h5>Platform</h5>
              <a href="#platform">Capabilities</a>
              <a href="#features">Smart Audit Studio</a>
              <a href="#features">AI Fix Lab</a>
              <a href="#features">Brand Policies</a>
              <a href="#features">Proof Vault</a>
            </div>

            <div class="lp-footer-col">
              <h5>Resources</h5>
              <a href="#/overview">Live Workspace</a>
              <a href="/docs">REST API Docs</a>
              <a href="https://github.com/sanjaykumarpathak640-png/brandproof-ai" target="_blank" rel="noopener">GitHub Reference</a>
              <a href="#team">Team BugHunters</a>
            </div>
          </div>

          <div style="border-top:1px solid #1A263B;padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;">
            <span>© 2026 BrandProof AI — BugHunters Edition. All rights reserved.</span>
            <span>Developed for Team BugHunters, IIT Patna</span>
          </div>
        </div>
      </footer>
    </div>
    `;
  }
};

window.LandingPage = LandingPage;

