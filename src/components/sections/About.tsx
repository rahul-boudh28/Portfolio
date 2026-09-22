// src/components/sections/About.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Terminal, 
  ShieldCheck, 
  Target, 
  Cpu, 
  User, 
  Code2, 
  Layers, 
  Radio, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Building2,
  Award
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navigateToSection } from "@/lib/utils/navigation";

interface Pillar {
  id: string;
  title: string;
  category: string;
  icon: any;
  accentColor: string;
  shortDesc: string;
  expandedDetails: string;
  badges: string[];
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [expandedPillar, setExpandedPillar] = useState<string | null>("mission");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars: Pillar[] = [
    {
      id: "mission",
      title: "The Mission",
      category: "CORE DIRECTIVE",
      icon: Target,
      accentColor: "text-primary",
      shortDesc: "To engineer resilient software platforms while proactively eliminating infrastructure security risks.",
      expandedDetails: "Designing systems with zero-trust principles from day zero. Combining automated patch management, Active Directory governance, and rapid operational scripting to eliminate human error.",
      badges: ["Zero-Trust Architecture", "Process Optimization", "HIPAA Compliance"],
    },
    {
      id: "methodology",
      title: "The Methodology",
      category: "EXECUTION STANDARD",
      icon: Cpu,
      accentColor: "text-accent",
      shortDesc: "Leveraging Python, RPA, and modern web architectures to automate redundant corporate workflows.",
      expandedDetails: "Modeling human-like browser fingerprints using Undetected Chrome Driver and headless worker pools to bypass aggressive bot mitigations on complex healthcare portals like Prognocis & Luna.",
      badges: ["Anti-Bot Bypass", "Headless Orchestration", "Async Event Loops"],
    },
    {
      id: "build",
      title: "What I Build",
      category: "SOFTWARE ENGINEERING",
      icon: Code2,
      accentColor: "text-cyan-400",
      shortDesc: "High-volume RPA bots, full-stack MERN systems, and ANSI X12 healthcare billing converters.",
      expandedDetails: "Built 21+ automated production solutions including custom EOB-to-835 EDI converters, real-time WebSocket messaging architectures, and database-connected desktop GUIs in PyQt6.",
      badges: ["Python 3.11", "React & Next.js", "Socket.IO", "EDI 835 / 837"],
    },
    {
      id: "secure",
      title: "What I Secure",
      category: "CYBER DEFENSE",
      icon: ShieldCheck,
      accentColor: "text-success",
      shortDesc: "Active Directory environments, Windows server clusters, and local network packet hooks.",
      expandedDetails: "Certified Ethical Hacker (CEH v12) executing authorized vulnerability assessments, host DNS filtering, input event logger telemetry, and LAN/WAN perimeter firewall maintenance.",
      badges: ["CEH v12 Verified", "Active Directory", "Socket Interception", "Packet Forensics"],
    },
  ];

  if (!mounted) return null;

