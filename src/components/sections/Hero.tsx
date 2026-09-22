// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown, Code2, ShieldCheck, TerminalSquare } from "lucide-react";
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-between items-center pt-24 pb-8 overflow-hidden">
      
      {/* 3D Particle Constellation */}
      <HeroBackground />

      <div /> {/* Spacer for flex-between balance */}

      {/* Main Core Viewport */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-surface/70 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-success shadow-[0_0_10px_var(--color-success)] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold text-text-muted tracking-wider uppercase">
                Kernel Online • Enterprise Ready
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.08] max-w-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
              Architecting
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/90 to-primary/40">
              Software & Security.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl max-w-2xl mb-10 text-text-muted font-normal leading-relaxed"
          >
            I am <strong className="text-white font-semibold">Rahul Boudh</strong>. A hybrid engineer building high-volume RPA platforms, scalable web architectures, and proactive cyber defense controls.
          </motion.p>

          {/* Non-colliding Button Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#workspace"
              className="group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary text-white overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(79,142,247,0.4)] active:scale-95 w-full sm:w-auto"
            >
              <Code2 className="w-4 h-4" />
              <span>Explore Architecture</span>
            </a>
            
            <a 
              href="#soc"
              className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border border-border bg-surface/80 text-text-main transition-all hover:bg-card hover:border-text-muted active:scale-95 w-full sm:w-auto"
            >
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Cyber Defense Ops</span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Natural Bottom Anchor (Can Never Overlap Buttons) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 pt-8 flex flex-col items-center gap-1.5 text-text-muted cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">System Flow</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

    </section>
  );
}