// Contact.tsx — SwiftCoders /contact page
// Drop this file at: Components/Homepage/Contact.tsx
// Wrap with your existing <Animate> and <Container> as shown below.

"use client";

import { useState, useRef } from "react";

// ─── Lightweight stand-ins — swap for your real Animate / Container ──────────
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
);

const Animate = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    style={{
      animation: `fadeUp 0.7s ease both`,
      animationDelay: `${delay}ms`,
    }}
  >
    {children}
  </div>
);
// ─────────────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = ["Web App", "Landing Page", "Dashboard", "Other"];
const BUDGET_RANGES = ["< $500", "$500 – $2k", "$2k – $5k", "$5k+"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const isValid = form.name && form.email && form.message;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,255,0); }
          50%       { box-shadow: 0 0 20px 4px rgba(0,255,255,0.18); }
        }

        *, *::before, *::after { box-sizing: border-box; }

        .contact-root {
          font-family: 'Syne', sans-serif;
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 0 0 120px;
          position: relative;
          overflow-x: hidden;
        }

        /* Subtle grid texture */
        .contact-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* Scanline sweep */
        .scanline {
          position: fixed;
          inset-inline: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, rgba(0,255,255,0.03), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          z-index: 1;
          padding: 120px 0 80px;
          text-align: center;
        }
        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #00ffff;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: inline-block;
          width: 32px;
          height: 1px;
          background: #00ffff;
          opacity: 0.5;
        }
        .hero-title {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .hero-title .accent {
          color: #00ffff;
          text-shadow: 0 0 40px rgba(0,255,255,0.4);
        }
        .hero-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Divider ── */
        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 0 56px;
        }
        .divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
        .divider-dot  { width: 5px; height: 5px; border-radius: 50%; background: #00ffff; box-shadow: 0 0 8px #00ffff; }

        /* ── Form card ── */
        .form-card {
          position: relative;
          z-index: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 56px 60px;
          backdrop-filter: blur(12px);
        }
        @media (max-width: 640px) {
          .form-card { padding: 36px 24px; }
        }

        /* Cyan corner accents */
        .form-card::before,
        .form-card::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #00ffff;
          border-style: solid;
          opacity: 0.6;
        }
        .form-card::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .form-card::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        /* ── Grid layout ── */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } }
        .col-span-2 { grid-column: span 2; }
        @media (max-width: 640px) { .col-span-2 { grid-column: span 1; } }

        /* ── Field ── */
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .field-label.active { color: #00ffff; }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          color: #fff;
          font-family: 'DM Mono', monospace;
          font-size: 0.9rem;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }
        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: #00ffff;
          box-shadow: 0 0 0 1px rgba(0,255,255,0.25), inset 0 0 20px rgba(0,255,255,0.04);
        }
        .field-input::placeholder,
        .field-textarea::placeholder { color: rgba(255,255,255,0.2); }

        .field-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300ffff' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }
        .field-select option { background: #0a0a0a; color: #fff; }

        .field-textarea { resize: vertical; min-height: 140px; line-height: 1.6; }

        /* ── Submit button ── */
        .submit-row {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .submit-note {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.04em;
        }
        .submit-btn {
          position: relative;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #00ffff;
          color: #000;
          border: none;
          border-radius: 2px;
          padding: 16px 40px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .submit-btn:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,255,255,0.3);
        }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn:disabled {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.2);
          cursor: not-allowed;
          animation: none;
          box-shadow: none;
        }

        /* ── Success state ── */
        .success-state {
          text-align: center;
          padding: 80px 40px;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          border: 2px solid #00ffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          box-shadow: 0 0 24px rgba(0,255,255,0.3);
        }
        .success-heading {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .success-heading .accent { color: #00ffff; }
        .success-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
        }

        /* ── Info strip below form ── */
        .info-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-top: 1px;
          background: rgba(255,255,255,0.06);
        }
        @media (max-width: 640px) { .info-strip { grid-template-columns: 1fr; } }
        .info-cell {
          background: #000;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .info-cell-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #00ffff;
          opacity: 0.7;
        }
        .info-cell-value {
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
        }
      `}</style>

      <div className="contact-root">
        <div className="scanline" />

        {/* ── Hero ── */}
        <section className="hero">
          <Container>
            <Animate delay={0}>
              <p className="hero-eyebrow">Get in touch</p>
            </Animate>
            <Animate delay={80}>
              <h1 className="hero-title">
                Let's build something<br />
                <span className="accent">worth shipping.</span>
              </h1>
            </Animate>
            <Animate delay={160}>
              <p className="hero-sub">
                Tell us about your project. We'll get back to you within 24 hours.
              </p>
            </Animate>
          </Container>
        </section>

        {/* ── Form ── */}
        <Container>
          <Animate delay={240}>
            <div className="divider">
              <div className="divider-line" />
              <div className="divider-dot" />
              <div className="divider-line" />
            </div>
          </Animate>

          <Animate delay={300}>
            <div ref={formRef}>
              <div className="form-card">
                {submitted ? (
                  <div className="success-state">
                    <div className="success-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14l6 6L22 8" stroke="#00ffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="success-heading">
                      Message <span className="accent">received.</span>
                    </h2>
                    <p className="success-sub">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <>
                    <div className="form-grid">
                      {/* Name */}
                      <div className="field">
                        <label
                          htmlFor="name"
                          className={`field-label ${focused === "name" ? "active" : ""}`}
                        >
                          Full name <span style={{ color: "#00ffff" }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="field-input"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          autoComplete="name"
                        />
                      </div>

                      {/* Email */}
                      <div className="field">
                        <label
                          htmlFor="email"
                          className={`field-label ${focused === "email" ? "active" : ""}`}
                        >
                          Email address <span style={{ color: "#00ffff" }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="field-input"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          autoComplete="email"
                        />
                      </div>

                      {/* Project type */}
                      <div className="field">
                        <label
                          htmlFor="projectType"
                          className={`field-label ${focused === "projectType" ? "active" : ""}`}
                        >
                          Project type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="field-select"
                          value={form.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocused("projectType")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="" disabled>Select a type…</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="field">
                        <label
                          htmlFor="budget"
                          className={`field-label ${focused === "budget" ? "active" : ""}`}
                        >
                          Budget range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="field-select"
                          value={form.budget}
                          onChange={handleChange}
                          onFocus={() => setFocused("budget")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="" disabled>Select a range…</option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className={`field col-span-2`}>
                        <label
                          htmlFor="message"
                          className={`field-label ${focused === "message" ? "active" : ""}`}
                        >
                          Tell us about your project <span style={{ color: "#00ffff" }}>*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="field-textarea"
                          placeholder="Describe what you're building, key features, timeline, and any other context…"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                    </div>

                    <div className="submit-row">
                      <p className="submit-note">
                        * Required fields — no spam, ever.
                      </p>
                      <button
                        className="submit-btn"
                        onClick={handleSubmit}
                        disabled={!isValid}
                        type="button"
                      >
                        Send message →
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Info strip */}
              {!submitted && (
                <div className="info-strip">
                  <div className="info-cell">
                    <span className="info-cell-label">Response time</span>
                    <span className="info-cell-value">Within 24 hours</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-cell-label">Based in</span>
                    <span className="info-cell-value">Remote-first · Global</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-cell-label">Email</span>
                    <span className="info-cell-value">hello@swiftcoders.dev</span>
                  </div>
                </div>
              )}
            </div>
          </Animate>
        </Container>
      </div>
    </>
  );
}