  return (
    <section id="about" className="py-28 relative overflow-hidden scroll-mt-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-success/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="flex items-center gap-2 mb-4"
          >
            <div className="p-1.5 rounded-lg bg-surface border border-border">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-text-muted">
              System Profile & Engineering Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Bridging the gap between{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
              Creation
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success via-success to-primary">
              Protection.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-text-muted leading-relaxed"
          >
            My engineering philosophy is simple:{" "}
            <strong className="text-white font-semibold">
              Build securely from day one, and automate the mundane.
            </strong>{" "}
            I don&apos;t just write code; I architect systems that are scalable, efficient,
            and inherently resistant to modern attack surfaces.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT: 4 Interactive Pillars (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const isExpanded = expandedPillar === pillar.id;
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.id}
                  layout
                  onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isExpanded 
                      ? "bg-card border-primary/50 shadow-[0_0_25px_rgba(79,142,247,0.12)]" 
                      : "bg-surface/40 hover:bg-surface/70 border-border hover:border-text-muted/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-bg border border-border group-hover:border-primary/40 transition-colors ${pillar.accentColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-text-muted/70 px-2 py-0.5 rounded bg-bg/60 border border-border/50">
                        {pillar.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{pillar.title}</span>
                      <span className="text-xs font-mono text-text-muted font-normal">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </h3>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  {/* Expandable Technical Detail */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-3 mt-3 border-t border-border/60"
                      >
                        <p className="text-xs text-text-muted/90 leading-relaxed mb-3">
                          {pillar.expandedDetails}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.badges.map((badge) => (
                            <span
                              key={badge}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-main"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Active Cybersecurity Operator HUD Card (Span 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-border bg-[#0B0C0E]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              
              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

              {/* HUD Header Status */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-border/70 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_var(--color-success)] animate-pulse" />
                  <span className="text-success font-bold tracking-wider uppercase">Node Active</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span>24ms RTT • MUM_IN</span>
                </div>
              </div>

              {/* Profile Avatar & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl border-2 border-primary/50 p-1 flex items-center justify-center bg-surface shrink-0 shadow-inner">
                  <User className="w-8 h-8 text-primary" />
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-bg border border-border text-success">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Rahul Boudh</h3>
                  <p className="text-xs font-mono text-primary font-semibold mt-0.5">
                    Software Developer & CEH
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Mumbai University (CGPA 8.9)
                  </p>
                </div>
              </div>

              {/* 4 Interactive Telemetry Tiles */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-surface/50 border border-border/80">
                  <span className="text-[10px] font-mono uppercase text-text-muted block">Primary Focus</span>
                  <strong className="text-xs font-mono text-text-main mt-0.5 block truncate">RPA & Automation</strong>
                </div>

                <div className="p-3 rounded-xl bg-surface/50 border border-border/80">
                  <span className="text-[10px] font-mono uppercase text-text-muted block">Clearance</span>
                  <strong className="text-xs font-mono text-success mt-0.5 block truncate">EC-Council CEH</strong>
                </div>

                <div className="p-3 rounded-xl bg-surface/50 border border-border/80">
                  <span className="text-[10px] font-mono uppercase text-text-muted block">Deployment</span>
                  <strong className="text-xs font-mono text-text-main mt-0.5 block truncate">Vita Health RCM</strong>
                </div>

                <div className="p-3 rounded-xl bg-surface/50 border border-border/80">
                  <span className="text-[10px] font-mono uppercase text-text-muted block">Security Stance</span>
                  <strong className="text-xs font-mono text-primary mt-0.5 block truncate">Zero-Trust Hardened</strong>
                </div>
              </div>

              {/* Terminal Diagnostics Simulator */}
              <div className="p-3.5 rounded-xl bg-bg/80 border border-border font-mono text-xs mb-6 text-text-muted">
                <div className="flex items-center gap-1.5 text-[11px] text-text-muted/60 mb-2 border-b border-border/40 pb-1.5">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span>operator@rahulos:~$ status</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <p className="text-text-main">
                    <span className="text-primary">&gt;</span> clearance:{" "}
                    <span className="text-success font-semibold">ECC7182649503 [VALID]</span>
                  </p>
                  <p className="text-text-main">
                    <span className="text-primary">&gt;</span> stack:{" "}
                    <span className="text-text-muted">Python, React, Flask, Windows AD</span>
                  </p>
                  <p className="text-text-main">
                    <span className="text-primary">&gt;</span> availability:{" "}
                    <span className="text-success">READY_FOR_HIRE</span>
                  </p>
                </div>
              </div>

              {/* Direct Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => router.push("/resume")}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-mono font-semibold hover:bg-primary/90 transition-all cursor-pointer shadow-md"
                >
                  <span>View ATS Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => navigateToSection("contact", pathname, router)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface border border-border hover:border-primary text-text-main hover:text-primary text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  <span>Initiate Comms</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM: SaaS Engineering Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-md">
          <div className="text-center sm:text-left p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">1+ Years</span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1 block">Enterprise Engineering</span>
          </div>

          <div className="text-center sm:text-left p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono block">21 Projects</span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1 block">Software & Cyber Security</span>
          </div>

          <div className="text-center sm:text-left p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">8.9 CGPA</span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1 block">B.Sc Information Tech</span>
          </div>

          <div className="text-center sm:text-left p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-success font-mono block">CEH v12</span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1 block">EC-Council Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}