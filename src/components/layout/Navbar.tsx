// src/components/layout/Navbar.tsx
"use client";

import { useUIStore } from "@/lib/store/uiStore";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Terminal, Search, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { setCommandOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Workspace", href: "#workspace" },
    { name: "SOC", href: "#soc" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8, 9, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent"
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand + Realtime Ticker */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-surface border border-border group-hover:border-primary transition-colors">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-sm tracking-widest font-mono text-text-main">
              RAHUL<span className="text-primary">OS</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface/50 border border-border text-[11px] font-mono text-text-muted">
            <Activity className="w-3 h-3 text-success animate-pulse" />
            <span>SYS_ONLINE</span>
            <span className="opacity-40">•</span>
            <span>{time}</span>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-border rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-white hover:bg-card transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Command Palette Trigger */}
        <button
          onClick={() => setCommandOpen(true)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-card transition-colors text-text-muted hover:text-white group"
        >
          <Search className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
          <span className="text-xs hidden sm:inline">Search</span>
          <div className="hidden sm:flex items-center gap-0.5 ml-1">
            <kbd className="px-1.5 py-0.5 rounded bg-bg border border-border text-[10px] font-mono">⌘</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-bg border border-border text-[10px] font-mono">K</kbd>
          </div>
        </button>

      </div>
    </motion.header>
  );
}