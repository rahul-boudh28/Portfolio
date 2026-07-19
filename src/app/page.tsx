// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}