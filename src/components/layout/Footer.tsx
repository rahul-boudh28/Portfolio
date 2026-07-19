// src/components/layout/Footer.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { Code2, Globe, Mail, ShieldAlert, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  if (!mounted) return null;

  return (
    <footer className="w-full border-t py-8 mt-12 transition-colors duration-500"
            style={{ 
              borderColor: isSoc ? '#27272A' : '#EAEAEA',
              backgroundColor: isSoc ? '#09090B' : '#FAFAFA' 
            }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2 opacity-80">
          {isSoc ? <ShieldAlert className="w-5 h-5 text-soc-accent" /> : <Terminal className="w-5 h-5 text-workspace-accent" />}
          <span className="font-bold text-sm font-mono tracking-wider">
            RAHUL<span style={{ color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-muted)' }}>OS</span>
            <span className="text-xs ml-2 opacity-50 font-sans">v2.0.26</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium opacity-60">
          © {new Date().getFullYear()} Rahul Boudh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
            <Globe className="w-5 h-5" />
          </a>
          <a href="mailto:rahuldboudh@gmail.com" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}