"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import VideoModal from "./VideoModal";
import { MaskLines, FadeIn } from "./Reveal";

function ReelCard({
  project,
  hidden,
  onOpen,
}: {
  project: Project;
  hidden: boolean; // duplicate copy used only to make the loop seamless
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [errored, setErrored] = useState(false);

  // Only cards that are actually on screen play, so the reel stays light.
  useEffect(() => {
    const el = ref.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      role="button"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden || undefined}
      aria-label={`Play ${project.title}`}
      data-cursor="Play"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group mr-4 w-[74vw] shrink-0 sm:w-[380px] md:mr-6 md:w-[440px]"
    >
      <div className="edge relative aspect-[16/10] overflow-hidden bg-panel">
        {!errored ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            muted
            loop
            playsInline
            preload="none"
            poster={project.poster}
            onError={() => setErrored(true)}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={project.poster ? { backgroundImage: `url(${project.poster})` } : undefined}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <span className="text-[13px] font-medium text-ink">{project.title}</span>
        <span className="label shrink-0">{project.category}</span>
      </figcaption>
    </figure>
  );
}

export default function ProjectShowcase() {
  const [active, setActive] = useState<Project | null>(null);

  // Repeat the set so one half of the track is always wider than the screen.
  const set = [...projects, ...projects];

  return (
    <section id="work" className="relative overflow-hidden border-t border-line bg-base py-20 md:py-28">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 px-5 md:flex-row md:items-end md:px-10">
        <MaskLines className="h-section max-w-md" lines={["Selected work,", "cut for rhythm."]} />
        <FadeIn delay={0.2} className="max-w-[260px] text-[13px] leading-relaxed text-muted">
          Hover to pause the reel. Click any film to watch it full screen.
        </FadeIn>
      </div>

      <FadeIn delay={0.1} className="mt-12">
        <div className="reel-wrap">
          <div className="reel-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {set.map((project, i) => (
                  <ReelCard
                    key={`${copy}-${i}`}
                    project={project}
                    hidden={copy === 1 || i >= projects.length}
                    onOpen={() => setActive(project)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
