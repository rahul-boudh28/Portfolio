// src/app/page.tsx
"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Workspace from "@/components/sections/Workspace";
import SOC from "@/components/sections/SOC";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { smoothScrollToElement } from "@/lib/utils/navigation";

export default function Home() {
  useEffect(() => {
    // Detect incoming cross-page hashes (e.g., from /resume navigating to /#about)
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        smoothScrollToElement(targetId);
      }, 200);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="workspace" className="scroll-mt-24">
        <Workspace />
      </div>
      <div id="soc" className="scroll-mt-24">
        <SOC />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      <div id="skills" className="scroll-mt-24">
        <Skills />
      </div>
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </div>
  );
}