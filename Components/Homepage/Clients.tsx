"use client";

import { motion } from "framer-motion";
import Container from "../Container";

const clients = [
  { name: "Food Parley", color: "rgba(99,102,241,0.15)", text: "#818cf8" },
  { name: "Jirova", color: "rgba(20,184,166,0.12)", text: "#2dd4bf" },
  { name: "Sehembz Travels", color: "rgba(168,85,247,0.12)", text: "#c084fc" },
  { name: "E-Commerce Store", color: "rgba(251,191,36,0.1)", text: "#fbbf24" },
  { name: "Landing Page Co.", color: "rgba(56,189,248,0.12)", text: "#38bdf8" },
];

export default function Clients() {
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
            Clients
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Brands we&apos;ve{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              built for
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            From early-stage startups to growing businesses — we&apos;ve helped them all ship faster.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 hover:border-indigo-500/40 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
              <div className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: client.color, color: client.text }}
                >
                  {client.name[0]}
                </div>
                <span className="text-white font-semibold text-sm">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
