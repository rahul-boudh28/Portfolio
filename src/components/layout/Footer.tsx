// src/components/layout/Footer.tsx
"use client";

import { Code2, Globe, Mail, Terminal, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="w-full border-t border-border py-12 bg-[#060709] text-text-muted no-print" 
      style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Version Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-bold text-sm font-mono tracking-wider text-text-main">
              RAHUL<span className="text-primary">OS</span>
            </span>
          </div>

          <span className="hidden sm:inline text-border">•</span>
          
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface border border-border text-[11px] font-mono text-text-muted">
            <ShieldCheck className="w-3 h-3 text-success" />
            <span>v3.1.0-ENTERPRISE</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium text-text-muted/70">
          © {new Date().getFullYear()} Rahul Boudh. Built with Next.js App Router, Tailwind CSS & R3F.
        </p>

        {/* Social / Direct Channels */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface border border-border hover:border-text-muted hover:text-white transition-colors" aria-label="GitHub">
            <Code2 className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface border border-border hover:border-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
            <Globe className="w-4 h-4" />
          </a>
          <a href="mailto:rahuldboudh@gmail.com" className="p-2 rounded-lg bg-surface border border-border hover:border-text-muted hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}