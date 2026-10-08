"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE_CUT = [0.76, 0, 0.24, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Masked line reveal: text rises out of a clipped box, like a title card. */
export function MaskLines({
  lines,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        // The visible wrapper is what gets observed. Observing the text itself
        // would never fire because it starts fully clipped inside this box.
        <motion.span
          key={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="block overflow-hidden pb-[0.08em]"
        >
          <motion.span
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: { duration: 1, ease: EASE_OUT, delay: delay + i * 0.09 },
              },
            }}
            className="block"
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}

/** Simple fade + rise, used only for blocks of body copy. */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
