"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SiteFrame from "@/components/SiteFrame";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <CustomCursor />
      <SiteFrame />
      <ScrollProgress />
      <Navigation />

      <main
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero ready={loaded} />
        <ProjectShowcase />
        <Marquee />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
