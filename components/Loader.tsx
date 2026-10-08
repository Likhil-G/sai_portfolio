"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onDone();
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let raf: number;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      // ease-out so the counter slows near 100 like a render finishing
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(() => {
          setVisible(false);
          onDone();
        }, 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-base p-8 md:p-12"
        >
          <span className="label">Sai Kiran, video editor</span>

          <div className="flex items-end justify-between">
            <span className="text-[clamp(3rem,10vw,7rem)] font-medium leading-[0.8] tracking-tightest tabular-nums text-ink">
              {String(count).padStart(2, "0")}
            </span>
            <span className="timecode pb-2 text-xs text-muted">Rendering reel</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-line">
            <div
              className="h-full origin-left bg-gradient-to-r from-accent to-warm shadow-[0_0_10px_rgba(127,214,232,0.8)]"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
