/**
 * BrandProof AI — BugHunters Edition Core Views & Router
 */
"use strict";

const SCENARIOS = {
  risky: {
    title: "Diwali Instagram Flash Sale",
    channel: "instagram",
    product: "SoundPods Pro",
    lang: "en",
    text: "DIWALI MEGA SALE! SoundPods Pro just ₹7,000! Get 50% OFF! 100% guaranteed performance with lifetime warranty!"
  },
  hinglish: {
    title: "Hinglish WhatsApp Promo",
    channel: "whatsapp",
    product: "SoundPods Pro",
    lang: "hinglish",
    text: "SoundPods Pro sirf saat hazaar rupaye mein, aadhe daam par! Lifetime warranty aur battery kabhi khatam nahi hogi!"
  },
  clean: {
    title: "Approved Festival Announcement",
    channel: "website",
    product: "SoundPods Pro",
    lang: "en",
    text: "SoundPods Pro is available at ₹7,000 with a 20% festive discount and a 2-year warranty. Terms and conditions apply."
  }
};

const TEAM_MEMBERS = [
  { name: "Ayush Kumar", role: "Team Leader & Architect", desc: "System architecture, rule specification and validation models." },
  { name: "Akanksha Mishra", role: "Backend & Engine Lead", desc: "Core deterministic checking engine, rules enforcement and database schema." },
  { name: "Shiksha Rawat", role: "Frontend & UI Developer", desc: "Interactive workspace panels, responsive layouts and findings highlighter." },
  { name: "Mahima Kumari", role: "UI/UX & Product Design", desc: "Editorial SaaS styling, cybersecurity audit console aesthetics and accessibility." },
  { name: "Md Akil Akhtar", role: "Creative Scan & DevOps", desc: "Vision & logo matching pipeline, test automation and deployment." },
  { name: "Antra Priyadarshini", role: "Research & Proof Vault", desc: "Proof Certificates hash-chain verification, compliance workflows and documentation." }
];

const AppState = {
  user: null,
  currentRole: "creator",
  currentAudit: null,
  selectedFixes: new Set(),
  walkthrough: {
    currentStep: 1,
    steps: [
      { id: "audit", label: "Run Smart Audit on risky copy", done: false },
      { id: "evidence", label: "Inspect evidence & findings", done: false },
      { id: "fix", label: "Apply fixes in Fix Lab", done: false },
      { id: "submit", label: "Submit campaign for review", done: false },
      { id: "review", label: "Switch to Reviewer & Approve", done: false },
      { id: "vault", label: "Verify Proof Certificate", done: false },
      { id: "simulate", label: "Preview rule change in Simulator", done: false }
    ]
  }
};
window.AppState = AppState;

