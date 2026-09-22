// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Workspace from "@/components/sections/Workspace";
import SOC from "@/components/sections/SOC";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Resume from "@/components/sections/Resume"; // 👈 Imported
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Workspace />
      <SOC />
      <Projects />
      <Skills />
      <Experience />
      <Resume /> {/* 👈 Injected here */}
      <Contact />
    </div>
  );
}