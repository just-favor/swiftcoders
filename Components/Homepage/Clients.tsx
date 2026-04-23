"use client";

import Container from '../Container';
import Animate from '../Animate';
import { motion } from 'framer-motion';

const clients = [
  'logo-airbnb',
  'logo-spotify',
  'logo-figma',
  'logo-stripe',
  'logo-vercel',
];

export default function Clients() {
  return (
    <section className="py-24 border-t border-white/10 bg-gradient-to-b from-gray-950 to-black">
      <Container>
        <Animate>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Trusted By Leading Brands
          </motion.h2>
        </Animate>
        <Animate delay={0.2}>
          <p className="text-center text-gray-400 mb-16 max-w-md mx-auto text-lg leading-relaxed">
            We've partnered with innovative companies around the world to create digital experiences that matter.
          </p>
        </Animate>

        <div className="overflow-hidden rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
          <motion.div 
            animate={{ x: ['0%', '-100%'] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            className="flex gap-16 py-8 whitespace-nowrap"
          >
            {Array(10).fill(clients).flat().map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-28 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-24 h-10 bg-gradient-to-br from-white/20 to-transparent rounded-xl backdrop-blur-sm border border-white/30 shadow-2xl flex items-center justify-center hover:brightness-125 transition-all duration-300">
                  <span className="text-gray-400 text-sm font-semibold uppercase tracking-wide opacity-80 hover:opacity-100">
                    {logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
