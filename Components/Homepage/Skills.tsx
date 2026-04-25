"use client";

import { motion } from "framer-motion";
import Container from "../Container";

const skills = [
  { name: "React", level: 95, color: "rgba(99,102,241,0.15)", stroke: "#818cf8" },
  { name: "Next.js", level: 90, color: "rgba(20,184,166,0.12)", stroke: "#2dd4bf" },
  { name: "TypeScript", level: 88, color: "rgba(168,85,247,0.12)", stroke: "#c084fc" },
  { name: "Tailwind", level: 92, color: "rgba(56,189,248,0.12)", stroke: "#38bdf8" },
  { name: "Framer Motion", level: 85, color: "rgba(251,191,36,0.1)", stroke: "#fbbf24" },
];

export default function Skills() {
  return (
    <section className="py-24 bg-[#000000] border-t border-white/[0.06]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
            Our stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tech we{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              master
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            A modern, focused stack — chosen for performance, developer experience, and longevity.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-indigo-500/40 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: skill.color }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={skill.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-[17px] mb-3">{skill.name}</h3>

              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: skill.stroke }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500 font-mono">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
