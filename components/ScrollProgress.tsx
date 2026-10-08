"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[56] h-px origin-left bg-gradient-to-r from-accent via-ink to-warm shadow-[0_0_8px_rgba(127,214,232,0.7)]"
      aria-hidden="true"
    />
  );
}
