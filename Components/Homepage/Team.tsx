"use client";

import Container from '../Container';
import Animate from '../Animate';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Favour Ogbewe',
    role: 'Founder & Lead Developer',
    image: '/',
    skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Typescript'],
  },
  {
    name: 'Alex Johnson',
    role: 'Senior Frontend Engineer',
    image: '/',
    skills: ['TypeScript', 'Node.js', 'Three.js', 'WebGL'],
  },
  {
    name: 'Sarah Ojo',
    role: 'UI/UX Designer',
    image: '/',
    skills: ['Figma', 'Framer', 'Motion Design', 'Prototyping'],
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-600/30 to-black relative">
      <Container>
        <Animate delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            The Team Behind The Magic
          </h2>
        </Animate>
        <Animate delay={0.3}>
          <p className="text-center text-gray-400 mb-20 max-w-lg mx-auto text-lg leading-relaxed">
            Passionate developers and designers creating beautiful digital experiences.
          </p>
        </Animate>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <img 
                src={member.image} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="relative p-8 text-white">
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, repeatDelay: 3, repeat: Infinity }}
                />
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-300 font-semibold mb-6 opacity-90">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
