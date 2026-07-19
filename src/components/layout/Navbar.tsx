// src/components/layout/Navbar.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Code2, Briefcase, Cpu, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { mode, toggleMode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring component is mounted before rendering dynamic theme UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  const navLinks = [
    { name: "Experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Cpu className="w-4 h-4" /> },
    { name: "Resume", href: "#resume", icon: <FileText className="w-4 h-4" /> },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-500" 
      style={{
        backgroundColor: isSoc ? 'rgba(9, 9, 11, 0.7)' : 'rgba(250, 250, 250, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isSoc ? '#27272A' : '#EAEAEA'}`
      }}>
      
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / OS Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg transition-colors"
            style={{ backgroundColor: isSoc ? '#18181B' : '#FFFFFF' }}>
            {isSoc ? <ShieldAlert className="w-5 h-5 text-soc-accent" /> : <Terminal className="w-5 h-5 text-workspace-accent" />}
          </div>
          <span className="font-bold text-lg tracking-tight font-mono">
            Rahul<span style={{ color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-muted)' }}>OS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme Switcher Toggle (The Core OS Switch) */}
        <button
          onClick={toggleMode}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden border transition-colors"
          style={{
            borderColor: isSoc ? '#27272A' : '#EAEAEA',
            backgroundColor: isSoc ? '#18181B' : '#FFFFFF'
          }}
        >
          {/* Animated Background Highlight */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundColor: isSoc ? '#0061FF' : '#000000' }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div
            initial={false}
            animate={{ rotate: isSoc ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isSoc ? <ShieldAlert className="w-4 h-4 text-soc-accent" /> : <Terminal className="w-4 h-4 text-workspace-accent" />}
          </motion.div>
          
          <span className="text-xs font-semibold uppercase tracking-wider relative z-10">
            {isSoc ? "SOC Active" : "Workspace"}
          </span>
        </button>

      </div>
    </header>
  );
}