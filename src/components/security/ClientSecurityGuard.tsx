// src/components/security/ClientSecurityGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function ClientSecurityGuard() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const triggerSecurityAlert = (reason: string) => {
    setAlertMessage(reason);
    if (typeof window !== "undefined") {
      console.clear();
      console.log(
        "%c[SECURITY PROTOCOL ACTIVE] Inspection and source extraction are restricted on RahulOS.",
        "color: #4F8EF7; font-size: 16px; font-weight: bold; background: #08090A; padding: 8px 12px; border: 1px solid #4F8EF7; border-radius: 6px;"
      );
    }
  };

  useEffect(() => {
    if (!alertMessage) return;
    const timer = setTimeout(() => setAlertMessage(null), 3200);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  useEffect(() => {
    // 1. Disable Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerSecurityAlert("Context Menu Restricted: Right-click is disabled by security policy.");
    };

    // 2. Intercept DevTools & Source Code Inspection Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: F12 DevTools launch intercepted.");
        return;
      }

      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Inspector)
      if (isCtrlOrCmd && e.shiftKey && (key === "i" || key === "j" || key === "c")) {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: Developer inspection hotkey intercepted.");
        return;
      }

      // Ctrl+U (View Source)
      if (isCtrlOrCmd && key === "u") {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: View Source command denied.");
        return;
      }

      // Ctrl+S (Save Page HTML)
      if (isCtrlOrCmd && key === "s") {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: Direct payload extraction denied.");
        return;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {alertMessage && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[2147483647] flex items-center gap-3 px-5 py-3 rounded-xl border border-danger/40 bg-card/95 backdrop-blur-xl shadow-[0_0_30px_rgba(255,92,92,0.25)] text-white text-xs sm:text-sm font-mono"
        >
          <div className="p-1.5 rounded-lg bg-danger/20 text-danger">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
          </div>
          <span className="font-semibold text-danger">POLICY ENFORCED:</span>
          <span className="text-gray-300">{alertMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}