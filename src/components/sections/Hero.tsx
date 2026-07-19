// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown, Code2, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import HeroBackground from "@/components/3d/HeroBackground";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  if (!mounted) return null;

  return (
    <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 3D WebGL Background */}
      <HeroBackground />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-surface/50 backdrop-blur-md" style={{ borderColor: 'var(--color-border)' }}>
              <span className="flex h-2 w-2 rounded-full bg-success shadow-[0_0_10px_var(--color-success)] animate-pulse" />
              <span className="text-xs font-semibold text-text-muted tracking-wide uppercase">
                Available for New Opportunities
              </span>
            </div>
          </motion.div>

          {/* Massive Typography */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] max-w-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Architecting
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-text-muted to-[#4F8EF7]/50">
              Software & Security.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mb-12 text-text-muted font-medium leading-relaxed"
          >
            I am <strong className="text-white">Rahul Boudh</strong>. A hybrid engineer building scalable, high-performance applications and securing enterprise infrastructure against modern threats.
          </motion.p>

          {/* Call to Actions - Using normal anchor tags for smooth scrolling */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-primary text-white overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Code2 className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Explore Architecture</span>
            </a>
            
            <a 
              href="#soc"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold border bg-surface text-text-main transition-all hover:bg-card hover:border-text-muted w-full sm:w-auto"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <ShieldCheck className="w-4 h-4 text-success group-hover:text-success transition-colors" />
              <span>Cyber Defense Ops</span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Down Indicator - Securely pinned to bottom absolute */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted cursor-pointer hover:text-white transition-colors z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}