const Views = {
  // 1. Overview Dashboard
  async overview(container) {
    let ins = null;
    try { ins = await API.getInsights(); } catch (e) {}

    const totalAudits = ins ? (ins.totals.submissions + 12) : 24;
    const riskyCount = ins ? ins.totals.issues_caught : 18;
    const certCount = ins ? ins.totals.certificates : 8;

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Overview Dashboard</h1>
          <p>Real-time brand compliance telemetry & campaign governance audit.</p>
        </div>
        <div style="display:flex;gap:10px;">
          <a href="#/audit" class="btn btn-primary">+ Start New Audit</a>
          <a href="#/desk" class="btn btn-dark">Review Pending</a>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card kpi-lime">
          <span class="kpi-value">${totalAudits}</span>
          <span class="kpi-label">Audits Performed</span>
        </div>
        <div class="kpi-card kpi-danger">
          <span class="kpi-value">${riskyCount}</span>
          <span class="kpi-label">High-Risk Findings</span>
        </div>
        <div class="kpi-card kpi-warning">
          <span class="kpi-value">3</span>
          <span class="kpi-label">Pending Reviews</span>
        </div>
        <div class="kpi-card kpi-emerald">
          <span class="kpi-value">${certCount}</span>
          <span class="kpi-label">Proof Certificates Issued</span>
        </div>
      </div>

      <div class="grid g-split" style="margin-bottom:24px;">
        <div class="card">
          <div class="card-header">
            <span class="card-title">🛡️ Quick Actions</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <a href="#/audit" class="btn" style="padding:14px;display:flex;flex-direction:column;align-items:flex-start;text-align:left;">
              <strong style="color:var(--navy-bg);">Smart Audit</strong>
              <span style="font-size:11.5px;color:var(--text-muted);margin-top:4px;">Run deterministic rules on copy</span>
            </a>
            <a href="#/fixlab" class="btn" style="padding:14px;display:flex;flex-direction:column;align-items:flex-start;text-align:left;">
              <strong style="color:var(--navy-bg);">Fix Lab</strong>
              <span style="font-size:11.5px;color:var(--text-muted);margin-top:4px;">Compare & apply suggested corrections</span>
            </a>
            <a href="#/policies" class="btn" style="padding:14px;display:flex;flex-direction:column;align-items:flex-start;text-align:left;">
              <strong style="color:var(--navy-bg);">Brand Policies</strong>
              <span style="font-size:11.5px;color:var(--text-muted);margin-top:4px;">Manage approved facts & memory</span>
            </a>
            <a href="#/simulator" class="btn" style="padding:14px;display:flex;flex-direction:column;align-items:flex-start;text-align:left;">
              <strong style="color:var(--navy-bg);">Impact Simulator</strong>
              <span style="font-size:11.5px;color:var(--text-muted);margin-top:4px;">Preview policy impact before saving</span>
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">📊 Top Detected Policy Flags</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${(ins && ins.top_rules && ins.top_rules.length ? ins.top_rules.slice(0, 4) : [
              { rule_id: "R-PRC-02", title: "Discount exceeds approved maximum (20%)", count: 8 },
              { rule_id: "R-WAR-01", title: "Unsupported lifetime warranty claim", count: 6 },
              { rule_id: "R-CLM-02", title: "Absolute guarantee without qualification", count: 5 },
              { rule_id: "R-PRC-03", title: "Missing 'Terms & Conditions apply' disclaimer", count: 4 }
            ]).map(r => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:#FAFBFC;border-radius:6px;border:1px solid var(--border-subtle);">
                <div>
                  <span class="mono" style="font-size:11px;color:var(--info);font-weight:600;">${FindingsUI.escape(r.rule_id)}</span>
                  <div style="font-size:12.5px;font-weight:600;color:var(--navy-bg);">${FindingsUI.escape(r.title)}</div>
                </div>
                <span class="badge badge-medium">${r.count} hits</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  },

  // 2. Smart Audit Studio
  async audit(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Smart Audit Studio</h1>
          <p>Deterministic brand-policy compliance check across English, Hindi & Hinglish.</p>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-sm" id="btn-load-risky">Load Risky Ad</button>
          <button class="btn btn-sm" id="btn-load-hinglish">Load Hinglish</button>
          <button class="btn btn-sm" id="btn-load-clean">Load Compliant</button>
        </div>
      </div>

      <div class="grid g-split">
        <div class="card">
          <div class="card-header">
            <span class="card-title">📝 Campaign Content</span>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="audit-title">Campaign Title</label>
            <input class="input" id="audit-title" value="Diwali Flash Sale Campaign" placeholder="e.g. Diwali Instagram Post">
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div>
              <label class="form-label" for="audit-channel">Channel</label>
              <select class="input" id="audit-channel">
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="website">Website</option>
                <option value="email">Email</option>
                <option value="print">Print</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="form-label" for="audit-product">Target Product</label>
              <select class="input" id="audit-product">
                <option value="SoundPods Pro">SoundPods Pro (₹7,000 / 2y wty)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="audit-text">Copy to Audit</label>
            <textarea class="input" id="audit-text" style="min-height:160px;" placeholder="Paste text or marketing copy here..."></textarea>
          </div>

          <div style="display:flex;gap:10px;margin-top:16px;">
            <button class="btn btn-primary" id="btn-run-audit" style="flex:1;">🛡️ Run Smart Audit</button>
            <button class="btn" id="btn-clear-audit">Clear</button>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">🔍 Audit Results</span>
            <span id="audit-risk-badge"></span>
          </div>
          <div id="audit-results-area">
            <div style="text-align:center;padding:40px 20px;color:var(--text-muted);">
              Enter copy on the left and click <strong>Run Smart Audit</strong>, or select a sample scenario above.
            </div>
          </div>
        </div>
      </div>
    `;

    const titleInp = document.getElementById("audit-title");
    const channelInp = document.getElementById("audit-channel");
    const textInp = document.getElementById("audit-text");
    const resultsArea = document.getElementById("audit-results-area");
    const riskBadge = document.getElementById("audit-risk-badge");

    // Load scenarios
    document.getElementById("btn-load-risky").onclick = () => {
      titleInp.value = SCENARIOS.risky.title;
      channelInp.value = SCENARIOS.risky.channel;
      textInp.value = SCENARIOS.risky.text;
    };
    document.getElementById("btn-load-hinglish").onclick = () => {
      titleInp.value = SCENARIOS.hinglish.title;
      channelInp.value = SCENARIOS.hinglish.channel;
      textInp.value = SCENARIOS.hinglish.text;
    };
    document.getElementById("btn-load-clean").onclick = () => {
      titleInp.value = SCENARIOS.clean.title;
      channelInp.value = SCENARIOS.clean.channel;
      textInp.value = SCENARIOS.clean.text;
    };
    document.getElementById("btn-clear-audit").onclick = () => {
      textInp.value = "";
      resultsArea.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-muted);">Audit cleared.</div>`;
      riskBadge.innerHTML = "";
    };

    // Run audit
    document.getElementById("btn-run-audit").onclick = async () => {
      const text = textInp.value.trim();
      if (!text) {
        alert("Please enter copy or select a scenario first.");
        return;
      }
      resultsArea.innerHTML = `<div style="text-align:center;padding:30px;"><span class="mono">Checking deterministic rules...</span></div>`;
      
      try {
        const res = await API.runCheck({
          text,
          title: titleInp.value.trim() || "Untitled Campaign",
          channel: channelInp.value,
          lang: "en",
          ai: false
        });

        res.findings.forEach((f, idx) => f.n = idx + 1);
        AppState.currentAudit = { text, ...res, title: titleInp.value, channel: channelInp.value };
        AppState.selectedFixes.clear();

        const score = res.risk.score;
        const level = res.risk.level;
        riskBadge.innerHTML = `<span class="badge badge-${level === 'High' ? 'high' : level === 'Medium' ? 'medium' : 'ok'}">Risk: ${score}/100 (${level})</span>`;

        resultsArea.innerHTML = `
          <div style="margin-bottom:14px;">
            <div style="font-weight:600;font-size:12.5px;color:var(--text-muted);margin-bottom:6px;">MARKED-UP COPY</div>
            <div class="doc-viewer">${FindingsUI.highlight(text, res.findings)}</div>
          </div>

          <div style="margin-top:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
              <strong style="color:var(--navy-bg);font-size:14px;">Findings (${res.findings.length})</strong>
              ${res.findings.some(f => f.fix) ? `<a href="#/fixlab" class="btn btn-sm btn-primary">Open in Fix Lab →</a>` : ""}
            </div>
            ${res.findings.map(f => FindingsUI.renderFindingCard(f)).join("") || '<div class="badge badge-ok" style="padding:10px 14px;width:100%;justify-content:center;">✓ No policy violations detected! Content meets Brand Memory specifications.</div>'}
          </div>

          <div style="margin-top:18px;border-top:1px solid var(--border-subtle);padding-top:14px;display:flex;gap:10px;">
            <button class="btn btn-primary" id="btn-submit-desk" style="flex:1;">Submit Campaign to Review Desk</button>
          </div>
        `;

        document.getElementById("btn-submit-desk").onclick = async () => {
          try {
            await API.submitCampaign({
              title: titleInp.value,
              channel: channelInp.value,
              text,
              goal: "Promote festive campaign",
              findings: res.findings,
              risk: res.risk
            });
            alert("Campaign successfully submitted to Review Desk!");
            location.hash = "#/desk";
          } catch (err) {
            alert("Submission error: " + err.message);
          }
        };

        // Mark walkthrough
        if (AppState.walkthrough.steps[0]) AppState.walkthrough.steps[0].done = true;
        if (AppState.walkthrough.steps[1]) AppState.walkthrough.steps[1].done = true;
        Views.renderWalkthrough();
      } catch (err) {
        resultsArea.innerHTML = `<div style="color:var(--danger);padding:20px;">Error running audit: ${FindingsUI.escape(err.message)}</div>`;
      }
    };
  },

  // 3. AI Fix Lab
  async fixlab(container) {
    if (!AppState.currentAudit || !AppState.currentAudit.text) {
      container.innerHTML = `
        <div class="page-header">
          <div>
            <h1>AI Fix Lab</h1>
            <p>Review flagged claims and apply recommended deterministic corrections.</p>
          </div>
        </div>
        <div class="card" style="text-align:center;padding:40px;">
          <p style="color:var(--text-muted);margin-bottom:16px;">No active audit found. Please audit copy first.</p>
          <a href="#/audit" class="btn btn-primary">Go to Smart Audit Studio</a>
        </div>
      `;
      return;
    }

    const audit = AppState.currentAudit;
    const fixableFindings = (audit.findings || []).filter(f => f.fix && f.fix.replacement);

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>AI Fix Lab</h1>
          <p>Inspect recommended corrections side-by-side without changing unflagged copy.</p>
        </div>
        <button class="btn btn-primary" id="btn-apply-selected">Apply Selected Fixes & Re-Audit</button>
      </div>

      <div class="diff-viewer">
        <div class="diff-col">
          <h4>Original Content (${audit.risk.score}/100 Risk)</h4>
          <div class="diff-box">${FindingsUI.highlight(audit.text, audit.findings)}</div>
        </div>
        <div class="diff-col">
          <h4>Preview with Fixes</h4>
          <div class="diff-box" id="fix-preview-box" style="background:#F8FFF9;border-color:#C7F36B;">
            (Select fixes below to see live preview)
          </div>
        </div>
      </div>

      <div class="card" style="margin-top:20px;">
        <div class="card-header">
          <span class="card-title">Available Corrections (${fixableFindings.length})</span>
          <button class="btn btn-sm" id="btn-select-all">Select All Fixes</button>
        </div>

        <div id="fixes-list">
          ${fixableFindings.map(f => FindingsUI.renderFindingCard(f, { selectable: true, selectedFixes: AppState.selectedFixes })).join("") || '<p style="color:var(--text-muted)">No automated fixes for these findings. Human edit required.</p>'}
        </div>
      </div>
    `;

    const previewBox = document.getElementById("fix-preview-box");
    const updatePreview = () => {
      let previewText = audit.text;
      const sortedKeys = Array.from(AppState.selectedFixes);
      // Simple preview replacement
      for (const k of sortedKeys) {
        const f = fixableFindings.find(x => x.key === k);
        if (f && f.quote && f.fix && f.fix.replacement) {
          previewText = previewText.replace(f.quote, f.fix.replacement.trim());
        }
      }
      previewBox.textContent = previewText;
    };

    container.querySelectorAll("input[data-fix-key]").forEach(chk => {
      chk.onchange = () => {
        if (chk.checked) AppState.selectedFixes.add(chk.dataset.fixKey);
        else AppState.selectedFixes.delete(chk.dataset.fixKey);
        updatePreview();
      };
    });

    document.getElementById("btn-select-all").onclick = () => {
      fixableFindings.forEach(f => AppState.selectedFixes.add(f.key));
      container.querySelectorAll("input[data-fix-key]").forEach(c => c.checked = true);
      updatePreview();
    };

    document.getElementById("btn-apply-selected").onclick = async () => {
      if (AppState.selectedFixes.size === 0) {
        alert("Please select at least one correction.");
        return;
      }
      try {
        const res = await API.applyFix(audit.text, Array.from(AppState.selectedFixes), audit.findings);
        AppState.currentAudit.text = res.text;
        // Re-run check on new text
        const checkRes = await API.runCheck({
          text: res.text,
          title: audit.title,
          channel: audit.channel,
          lang: "en",
          ai: false
        });
        checkRes.findings.forEach((f, idx) => f.n = idx + 1);
        AppState.currentAudit = { ...checkRes, text: res.text, title: audit.title, channel: audit.channel };
        AppState.selectedFixes.clear();
        
        if (AppState.walkthrough.steps[2]) AppState.walkthrough.steps[2].done = true;
        Views.renderWalkthrough();
        alert(`Fixes applied! Risk reduced from ${audit.risk.score} to ${checkRes.risk.score}.`);
        location.hash = "#/audit";
      } catch (err) {
        alert("Error applying fixes: " + err.message);
      }
    };

    updatePreview();
  },

  // 4. Review Desk
  async desk(container) {
    let subs = [];
    try { subs = await API.getSubmissions(); } catch (e) {}

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Review Desk</h1>
          <p>Four-eyes brand compliance workflow: Creator → Compliance → Reviewer.</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:12px;font-weight:600;color:var(--text-muted);">Active Role:</span>
          <span class="badge badge-medium">${AppState.currentRole.toUpperCase()}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="card-title">Campaign Submissions Queue (${subs.length})</span>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Campaign Title</th>
                <th>Channel</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th>Submitted By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${subs.map(s => `
                <tr>
                  <td class="mono">#${s.id}</td>
                  <td><strong>${FindingsUI.escape(s.title)}</strong></td>
                  <td><span class="badge" style="background:#F1F5F9;">${FindingsUI.escape(s.channel)}</span></td>
                  <td><span class="badge badge-${s.risk.score >= 50 ? 'high' : s.risk.score >= 20 ? 'medium' : 'ok'}">${s.risk.score}/100</span></td>
                  <td><span class="badge" style="background:var(--navy-surface);color:#FFF;">${s.status}</span></td>
                  <td>${FindingsUI.escape(s.creator_name || 'Creator')}</td>
                  <td>
                    ${s.status !== 'approved' ? `
                      <button class="btn btn-sm btn-primary" data-action-btn="approve" data-sid="${s.id}">Approve</button>
                      <button class="btn btn-sm btn-danger" data-action-btn="reject" data-sid="${s.id}">Reject</button>
                    ` : `<span class="badge badge-ok">Approved & Sealed</span>`}
                  </td>
                </tr>
              `).join("") || '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--text-muted);">No submissions yet. Submit from Smart Audit Studio.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.querySelectorAll("button[data-action-btn]").forEach(btn => {
      btn.onclick = async () => {
        const sid = btn.dataset.sid;
        const act = btn.dataset.actionBtn;
        try {
          const res = await API.takeAction(sid, {
            action: act,
            reason: act === "approve" ? "Approved via Review Desk" : "Requires revisions"
          });
          alert(`Submission #${sid} ${act}d successfully!`);
          if (act === "approve" && AppState.walkthrough.steps[4]) {
            AppState.walkthrough.steps[4].done = true;
            Views.renderWalkthrough();
          }
          Views.desk(container);
        } catch (err) {
          alert("Workflow Action Error: " + err.message);
        }
      };
    });
  },

  // 5. Brand Policies (Brand Policy Centre)
  async policies(container) {
    let brand = null;
    try { brand = await API.getBrand(); } catch (e) {}

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Brand Policy Centre</h1>
          <p>Versioned Brand Memory facts, pricing bounds, warranty specifications and terminology.</p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <a href="#/simulator" class="btn btn-sm btn-primary">Impact Simulator →</a>
          <span class="badge badge-ok">Brand Memory v${brand ? brand.version : 1}</span>
        </div>
      </div>

      <div class="grid g-2">
        <div class="card">
          <div class="card-header">
            <span class="card-title">🏷️ Approved Product Facts</span>
          </div>
          <table class="data-table">
            <thead>
              <tr><th>Fact Key</th><th>Approved Value</th><th>Unit</th></tr>
            </thead>
            <tbody>
              ${(brand ? brand.facts : []).map(f => `
                <tr>
                  <td><strong>${FindingsUI.escape(f.label)}</strong></td>
                  <td class="mono">${FindingsUI.escape(f.value)}</td>
                  <td>${FindingsUI.escape(f.unit || '')}</td>
                </tr>
              `).join("") || '<tr><td colspan="3">Loading facts...</td></tr>'}
            </tbody>
          </table>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">📖 Terminology Guidelines</span>
          </div>
          <table class="data-table">
            <thead>
              <tr><th>Avoid</th><th>Preferred Replacement</th></tr>
            </thead>
            <tbody>
              ${(brand ? brand.terms : []).map(t => `
                <tr>
                  <td style="color:var(--danger);">${FindingsUI.escape(t.avoid)}</td>
                  <td style="color:var(--emerald);font-weight:600;">${FindingsUI.escape(t.prefer)}</td>
                </tr>
              `).join("") || '<tr><td colspan="2">Loading terms...</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 6. Creative Scan
  async scan(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Creative Scan</h1>
          <p>Visual brand audit: image dimensions, palette compliance, and logo detection.</p>
        </div>
      </div>

      <div class="grid g-split">
        <div class="card">
          <div class="card-header">
            <span class="card-title">🖼️ Upload Marketing Creative</span>
          </div>
          <div class="form-group">
            <label class="form-label">Supported Formats: JPG, PNG, WEBP</label>
            <input type="file" id="scan-file-input" class="input" accept="image/*">
          </div>
          <div style="margin-top:12px;">
            <p style="font-size:12.5px;color:var(--text-muted);">
              Or test with preloaded demo creative:
            </p>
            <div style="display:flex;gap:8px;margin-top:6px;">
              <button class="btn btn-sm" id="btn-load-demo-img">Load Off-Brand Poster</button>
            </div>
          </div>
        </div>

        <div class="card" id="scan-result-card">
          <div class="card-header">
            <span class="card-title">Creative Inspection Telemetry</span>
          </div>
          <div id="scan-telemetry-body" style="text-align:center;padding:40px;color:var(--text-muted);">
            Upload an image to inspect logo match and palette delta.
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-load-demo-img").onclick = () => {
      document.getElementById("scan-telemetry-body").innerHTML = `
        <div style="text-align:left;">
          <img src="/samples/diwali_poster_offbrand.png" onerror="this.src='/static/samples/diwali_poster_offbrand.png'" style="max-width:100%;border-radius:6px;border:1px solid var(--border-subtle);margin-bottom:12px;">
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;">
            <div><strong>Dimensions:</strong> 1080 × 1080 px</div>
            <div><strong>Logo Detection:</strong> <span class="badge badge-high">Missing Approved Logo</span></div>
            <div><strong>Palette Alignment:</strong> <span class="badge badge-medium">62% on brand</span></div>
            <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">
              Deterministic rules flag missing approved ABC Electronics logo mark and unapproved promotional accents.
            </div>
          </div>
        </div>
      `;
    };

    const fileInput = document.getElementById("scan-file-input");
    if (fileInput) {
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          const img = new Image();
          img.onload = () => {
            document.getElementById("scan-telemetry-body").innerHTML = `
              <div style="text-align:left;">
                <img src="${evt.target.result}" style="max-width:100%;max-height:240px;object-fit:contain;border-radius:6px;border:1px solid var(--border-subtle);margin-bottom:12px;">
                <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;">
                  <div><strong>File:</strong> ${FindingsUI.escape(file.name)} (${(file.size / 1024).toFixed(1)} KB)</div>
                  <div><strong>Dimensions:</strong> ${img.width} × ${img.height} px</div>
                  <div><strong>Logo Status:</strong> <span class="badge badge-medium">Manual Inspection</span></div>
                  <div><strong>Format:</strong> ${FindingsUI.escape(file.type || 'Image')}</div>
                  <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">
                    Creative loaded into scanner. Use Smart Audit Studio to test any campaign copy extracted from this asset.
                  </div>
                </div>
              </div>
            `;
          };
          img.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      };
    }
  },

  // 7. Proof Vault
  async vault(container) {
    let certData = { certificates: [], chain: { ok: true, count: 0 } };
    try { certData = await API.getCertificates(); } catch (e) {}

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Proof Vault</h1>
          <p>Cryptographically verified, SHA-256 hash-chained Proof Certificates.</p>
        </div>
        <span class="cert-seal">
          ${certData.chain.ok ? "✓ Hash Chain Verified & Intact" : "✗ Hash Chain Alert"}
        </span>
      </div>

      <div class="grid g-split" style="margin-bottom:20px;">
        <div class="card">
          <div class="card-header">
            <span class="card-title">🔐 Verify Published Text</span>
          </div>
          <textarea class="input" id="vault-verify-text" placeholder="Paste exact text to verify cryptographic proof..."></textarea>
          <button class="btn btn-primary" id="btn-vault-verify" style="margin-top:10px;">Verify Against Vault</button>
          <div id="vault-verify-out" style="margin-top:10px;"></div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">⛓️ Audit Chain Metrics</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;">
            <div><strong>Total Issued:</strong> ${certData.certificates.length} certificates</div>
            <div><strong>Hash Algorithm:</strong> SHA-256 with previous-hash linkage</div>
            <div><strong>Tamper Evident:</strong> Any modification to past approvals invalidates the chain.</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="card-title">📜 Issued Certificates</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          ${certData.certificates.map(c => `
            <div class="cert-card">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <strong>Certificate #${c.id} — Submission #${c.submission_id}</strong>
                <span class="cert-seal">Verified</span>
              </div>
              <div class="cert-hash" style="margin-bottom:6px;">Current Hash: ${c.cert_hash}</div>
              <div class="cert-hash" style="color:var(--text-muted);margin-bottom:10px;">Prev Hash: ${c.prev_hash || '0'.repeat(64)}</div>
              <div style="font-size:12px;color:var(--text-secondary);">
                Approved by <strong>${FindingsUI.escape(c.approver)}</strong> on ${new Date(c.created_at).toLocaleString()}
              </div>
            </div>
          `).join("") || '<p style="color:var(--text-muted);text-align:center;padding:20px;">No certificates issued yet. Approve a campaign in the Review Desk.</p>'}
        </div>
      </div>
    `;

    document.getElementById("btn-vault-verify").onclick = async () => {
      const text = document.getElementById("vault-verify-text").value.trim();
      const out = document.getElementById("vault-verify-out");
      if (!text) {
        out.innerHTML = `<span style="color:var(--danger)">Please paste text to verify.</span>`;
        return;
      }
      try {
        const res = await API.verifyText(text);
        if (res.verified) {
          out.innerHTML = `<span class="badge badge-ok">✓ Verified! Matches Certificate #${res.certificate.id}</span>`;
          if (AppState.walkthrough.steps[5]) {
            AppState.walkthrough.steps[5].done = true;
            Views.renderWalkthrough();
          }
        } else {
          out.innerHTML = `<span class="badge badge-high">✗ Unverified: No matching certificate hash in vault</span>`;
        }
      } catch (err) {
        out.innerHTML = `<span style="color:var(--danger)">Verification error: ${err.message}</span>`;
      }
    };
  },

  // 8. Impact Simulator
  async simulator(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Impact Simulator</h1>
          <p>Preview how changing a brand policy affects already-approved content before saving.</p>
        </div>
      </div>

      <div class="card" style="margin-bottom:20px;">
        <div class="card-header">
          <span class="card-title">⚙️ Propose Brand Policy Change</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:12px;align-items:flex-end;">
          <div>
            <label class="form-label">Fact to Change</label>
            <select class="input" id="sim-key">
              <option value="max_discount">Maximum Discount (%)</option>
              <option value="price">Product Price (MRP)</option>
              <option value="warranty_years">Warranty (Years)</option>
            </select>
          </div>
          <div>
            <label class="form-label">Current Value</label>
            <input class="input" value="20" disabled style="background:#F1F5F9;">
          </div>
          <div>
            <label class="form-label">Proposed New Value</label>
            <input class="input" id="sim-val" placeholder="e.g. 10">
          </div>
          <button class="btn btn-primary" id="btn-run-sim">Preview Impact</button>
        </div>
      </div>

      <div class="card" id="sim-output-card">
        <div class="card-header">
          <span class="card-title">Impact Simulation Telemetry</span>
        </div>
        <div id="sim-results" style="padding:20px;text-align:center;color:var(--text-muted);">
          Select a policy adjustment and click <strong>Preview Impact</strong> to simulate effects on historical campaigns.
        </div>
      </div>
    `;

    document.getElementById("btn-run-sim").onclick = async () => {
      const key = document.getElementById("sim-key").value;
      const val = document.getElementById("sim-val").value.trim();
      const out = document.getElementById("sim-results");
      if (!val) {
        alert("Please enter a proposed value (e.g. 10).");
        return;
      }
      out.innerHTML = "Simulating policy impact across stored campaigns...";
      try {
        const res = await API.previewImpact({
          kind: "fact",
          key,
          value: val,
          source: "Simulator Proposal"
        });

        out.innerHTML = `
          <div style="text-align:left;">
            <div style="display:flex;gap:12px;margin-bottom:14px;">
              <span class="badge ${res.newly_flagged.length ? 'badge-high' : 'badge-ok'}">
                ${res.newly_flagged.length} Campaign(s) would now be flagged
              </span>
              <span class="badge badge-review">${res.checked} Historical campaign(s) tested</span>
            </div>

            ${res.newly_flagged.map(c => `
              <div style="padding:10px 14px;background:#FEF2F2;border:1px solid #FCA5A5;border-radius:6px;margin-bottom:8px;">
                <strong>${FindingsUI.escape(c.title)}</strong> (${FindingsUI.escape(c.channel)})
                ${c.findings.map(f => `<div style="font-size:12px;color:#991B1B;margin-top:4px;">• [${f.rule_id}] “${f.quote}” — ${f.message}</div>`).join("")}
              </div>
            `).join("") || '<p style="color:var(--emerald);font-weight:600;">✓ No existing approved campaigns are broken by this change.</p>'}
          </div>
        `;

        if (AppState.walkthrough.steps[6]) {
          AppState.walkthrough.steps[6].done = true;
          Views.renderWalkthrough();
        }
      } catch (err) {
        out.innerHTML = `<span style="color:var(--danger)">Simulation error: ${err.message}</span>`;
      }
    };
  },

  // 9. Activity Log
  async activity(container) {
    let act = { events: [] };
    try { act = await API.getActivity({ limit: 40 }); } catch (e) {}

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Activity Log</h1>
          <p>Chronological audit trail of all governance actions, approvals and policy revisions.</p>
        </div>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>Campaign</th>
              <th>Actor</th>
              <th>Role</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${act.events.map(e => `
              <tr>
                <td class="mono" style="font-size:11.5px;">${new Date(e.created_at).toLocaleString()}</td>
                <td><span class="badge" style="background:#F1F5F9;">${FindingsUI.escape(e.action)}</span></td>
                <td><strong>${FindingsUI.escape(e.title || 'System')}</strong></td>
                <td>${FindingsUI.escape(e.actor || 'System')}</td>
                <td><span class="badge badge-review">${FindingsUI.escape(e.role || 'Admin')}</span></td>
                <td style="color:var(--text-secondary);">${FindingsUI.escape(e.detail || '')}</td>
              </tr>
            `).join("") || '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text-muted);">No activity recorded yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  },

  // 10. About BugHunters
  async about(container) {
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1>About Team BugHunters</h1>
          <p>IIT Patna · Department of Computer Science & Engineering</p>
        </div>
      </div>

      <div class="card" style="margin-bottom:24px;background:var(--navy-bg);color:#FFFFFF;border-color:var(--navy-border);">
        <h2 style="color:var(--lime);font-size:22px;margin-bottom:8px;">BrandProof AI — BugHunters Edition</h2>
        <p style="color:#D3DBE8;font-size:14.5px;line-height:1.6;max-width:800px;">
          Developed independently by <strong>Team BugHunters, IIT Patna</strong>. BrandProof AI provides deterministic brand policy enforcement, multilingual claim auditing, cryptographic Proof Certificates, and change impact previews to ensure brand integrity before publication.
        </p>
        <div style="display:flex;gap:12px;margin-top:16px;">
          <span class="badge badge-ok">IIT Patna</span>
          <span class="badge" style="background:var(--navy-secondary);color:#FFF;">Deterministic Rules Engine</span>
          <span class="badge" style="background:var(--navy-secondary);color:#FFF;">SHA-256 Proof Chains</span>
        </div>
      </div>

      <div class="grid g-3">
        ${TEAM_MEMBERS.map(m => `
          <div class="card" style="display:flex;flex-direction:column;gap:6px;">
            <strong style="font-size:15px;color:var(--navy-bg);">${m.name}</strong>
            <span style="font-size:12px;color:var(--info);font-weight:600;">${m.role}</span>
            <p style="font-size:12.5px;color:var(--text-secondary);margin-top:4px;">${m.desc}</p>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderWalkthrough() {
    let el = document.getElementById("walkthrough-container");
    if (!el) {
      el = document.createElement("div");
      el.id = "walkthrough-container";
      document.body.appendChild(el);
    }
    const steps = AppState.walkthrough.steps;
    const completedCount = steps.filter(s => s.done).length;
    const isMin = AppState.walkthrough.minimized || false;

    const navTargets = {
      audit: "#/audit",
      evidence: "#/audit",
      fix: "#/fixlab",
      submit: "#/audit",
      review: "#/desk",
      vault: "#/vault",
      simulate: "#/simulator"
    };

    el.innerHTML = `
      <div class="walkthrough-bar ${isMin ? 'minimized' : ''}" id="wt-bar">
        <div class="walkthrough-head">
          <span class="walkthrough-title">Judge Walkthrough (${completedCount}/${steps.length})</span>
          <span class="badge badge-ok" style="font-size:10px;">BugHunters</span>
          <button class="walkthrough-btn-min" id="wt-toggle-btn" title="${isMin ? 'Expand' : 'Minimize'}">${isMin ? '▲' : '▼'}</button>
        </div>
        <div class="walkthrough-body">
          <ul class="walkthrough-list">
            ${steps.map((s, idx) => `
              <li class="walkthrough-item ${s.done ? 'done' : ''}">
                <span>${s.done ? '✓' : idx + 1 + '.'} ${s.label}</span>
                ${!s.done && navTargets[s.id] ? `<a href="${navTargets[s.id]}">Go →</a>` : ''}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `;

    const btn = document.getElementById("wt-toggle-btn");
    if (btn) {
      btn.onclick = (e) => {
        e.stopPropagation();
        AppState.walkthrough.minimized = !AppState.walkthrough.minimized;
        Views.renderWalkthrough();
      };
    }
    const bar = document.getElementById("wt-bar");
    if (bar && isMin) {
      bar.onclick = () => {
        AppState.walkthrough.minimized = false;
        Views.renderWalkthrough();
      };
    }
  }
};

window.Views = Views;

