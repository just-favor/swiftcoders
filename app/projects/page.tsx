"use client";

import { motion } from "framer-motion";
import Container from "@/Components/Container";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  metrics: string[];
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Food Parley",
    description: "Restaurant website with modern design, menu showcase, and reservation system integration.",
    image: "/foodparley.jpg",
    metrics: ["+45% booking conversion", "2.3x faster load", "Mobile-first UX"],
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
    link: "https://foodparley.vercel.app/",
  },
  {
    title: "Jirova",
    description: "Clean, modern business site with smooth animations and a conversion-focused layout.",
    image: "/jirovasite.png",
    metrics: ["Scroll animations", "SEO optimized", "Mobile-first UX"],
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://jirova.onrender.com/",
  },
  {
    title: "Sehembz Travels",
    description: "Travel agency site with destination showcases, booking flows, and immersive visuals.",
    image: "/sehembztravels.png",
    metrics: ["+60% inquiry rate", "Immersive UI", "Fast load times"],
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://sehembztravels.com/",
  },
  {
    title: "E-Commerce Store",
    description: "Full-featured online store with product listings, cart, and checkout experience.",
    image: "/e-commerc.png",
    metrics: ["+70% add-to-cart rate", "Secure checkout", "Inventory management"],
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    link: "https://uncle-chuks-site-pms2.vercel.app/",
  },
  {
    title: "Landing Page",
    description: "High-converting product landing page with scroll-triggered animations and A/B tested CTAs.",
    image: "/landingpage.png",
    metrics: ["+67% lead gen", "Scroll animations", "Email capture"],
    tech: ["Next.js", "GSAP", "Tailwind", "Vercel"],
    link: "https://landingpage-umber-mu.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site with smooth animations, project showcases, and a clean modern design.",
    image: "/portfolio.png",
    metrics: ["Fast load times", "Scroll animations", "Mobile-first UX"],
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://ogb-portfolio-cnwv.vercel.app",
  },
];

export default function Portfolio() {
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
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Handcrafted experiences{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              that drive results
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base leading-relaxed">
            Every project is built with care — clean code, sharp design, and measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:border-indigo-500/40 transition-colors group"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-white font-semibold text-[17px] mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="space-y-1.5 mb-5">
                  {project.metrics.map((metric, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[cyan] to-blue-500 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg text-xs border border-white/[0.08] bg-white/[0.04] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="text-sm font-semibold bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                  View project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-10 md:p-14 text-center"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
            Start a project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Got something in mind?{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto mb-8 leading-relaxed">
            We&apos;re ready to turn your idea into a fast, modern website — shipped in weeks.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black text-sm font-semibold px-7 py-2.5 rounded-full"
          >
            Get in touch →
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}
