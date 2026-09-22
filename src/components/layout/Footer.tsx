// src/components/layout/Footer.tsx
"use client";

import { Code2, Globe, Mail, Terminal, ShieldCheck, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer 
      className="w-full border-t border-border py-12 bg-[#060709] text-text-muted no-print relative z-20"
      style={{ borderColor: "var(--color-border)" }}
    >
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
        <p className="text-xs font-medium text-text-muted/70 text-center">
          © {new Date().getFullYear()} Rahul Boudh. All rights reserved.
        </p>

        {/* Verified Social & Direct Contact Links */}
        <div className="flex items-center gap-3 relative z-30 pointer-events-auto">
          {/* 1. Verified Email (mailto) */}
          <a 
            href="mailto:rahuldboudh@gmail.com" 
            className="p-2.5 rounded-xl bg-surface border border-border hover:border-primary text-text-muted hover:text-primary transition-all cursor-pointer shadow-sm group" 
            aria-label="Send Email to rahuldboudh@gmail.com"
            title="Email: rahuldboudh@gmail.com"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          {/* 2. Verified Phone (tel) */}
          <a 
            href="tel:+917400329443" 
            className="p-2.5 rounded-xl bg-surface border border-border hover:border-success text-text-muted hover:text-success transition-all cursor-pointer shadow-sm group" 
            aria-label="Call +91 7400329443"
            title="Call: +91 7400329443"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          {/* 3. Verified GitHub Profile */}
          <a 
            href="https://github.com/rahul-boudh28" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-xl bg-surface border border-border hover:border-white text-text-muted hover:text-white transition-all cursor-pointer shadow-sm group" 
            aria-label="GitHub Profile (rahul-boudh28)"
            title="GitHub: rahul-boudh28"
          >
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          {/* 4. Verified LinkedIn Profile */}
          <a 
            href="https://www.linkedin.com/in/rahul-boudh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-xl bg-surface border border-border hover:border-primary text-text-muted hover:text-primary transition-all cursor-pointer shadow-sm group" 
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}