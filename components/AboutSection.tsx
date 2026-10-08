"use client";

import { MaskLines, FadeIn } from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-line bg-base px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[1fr_1fr] md:gap-24">
        <MaskLines
          className="h-section max-w-md"
          lines={["Editing isn’t about cutting footage.", "It’s knowing what to leave out."]}
        />

        <div className="flex flex-col justify-end gap-6 text-[14px] leading-relaxed text-muted md:max-w-md">
          <FadeIn>
            <p>
              Creative and passionate video editor talented in creating rich and
              soulful material that conveys heartfelt messages, surpassing client
              expectations.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              A focused digital storyteller who stays on top of current trends and
              works with up-to-date tools, maintaining every system and piece of
              equipment used to edit, encode, decode and broadcast video and audio
              to fit the taste and criteria of the audience.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-2 border-t border-line pt-6 text-[13px] text-ink">
              Works in Telugu, English and Hindi.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
