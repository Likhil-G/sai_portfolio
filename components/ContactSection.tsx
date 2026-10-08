"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import { MaskLines, FadeIn } from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-base px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <MaskLines
          as="h2"
          className="text-[clamp(2rem,5.2vw,4.25rem)] font-medium leading-[1] tracking-tightest text-ink"
          lines={["Have a story", "worth cutting?"]}
        />

        <FadeIn delay={0.15} className="mt-10">
          <a
            href="mailto:saikiranmuthannagari@gmail.com"
            data-cursor="Email"
            className="edge group relative inline-flex items-center gap-3 overflow-hidden !rounded-[3px] bg-panel px-6 py-3 text-[13px] font-medium text-ink transition-colors duration-500 hover:text-base"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-0 translate-y-full bg-ink transition-transform duration-500 ease-cut group-hover:translate-y-0"
            />
            <span className="relative">Start a project</span>
            <span aria-hidden="true" className="relative transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-16 grid gap-5 border-t border-line pt-8 text-[13px] text-muted md:grid-cols-3">
          <a href="mailto:saikiranmuthannagari@gmail.com" className="link-underline flex w-fit items-center gap-3 transition-colors hover:text-ink">
            <Mail size={15} /> saikiranmuthannagari@gmail.com
          </a>
          <a href="tel:+919866588715" className="link-underline flex w-fit items-center gap-3 transition-colors hover:text-ink">
            <Phone size={15} /> +91 98665 88715
          </a>
          <a
            href="https://www.instagram.com/editwithsaii"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex w-fit items-center gap-3 transition-colors hover:text-ink"
          >
            <Instagram size={15} /> @editwithsaii
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
