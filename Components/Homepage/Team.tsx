"use client";

import { motion } from "framer-motion";
import Container from "../Container";

const team = [
  {
    name: "Favour Ogbewe",
    role: "Founder & Lead Developer",
    initials: "FO",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    avatarColor: "rgba(99,102,241,0.2)",
    avatarText: "#a5b4fc",
  },
  {
    name: "Alex Johnson",
    role: "Senior Frontend Engineer",
    initials: "AJ",
    skills: ["TypeScript", "Node.js", "Three.js", "WebGL"],
    avatarColor: "rgba(20,184,166,0.15)",
    avatarText: "#2dd4bf",
  },
  {
    name: "Sarah Ojo",
    role: "UI/UX Designer",
    initials: "SO",
    skills: ["Figma", "Framer", "Motion Design", "Prototyping"],
    avatarColor: "rgba(168,85,247,0.15)",
    avatarText: "#c084fc",
  },
];

export default function Team() {
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
            The team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The people behind{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              the work
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            A small, focused team that cares deeply about craft and delivery.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-indigo-500/40 transition-colors group"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold mb-5"
                style={{ background: member.avatarColor, color: member.avatarText }}
              >
                {member.initials}
              </div>

              <h3 className="text-white font-semibold text-[17px] mb-1">{member.name}</h3>
              <p className="text-slate-500 text-sm mb-5">{member.role}</p>

              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs border border-white/[0.08] bg-white/[0.04] text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
