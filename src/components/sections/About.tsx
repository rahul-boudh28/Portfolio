// src/components/sections/About.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, Shield, Target, Cpu, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!mounted) return null;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Philosophy & Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono font-bold tracking-widest uppercase text-text-muted">System Profile</span>
            </motion.div>

            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creation</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">Protection.</span>
            </motion.h2>

            <motion.p variants={fadeUpVariants} className="text-lg text-text-muted leading-relaxed">
              My engineering philosophy is simple: <strong>Build securely from day one, and automate the mundane.</strong> I don't just write code; I architect systems that are scalable, efficient, and inherently resistant to modern threats.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Mission Card */}
              <div className="p-5 rounded-2xl border bg-surface/30 backdrop-blur-sm" style={{ borderColor: 'var(--color-border)' }}>
                <Target className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold text-text-main mb-2">The Mission</h3>
                <p className="text-sm text-text-muted leading-relaxed">To engineer robust software solutions while proactively hunting and mitigating infrastructure vulnerabilities.</p>
              </div>
              
              {/* Methodology Card */}
              <div className="p-5 rounded-2xl border bg-surface/30 backdrop-blur-sm" style={{ borderColor: 'var(--color-border)' }}>
                <Cpu className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-text-main mb-2">The Methodology</h3>
                <p className="text-sm text-text-muted leading-relaxed">Leveraging Python, RPA, and modern web stacks to eliminate manual workloads without sacrificing security controls.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md perspective-1000"
          >
            {/* Animated border gradient ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary via-accent to-success opacity-30 blur-xl animate-pulse" />
            
            <div className="relative w-full rounded-3xl border bg-card/80 backdrop-blur-xl p-8 overflow-hidden shadow-2xl flex flex-col items-center text-center" style={{ borderColor: 'var(--color-border)' }}>
              
              {/* Inner subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

              {/* Avatar / Photo Placeholder */}
              <div className="relative w-32 h-32 rounded-full border-2 border-primary/50 p-1 mb-6 flex items-center justify-center bg-surface">
                {/* 
                  NOTE: To add your real photo, replace this entire div with:
                  <img src="/your-photo.jpg" alt="Rahul Boudh" className="w-full h-full object-cover rounded-full" />
                */}
                <User className="w-12 h-12 text-primary opacity-50" />
                
                {/* Active Status Dot */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-success border-2 border-card rounded-full" />
              </div>

              <h3 className="text-2xl font-bold mb-1">Rahul Boudh</h3>
              <p className="text-sm font-mono text-primary mb-6">Software Developer & CEH</p>

              {/* Career Goals / Quick Stats */}
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/50 border" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-medium text-text-muted">Focus</span>
                  </div>
                  <span className="text-sm font-bold">RPA & Automation</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/50 border" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-medium text-text-muted">Clearance</span>
                  </div>
                  <span className="text-sm font-bold text-success">EC-Council CEH</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}