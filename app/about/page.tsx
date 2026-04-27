"use client";

import Container from "@/Components/Container";
import Animate from "@/Components/Animate";
import Team from "@/Components/Homepage/Team";
import Skills from "@/Components/Homepage/Skills";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#000000] border-t border-white/[0.06]">
        <Container>
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              About us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We are{" "}
              <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
                SwiftCoders
              </span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
              A frontend development studio focused on building fast, modern, and scalable websites that help businesses grow.
            </p>
          </Animate>
        </Container>
      </section>

      {/* Team & Skills */}
      <Team />
      <Skills />

      {/* More Than Just Code */}
      <section className="py-24 bg-[#00ffff09] border-t border-white/[0.06]">
        <Container>
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              Our philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-14">
              More than{" "}
              <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
                just code
              </span>
            </h2>
          </Animate>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Engineering meets design",
                body: "Great digital products come from the intersection of clean engineering and thoughtful design. We don't just write code — we architect experiences that are fast, accessible, and built to last.",
                color: "rgba(99,102,241,0.15)",
                stroke: "#818cf8",
              },
              {
                title: "Built to scale",
                body: "From early-stage startups to growing businesses, we partner with teams who want more than a website — they want a digital foundation built on the latest in React, Next.js, and modern tooling.",
                color: "rgba(20,184,166,0.12)",
                stroke: "#2dd4bf",
              },
              {
                title: "Results-driven",
                body: "Our approach is collaborative, transparent, and results-driven. Every project starts with understanding your goals and ends with a product your users will love.",
                color: "rgba(168,85,247,0.12)",
                stroke: "#c084fc",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-indigo-500/40 transition-colors"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: item.color }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-[17px] mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#000000] border-t border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-10 md:p-14 text-center"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              Work with us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Ready to build something{" "}
              <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
                great?
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-cyan-100 transition-colors"
            >
              Get in touch →
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
