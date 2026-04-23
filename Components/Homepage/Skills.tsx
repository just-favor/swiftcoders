"use client";

import Container from '../Container';
import Animate from '../Animate';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95, color: '#61dafb' },
  { name: 'Next.js', level: 90, color: '#000000' },
  { name: 'TypeScript', level: 88, color: '#3178c6' },
  { name: 'Tailwind', level: 92, color: '#38bdf8' },
  { name: 'Framer Motion', level: 85, color: '#ff3d71' },
];

export default function Skills() {
  return (
    <section className="py-24 bg-gray-900/50">
      <Container>
        <Animate delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Tech We Master
          </h2>
        </Animate>
        <Animate delay={0.3}>
          <p className="text-center text-gray-400 mb-20 max-w-lg mx-auto text-lg leading-relaxed">
            Cutting-edge stack for modern, performant web applications.
          </p>
        </Animate>

        <div className="space-y-8 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2 items-center">
                <span className="font-semibold text-white text-lg">
                  {skill.name}
                </span>
                <span className="text-cyan-400 font-mono text-sm font-bold">
                  {skill.level}%
                </span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/20"
              >
                <motion.div 
                  className="h-full rounded-full flex items-center pl-4"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    width: `${skill.level}%`
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
