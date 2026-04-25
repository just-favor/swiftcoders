"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../Container";

const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 3, suffix: "", label: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      if (countRef.current) {
        countRef.current.textContent = Math.floor(progress * value).toString();
      }
      if (progress < 1) requestAnimationFrame(step);
      else if (countRef.current) countRef.current.textContent = value.toString();
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      <span ref={countRef}>0</span>{suffix}
    </span>
  );
}

export default function Stats() {
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
            By the numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Results that{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-indigo-500/40 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
