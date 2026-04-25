"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/Components/Container";
import Animate from "@/Components/Animate";

const PROJECT_TYPES = ["Web App", "Landing Page", "Dashboard", "Other"];
const BUDGET_RANGES = ["< $500", "$500 – $2k", "$2k – $5k", "$5k+"];

const inputClass =
  "w-full bg-black/50 border border-white/[0.1] rounded-xl text-white text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-white/20 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20";

const labelClass = "block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const isValid = form.name && form.email && form.message;

  return (
    <section className="py-24 bg-[#000000] border-t border-white/[0.06]">
      <Container>

        {/* Header */}
        <Animate>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              worth shipping
            </span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
        </Animate>

        {/* Divider */}
        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-white/[0.08]" />
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[cyan] to-blue-500" />
          <div className="flex-1 h-px bg-white/[0.08]" />
        </div>

        <Animate delay={0.15}>
          {submitted ? (
            /* Success state */
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-16 text-center">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l6 6L22 8" stroke="cyan" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Message{" "}
                <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
                  received.
                </span>
              </h2>
              <p className="text-slate-400 text-sm">We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_320px] gap-5">

              {/* Form card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={`${labelClass} ${focused === "name" ? "text-cyan-500/70" : ""}`}>
                      Full name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text"
                      className={inputClass}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      autoComplete="name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={`${labelClass} ${focused === "email" ? "text-cyan-500/70" : ""}`}>
                      Email address <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email"
                      className={inputClass}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      autoComplete="email"
                    />
                  </div>

                  {/* Project type */}
                  <div>
                    <label htmlFor="projectType" className={`${labelClass} ${focused === "projectType" ? "text-cyan-500/70" : ""}`}>
                      Project type
                    </label>
                    <select
                      id="projectType" name="projectType"
                      className={inputClass}
                      value={form.projectType}
                      onChange={handleChange}
                      onFocus={() => setFocused("projectType")}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="" disabled>Select a type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className={`${labelClass} ${focused === "budget" ? "text-cyan-500/70" : ""}`}>
                      Budget range
                    </label>
                    <select
                      id="budget" name="budget"
                      className={inputClass}
                      value={form.budget}
                      onChange={handleChange}
                      onFocus={() => setFocused("budget")}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="" disabled>Select a range…</option>
                      {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={`${labelClass} ${focused === "message" ? "text-cyan-500/70" : ""}`}>
                      Tell us about your project <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      className={`${inputClass} resize-none min-h-[140px]`}
                      placeholder="Describe what you're building, key features, timeline, and any other context…"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-slate-600">* Required fields — no spam, ever.</p>
                  <motion.button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    whileHover={isValid ? { scale: 1.03 } : {}}
                    whileTap={isValid ? { scale: 0.98 } : {}}
                    className="px-7 py-2.5 rounded-full bg-white text-black text-sm font-semibold transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Send message →
                  </motion.button>
                </div>
              </div>

              {/* Info sidebar */}
              <div className="flex flex-col gap-5">
                {[
                  { label: "Response time", value: "Within 24 hours" },
                  { label: "Based in", value: "Remote-first · Global" },
                  { label: "Email", value: "hello@swiftcoders.dev" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </Animate>

      </Container>
    </section>
  );
}
