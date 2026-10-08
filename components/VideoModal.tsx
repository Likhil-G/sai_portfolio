"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(0% 0 0% 0)" }}
          exit={{ clipPath: "inset(50% 0 50% 0)" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[80] flex flex-col bg-base"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <span className="label">{project.category}</span>
            <button
              onClick={onClose}
              className="link-underline text-[13px] text-ink"
              data-cursor="Close"
            >
              Close (Esc)
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 items-center justify-center px-6 pb-6 md:px-10"
          >
            <div className="edge relative w-full max-w-5xl overflow-hidden bg-panel">
              <video className="block max-h-[70vh] w-full" controls autoPlay playsInline poster={project.poster}>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <div className="border-t border-line px-6 py-5 md:px-10">
            <h3 className="h-item text-ink">
              {project.title}
            </h3>
            <p className="label mt-1">
              {[project.role, project.year].filter(Boolean).join(", ")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
