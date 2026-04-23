// components/WhyChoose.tsx
"use client";
import { motion } from "framer-motion";
import Container from "../Container";

const features = [
  {
    title: "Fast delivery",
    description: "We ship in weeks, not months. Agile sprints mean you see progress from day one.",
    color: "rgba(99,102,241,0.15)",
    stroke: "#818cf8",
    icon: (
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    ),
  },
  {
    title: "Clean code",
    description: "Readable, documented, and tested. Your future developers will thank you.",
    color: "rgba(20,184,166,0.12)",
    stroke: "#2dd4bf",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    title: "Scalable architecture",
    description: "Built to grow with you — from MVP to millions of users without rebuilding from scratch.",
    color: "rgba(168,85,247,0.12)",
    stroke: "#c084fc",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    title: "Clear communication",
    description: "No ghosting, no jargon. Weekly updates and a direct line to your developer.",
    color: "rgba(251,191,36,0.1)",
    stroke: "#fbbf24",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#00ffff09] border-t border-white/[0.06]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
            Why SwiftCoders
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you need,{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              nothing you don&apos;t
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            We keep it simple — great code, clear communication, and results
            that move the needle.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-indigo-500/40 transition-colors group"
            >
              {/* subtle corner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: f.color }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={f.stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>

              <h3 className="text-white font-semibold text-[17px] mb-2">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}