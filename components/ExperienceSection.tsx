"use client";

import { motion } from "framer-motion";
import { MaskLines } from "./Reveal";

interface TimelineItem {
  period: string;
  role: string;
  place: string;
  points?: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    period: "2025 to present",
    role: "Video Editor",
    place: "Avanflix Digital Marketing",
    points: [
      "Edited social media videos, reels, promotional and branding content",
      "Long-form and short-form YouTube editing: storytelling, transitions, captions, sound design, thumbnail coordination",
      "Event coverage: highlight videos, cinematic edits, color grading, social-ready reels",
      "Created marketing videos and learned digital marketing and social media strategy",
    ],
  },
  { period: "2021 to 2023", role: "ITI", place: "Venkatasai ITI, Gajwel" },
  { period: "2019 to 2020", role: "SSC", place: "ZPHS Begumpet" },
];

export default function ExperienceSection() {
  return (
    <section className="border-t border-line bg-base px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <MaskLines
          className="h-section"
          lines={["Experience", "and education"]}
        />

        <div className="mt-12 flex flex-col">
          {TIMELINE.map((item) => (
            <div
              key={item.period}
              className="group relative grid grid-cols-1 gap-3 border-t border-line py-7 md:grid-cols-[200px_1fr] md:gap-10"
            >
              {/* timeline rule draws itself across as the row enters view */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute -top-px left-0 h-px w-full origin-left bg-gradient-to-r from-accent/80 via-ink/40 to-transparent"
              />
              <span className="timecode text-[12px] text-muted">{item.period}</span>
              <div>
                <h3 className="h-item text-ink transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                  {item.role}
                </h3>
                <p className="mt-1 text-[13px] text-muted">{item.place}</p>
                {item.points && (
                  <ul className="mt-4 flex max-w-xl flex-col gap-2">
                    {item.points.map((p) => (
                      <li key={p} className="text-[13px] leading-relaxed text-muted">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
