// components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import Container from "../Container";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  category: string;
  avatarColor: string;
  avatarText: string;
  badgeColor: string;
  badgeBorder: string;
  badgeText: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "SwiftCoders rebuilt our entire storefront in 3 weeks. Conversion rate jumped 34% after launch. The code quality was exceptional — our in-house team slotted right in.",
    name: "Adaeze Nwosu",
    role: "Founder, Lumé Store",
    initials: "AN",
    category: "E-commerce",
    avatarColor: "rgba(99,102,241,0.2)",
    avatarText: "#a5b4fc",
    badgeColor: "rgba(99,102,241,0.15)",
    badgeBorder: "rgba(99,102,241,0.25)",
    badgeText: "#a5b4fc",
  },
  {
    quote:
      "We had a half-finished Next.js dashboard. They stepped in, cleaned it up, and shipped the final product on time. Communication was excellent throughout.",
    name: "Tobias Müller",
    role: "CTO, FlowMetrics",
    initials: "TM",
    category: "SaaS",
    avatarColor: "rgba(20,184,166,0.15)",
    avatarText: "#2dd4bf",
    badgeColor: "rgba(20,184,166,0.1)",
    badgeBorder: "rgba(20,184,166,0.25)",
    badgeText: "#5eead4",
  },
  {
    quote:
      "From idea to deployed MVP in under a month. SwiftCoders didn't just build what we asked — they flagged edge cases we hadn't even thought of. Genuinely impressive.",
    name: "Jade Okonkwo",
    role: "Co-founder, Trackly",
    initials: "JO",
    category: "Startup",
    avatarColor: "rgba(168,85,247,0.15)",
    avatarText: "#c084fc",
    badgeColor: "rgba(168,85,247,0.1)",
    badgeBorder: "rgba(168,85,247,0.25)",
    badgeText: "#c084fc",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
            Client stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by founders{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              and growing teams
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            Real feedback from people we&apos;ve built for. Your success story
            could be next.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7"
            >
              <div>
                {/* Category badge */}
                <span
                  className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold border"
                  style={{
                    background: t.badgeColor,
                    color: t.badgeText,
                    borderColor: t.badgeBorder,
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill={t.badgeText}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {t.category}
                </span>

                <Stars />

                <blockquote className="mt-3 text-[15px] text-slate-300 leading-relaxed italic before:content-['\u201C'] before:text-3xl before:text-indigo-400 before:not-italic before:leading-none before:align-[-10px] before:mr-1">
                  {t.quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="mt-auto flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: t.avatarColor,
                    color: t.avatarText,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}