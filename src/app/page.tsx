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
    if (typeof window === "undefined") return;

    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        setTimeout(() => {
          smoothScrollToElement(targetId, false);
        }, 180);
      }
    };

    handleInitialHash();
    window.addEventListener("popstate", handleInitialHash);
    return () => window.removeEventListener("popstate", handleInitialHash);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="scroll-mt-20">
        <About />
      </div>
      <div className="scroll-mt-20">
        <Workspace />
      </div>
      <div className="scroll-mt-20">
        <SOC />
      </div>
      <div className="scroll-mt-20">
        <Projects />
      </div>
      <div className="scroll-mt-20">
        <Skills />
      </div>
      <div className="scroll-mt-20">
        <Experience />
      </div>
      <div className="scroll-mt-20">
        <Contact />
      </div>
    </div>
  );
}