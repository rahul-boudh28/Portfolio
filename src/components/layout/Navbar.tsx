// src/components/layout/Navbar.tsx
"use client";

import { useUIStore } from "@/lib/store/uiStore";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Terminal, Command, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { setCommandOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic blur/background on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Workspace", href: "#workspace" },
    { name: "SOC", href: "#soc" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(8, 9, 10, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 rounded-lg bg-surface border transition-colors group-hover:border-primary" style={{ borderColor: 'var(--color-border)' }}>
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-sm tracking-widest font-mono text-text-main">
            RAHUL<span className="text-text-muted group-hover:text-primary transition-colors">OS</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/50 border rounded-full px-2 py-1" style={{ borderColor: 'var(--color-border)' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-text-main hover:bg-card transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Command Palette Trigger */}
        <button
          onClick={() => setCommandOpen(true)}
          className="flex items-center gap-3 px-3 py-1.5 rounded-lg border bg-surface hover:bg-card transition-colors text-text-muted group"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <Search className="w-4 h-4 group-hover:text-primary transition-colors" />
          <span className="text-xs hidden sm:block">Search System</span>
          <div className="hidden sm:flex items-center gap-1 ml-2">
            <kbd className="px-1.5 py-0.5 rounded bg-bg border text-[10px] font-mono" style={{ borderColor: 'var(--color-border)' }}>⌘</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-bg border text-[10px] font-mono" style={{ borderColor: 'var(--color-border)' }}>K</kbd>
          </div>
        </button>

      </div>
    </motion.header>
  );
}