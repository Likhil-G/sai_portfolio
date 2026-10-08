"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-40 transition-[background,border-color] duration-500 ${
          scrolled
            ? "border-b border-line bg-base/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-7 py-4 md:px-12">
          <a
            href="#top"
            data-cursor="Top"
            className="font-display text-[15px] font-medium tracking-tight text-ink"
          >
            Sai Kiran
          </a>

          <ul className="hidden gap-10 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-[13px] text-ink/70 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="text-[13px] text-ink md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-base"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-[15px] font-medium text-ink">Sai Kiran</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[13px] text-ink"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-5">
              {LINKS.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-display text-[clamp(2.4rem,11vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-ink"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
