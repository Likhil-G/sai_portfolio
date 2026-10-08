"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function SplitWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]" aria-hidden="true">
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "115%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ delay: delay + i * 0.035, duration: 1.1, ease: EASE }}
          className="inline-block origin-bottom-left"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ ready = true }: { ready?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timecode, setTimecode] = useState("00:00:00:00");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.25]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
    const fmt = (n: number) => String(Math.floor(n)).padStart(2, "0");
    const onTime = () => {
      const t = video.currentTime;
      setTimecode(
        `${fmt(t / 3600)}:${fmt((t % 3600) / 60)}:${fmt(t % 60)}:${fmt((t % 1) * 24)}`
      );
    };
    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-[100svh] w-full items-end overflow-hidden bg-base"
    >
      <motion.video
        ref={videoRef}
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/project-01.svg"
      >
        <source src="https://pub-960024d73c05488896944e01057e8018.r2.dev/hero-reel.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/35 to-base/70" />

      {/* letterbox bars that slide open once the loader is done */}
      <motion.div
        initial={{ height: "50vh" }}
        animate={{ height: ready ? "6vh" : "50vh" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 bg-base"
      />
      <motion.div
        initial={{ height: "50vh" }}
        animate={{ height: ready ? "6vh" : "50vh" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-base"
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full px-5 pb-[11vh] pt-[14vh] md:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
          className="label mb-4"
        >
          Video editor
        </motion.p>

        <h1
          aria-label="Muthannagari Sai Kiran"
          className="text-[clamp(2.1rem,5.4vw,4.75rem)] font-medium leading-[0.95] tracking-tightest text-ink"
        >
          {ready && (
            <>
              <SplitWord word="Muthannagari" delay={0.2} />
              <SplitWord word="Sai Kiran" delay={0.55} />
            </>
          )}
          {!ready && <span className="invisible">Muthannagari Sai Kiran</span>}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 flex flex-col justify-between gap-4 border-t border-ink/15 pt-5 md:flex-row md:items-center"
        >
          <p className="text-[13px] text-ink/70">
            YouTube, reels, events and branded films
          </p>
          <div className="flex items-center gap-6">
            <span className="timecode text-[11px] text-ink/70">{timecode}</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="hidden text-[13px] text-ink/70 md:inline"
            >
              Scroll for the work ↓
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
