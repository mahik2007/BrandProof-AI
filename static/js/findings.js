/**
 * BrandProof AI — BugHunters Edition Findings & Text Highlight Helpers
 */
"use strict";

const FindingsUI = {
  highlight(text, findings) {
    if (!text) return '<span class="text-muted">(no text)</span>';
    const spans = findings.filter(f => !f.target && f.end > f.start)
      .sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    
    let out = "", pos = 0;
    for (const f of spans) {
      if (f.start < pos) continue;
      out += this.escape(text.slice(pos, f.start));
      out += `<span class="hl-claim ${f.severity}" data-n="${f.n}" title="${this.escape(f.rule_id + ': ' + f.title)}">${this.escape(text.slice(f.start, f.end))}<sup>#${f.n}</sup></span>`;
      pos = f.end;
    }
    out += this.escape(text.slice(pos));
    return out;
  },

  renderFindingCard(f, opts = {}) {
    const sevBadge = `<span class="badge badge-${f.severity}">${f.severity}</span>`;
    const ruleBadge = `<span class="finding-rule-id">${this.escape(f.rule_id)}</span>`;
    
    const evidence = (f.evidence || []).map(e => `
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">
        <span class="mono" style="color:var(--info);font-weight:600;">[${this.escape(e.ref)}]</span>
        ${this.escape(e.text)}
        ${e.source ? `<span style="color:var(--text-muted);font-style:italic;">— ${this.escape(e.source)}</span>` : ""}
      </div>
    `).join("");

    let fixHtml = "";
    if (f.fix) {
      const before = f.quote ? `<del>${this.escape(f.quote)}</del> → ` : "";
      const after = f.fix.replacement.trim() ? `<ins>${this.escape(f.fix.replacement.trim())}</ins>` : `<span style="color:var(--text-muted)">(remove)</span>`;
      const isSelected = opts.selectedFixes && opts.selectedFixes.has(f.key);
      const checkbox = opts.selectable ? `<input type="checkbox" data-fix-key="${this.escape(f.key)}" ${isSelected ? "checked" : ""} style="margin-right:8px;">` : "";
      
      fixHtml = `
        <div class="finding-fix">
          ${checkbox}
          <div>
            <b>Suggested Correction:</b> ${before}${after}
            ${f.fix.note ? `<div style="font-size:11.5px;color:var(--text-muted);margin-top:2px;">${this.escape(f.fix.note)}</div>` : ""}
          </div>
        </div>
      `;
    }

    return `
      <div class="finding-item ${f.severity}" id="finding-${f.n}" data-n="${f.n}">
        <div class="finding-head">
          ${sevBadge}
          ${ruleBadge}
          <strong style="color:var(--navy-bg);font-size:13.5px;">${this.escape(f.title)}</strong>
          <span style="margin-left:auto;font-size:11.5px;color:var(--text-muted);">#${f.n}</span>
        </div>
        ${f.quote ? `<div class="finding-quote">“${this.escape(f.quote)}”</div>` : ""}
        <div style="font-size:13px;color:var(--text-secondary);">${this.escape(f.message)}</div>
        ${evidence ? `<div style="margin-top:6px;border-top:1px dashed var(--border-subtle);padding-top:6px;">${evidence}</div>` : ""}
        ${fixHtml}
      </div>
    `;
  },

  escape(str) {
    return String(str ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
};

window.FindingsUI = FindingsUI;

