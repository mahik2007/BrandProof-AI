/**
 * BrandProof AI — BugHunters Edition API Client
 */
"use strict";

const API = {
  async req(endpoint, opts = {}) {
    const defaultHeaders = {
      "X-Acting-Role": window.AppState ? window.AppState.currentRole : "creator"
    };

    if (opts.body && !(opts.body instanceof FormData)) {
      defaultHeaders["Content-Type"] = "application/json";
      opts.body = JSON.stringify(opts.body);
    }

    const options = {
      credentials: "same-origin",
      ...opts,
      headers: { ...defaultHeaders, ...(opts.headers || {}) }
    };

    const res = await fetch(endpoint, options);
    let data = null;
    try {
      data = await res.json();
    } catch (e) {}

    if (res.status === 401 && !opts.allow401) {
      if (window.AppState) window.AppState.user = null;
      throw new Error((data && data.detail) || "Session expired or authentication required.");
    }

    if (!res.ok) {
      const msg = (data && (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))) || `Request failed (${res.status})`;
      const err = new Error(msg);
      err.status = res.status;
      throw err;
    }

    return data;
  },

  // Auth & Session
  getMe() { return this.req("/api/auth/me", { allow401: true }); },
  startDemo() { return this.req("/api/demo/start", { method: "POST" }); },
  logout() { return this.req("/api/auth/logout", { method: "POST", allow401: true }); },
  getHealth() { return this.req("/api/health", { allow401: true }); },

  // Audit & Checking
  runTry(text) { return this.req("/api/try", { method: "POST", body: { text }, allow401: true }); },
  runCheck(payload) { return this.req("/api/check", { method: "POST", body: payload }); },
  applyFix(text, acceptedKeys, findings) { return this.req("/api/fix", { method: "POST", body: { text, accepted_keys: acceptedKeys, findings } }); },

  // Brand Policies
  getBrand() { return this.req("/api/brand"); },
  previewImpact(change) { return this.req("/api/brand/impact", { method: "POST", body: change }); },
  saveBrandChange(change) { return this.req("/api/brand/change", { method: "POST", body: change }); },
  importBrand(formData) { return this.req("/api/brand/import", { method: "POST", body: formData }); },
  decideCandidate(cid, decision) { return this.req(`/api/brand/candidates/${cid}/${decision}`, { method: "POST" }); },

  // Submissions & Review Desk
  getSubmissions() { return this.req("/api/submissions"); },
  getSubmission(sid) { return this.req(`/api/submissions/${sid}`); },
  submitCampaign(payload) { return this.req("/api/submissions", { method: "POST", body: payload }); },
  takeAction(sid, actionPayload) { return this.req(`/api/submissions/${sid}/action`, { method: "POST", body: actionPayload }); },

  // Certificates & Proof Vault
  getCertificates() { return this.req("/api/certificates"); },
  verifyText(text) { return this.req("/api/certificates/verify", { method: "POST", body: { text } }); },

  // Insights & Activity
  getInsights() { return this.req("/api/insights"); },
  getActivity(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return this.req(`/api/activity${qs ? '?' + qs : ''}`);
  },
  getBenchmark() { return this.req("/api/benchmark", { allow401: true }); },
  submitFeedback(payload) { return this.req("/api/feedback", { method: "POST", body: payload, allow401: true }); }
};

window.API = API;

