"use client";

import Container from '@/Components/Container';
import Animate from '@/Components/Animate';
import { motion } from 'framer-motion';

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
    title: 'Restaurant Website', 
    description: 'Complete redesign with modern animations and reservation system integration.',
    image: '/1stbg.JPG',
    metrics: ['+45% booking conversion', '2.3x faster load', 'Mobile-first UX'],
    tech: ['React', 'Tailwind', 'Framer Motion', 'Node.js'],
    link: '/projects/restaurant'
  },
  { 
    title: 'SaaS Dashboard', 
    description: 'Admin panel with real-time analytics and user management.',
    image: '/IMG_5515.JPG',
    metrics: ['500+ active users', 'Real-time charts', 'Role-based access'],
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
    link: '/projects/dashboard'
  },
  { 
    title: 'Product Landing Page', 
    description: 'High-converting page with scroll-triggered animations and A/B tested CTAs.',
    image: '/IMG_5522.JPG',
    metrics: ['+67% lead gen', 'Scroll animations', 'Email capture'],
    tech: ['Next.js', 'GSAP', 'Tailwind', 'Vercel'],
    link: '/projects/landing'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <Container>
        <Animate>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
            Our Work
          </h2>
        </Animate>
        <Animate delay={0.2}>
          <p className="text-center text-gray-400 max-w-2xl mx-auto text-xl mb-20 leading-relaxed">
            Handcrafted digital experiences that drive results
          </p>
        </Animate>

        <div className="mt-16 flex gap-4 justify-center mb-16 px-4">
          <motion.button 
            className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            All Projects
          </motion.button>
          <motion.button 
            className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Web Apps
          </motion.button>
          <motion.button 
            className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Landing Pages
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Animate key={i} delay={i * 0.1}>
              <motion.div 
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-black/30 to-black/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 cursor-pointer h-full transition-all duration-500 hover:scale-105 hover:-translate-y-6 shadow-2xl hover:shadow-cyan-500/25"
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                    <motion.a 
                      href={project.link} 
                      className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                      whileHover={{ rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
                <div className="p-8 pb-12">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-white group-hover:text-cyan-400 transition-all duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg md:text-xl max-w-md">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {project.metrics.map((metric, j) => (
                      <div key={j} className="flex items-center gap-3 text-cyan-400 text-sm font-semibold">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0 shadow-md" />
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-4 py-2 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-xl rounded-2xl text-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Animate>
          ))}
        </div>
      </Container>
    </section>
  );
}
