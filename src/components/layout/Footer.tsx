// src/components/layout/Footer.tsx
"use client";

import { Code2, Globe, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="w-full border-t py-8 mt-12 bg-bg text-text-muted" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2 opacity-80 group cursor-pointer hover:opacity-100 transition-opacity">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm font-mono tracking-wider text-text-main">
            RAHUL<span className="text-text-muted transition-colors group-hover:text-primary">OS</span>
            <span className="text-xs ml-2 opacity-50 font-sans">v2.0.26</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium opacity-60">
          © {new Date().getFullYear()} Rahul Boudh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <Globe className="w-5 h-5" />
          </a>
          <a href="mailto:rahuldboudh@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}