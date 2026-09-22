// src/components/layout/Navbar.tsx
"use client";

import { useUIStore } from "@/lib/store/uiStore";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Terminal, Search, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navigateToSection } from "@/lib/utils/navigation";

export default function Navbar() {
  const { setCommandOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

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
    { name: "About", targetId: "about" },
    { name: "Workspace", targetId: "workspace" },
    { name: "SOC", targetId: "soc" },
    { name: "Projects", targetId: "projects" },
    { name: "Experience", targetId: "experience" },
    { name: "Contact", targetId: "contact" },
  ];

  if (!mounted) return null;

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print"
      style={{
        backgroundColor: scrolled ? "rgba(8, 9, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent"
      }}
    >
      {/* Relative container ensures the absolute nav is anchored to the true header center */}
      <div className="relative max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand + Telemetry */}
        <div className="flex items-center gap-4 z-10">
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

        {/* Center: Desktop Nav Pill (True Viewport Centered via absolute positioning) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-surface/70 border border-border rounded-full px-2.5 py-1 backdrop-blur-md z-10 shadow-lg pointer-events-auto">
          {navLinks.map((link) => (
            <button 
              key={link.targetId} 
              onClick={() => navigateToSection(link.targetId, pathname, router)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-white hover:bg-card transition-all cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right: Search / Command Trigger */}
        <div className="flex items-center z-10">
          <button
            onClick={() => setCommandOpen(true)}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-card transition-colors text-text-muted hover:text-white group cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
            <span className="text-xs hidden sm:inline">Search</span>
            <div className="hidden sm:flex items-center gap-0.5 ml-1">
              <kbd className="px-1.5 py-0.5 rounded bg-bg border border-border text-[10px] font-mono">⌘</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-bg border border-border text-[10px] font-mono">K</kbd>
            </div>
          </button>
        </div>

      </div>
    </motion.header>
  );
}