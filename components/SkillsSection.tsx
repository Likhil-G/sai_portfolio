"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MaskLines } from "./Reveal";

const SKILLS = [
  { label: "Editing", note: "Structure, transitions and captions shaped for retention." },
  { label: "Color", note: "Cinematic color grading for events and branded work." },
  { label: "Sound", note: "Sound design tuned to the pacing of the cut." },
  { label: "Rhythm", note: "Pacing built for long-form and short-form attention spans." },
  { label: "Social", note: "Reels and short-form content built for platform strategy." },
];

const SOFTWARE = ["Premiere Pro", "After Effects", "Photoshop", "DaVinci Resolve"];

export default function SkillsSection() {
  const [open, setOpen] = useState<string | null>(SKILLS[0].label);

  return (
    <section className="border-t border-line bg-base px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <MaskLines
            as="h2"
            className="h-section"
            lines={["The craft"]}
          />
          <div className="mt-10 flex flex-col">
            {SKILLS.map((skill) => {
              const isOpen = open === skill.label;
              return (
                <button
                  key={skill.label}
                  type="button"
                  aria-expanded={isOpen}
                  onMouseEnter={() => setOpen(skill.label)}
                  onFocus={() => setOpen(skill.label)}
                  onClick={() => setOpen(isOpen ? null : skill.label)}
                  className="group border-t border-line py-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`h-item transition-all duration-500 ease-out ${
                        isOpen ? "translate-x-2 text-ink" : "text-muted"
                      }`}
                    >
                      {skill.label}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`text-xl leading-none ${isOpen ? "text-accent" : "text-muted"}`}
                    >
                      +
                    </motion.span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-md pl-2 pt-2 text-[13px] text-muted">{skill.note}</p>
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="label">Software</p>
          <ul className="mt-5 flex flex-col">
            {SOFTWARE.map((tool, i) => (
              <motion.li
                key={tool}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-item border-t border-line py-4 text-muted transition-colors hover:text-ink"
              >
                {tool}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
