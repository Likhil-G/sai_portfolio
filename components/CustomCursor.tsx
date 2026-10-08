"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const zone = target.closest("[data-cursor]") as HTMLElement | null;
      setLabel(zone?.dataset.cursor ?? "");
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[70] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: label ? 64 : 8,
          height: label ? 64 : 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="rounded-full border border-ink/70 bg-ink/5 backdrop-blur-[1px] flex items-center justify-center"
      >
        {label && (
          <span className="font-body text-[10px] font-medium text-ink">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
