// src/components/sections/Hero.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, TerminalSquare, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  // Explicitly typing as 'Variants' from framer-motion solves the TS error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        // Using a recognized ease string avoids the tuple strictness issue
        ease: "easeOut" 
      } 
    },
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {isSoc ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,97,255,0.05)_0%,transparent_70%)]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)]" />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
              style={{
                borderColor: isSoc ? '#27272A' : '#EAEAEA',
                backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
                color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-muted)'
              }}
            >
              {isSoc ? <ShieldCheck className="w-3 h-3" /> : <TerminalSquare className="w-3 h-3" />}
              {isSoc ? "CEH Certified Security Analyst" : "Software Developer & RPA Specialist"}
            </span>
          </motion.div>

          {/* Dynamic Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 transition-colors"
          >
            {isSoc ? (
              <>
                Proactive <span style={{ color: 'var(--color-soc-accent)' }}>Defense.</span> <br />
                Secure Infrastructure.
              </>
            ) : (
              <>
                Engineering <span style={{ color: 'var(--color-workspace-muted)' }}>Scalable</span> <br />
                Software & Automation.
              </>
            )}
          </motion.h1>

          {/* Dynamic Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mb-10 opacity-80"
          >
            I am <strong className="font-semibold">Rahul Boudh</strong>. 
            {isSoc 
              ? " I secure enterprise networks, monitor vulnerabilities, and build ethical security tools to safeguard digital assets."
              : " I build intelligent RPA bots, full-stack applications, and scalable system architectures that drive business efficiency."}
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)',
                color: '#FFFFFF'
              }}
            >
              View {isSoc ? "Security Operations" : "Engineering Projects"}
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-colors hover:opacity-70"
              style={{
                borderColor: isSoc ? '#27272A' : '#EAEAEA',
                backgroundColor: isSoc ? '#18181B' : '#FFFFFF'
              }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}