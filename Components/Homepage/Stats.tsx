 "use client";

import Container from '../Container';
import Animate from '../Animate';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
  { value: 12, suffix: '', label: 'Months Experience' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      variants={{
        animate: {
          y: 0,
          opacity: 1,
          transition: { duration: 1.5, ease: 'easeOut' },
        },
      }}
      className="text-4xl md:text-5xl font-bold text-white"
    >
      <motion.span
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      >
        0
      </motion.span>
      {isInView ? (
        <motion.span
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            },
          }}
          className="inline-block"
        >
          {value.toLocaleString()}
        </motion.span>
      ) : (
        '0'
      )}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-cyan-600/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      
      <Container>
        <Animate delay={0.1}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-20 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            By The Numbers
          </motion.h2>
        </Animate>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <Animate key={stat.label} delay={0.3 + i * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]">
                <motion.div
                  className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent pb-1"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </Container>
    </section>
  );
} 
