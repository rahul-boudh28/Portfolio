// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Workspace from "@/components/sections/Workspace";
import SOC from "@/components/sections/SOC";

// We keep the other sections here; we will overhaul them next.
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      
      {/* The Two Massive Dashboards */}
      <Workspace />
      <SOC />
      
      {/* Next Up: Overhauling Projects & Experience */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}