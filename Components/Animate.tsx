"use client";

import * as motion from "framer-motion/client";

type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function Animate({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: AnimateProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}