// src/components/layout/ClientThemeProvider.tsx
"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/lib/store/themeStore";

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    
    // Smooth transition for background colors when switching modes
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    if (mode === 'soc') {
      root.classList.add('soc-mode');
      root.classList.add('dark');
    } else {
      root.classList.remove('soc-mode');
      root.classList.remove('dark');
    }
  }, [mode]);

  return <>{children}</>;
}