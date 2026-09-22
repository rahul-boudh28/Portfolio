// src/components/security/ClientSecurityGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Terminal } from "lucide-react";

export default function ClientSecurityGuard() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const triggerSecurityAlert = (reason: string) => {
    setAlertMessage(reason);
    if (typeof window !== "undefined") {
      console.clear();
      console.log(
        "%c[!] RAHULOS CLIENT DEFENSE MATRIX ACTIVE%c\nOperator: Rahul Boudh | EC-Council CEH Validated\nNotice: Source inspection, DOM tampering, and extraction tools are restricted by security policy.",
        "color: #4F8EF7; font-size: 14px; font-weight: bold; background: #08090A; padding: 6px 10px; border-radius: 4px; border: 1px solid #4F8EF7;",
        "color: #23D18B; font-size: 12px; font-family: monospace; padding-top: 6px;"
      );
    }
  };

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (!alertMessage) return;
    const timer = setTimeout(() => setAlertMessage(null), 3200);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  useEffect(() => {
    // 1. Log Console Banner on initial load
    console.clear();
    console.log(
      "%c[RAHULOS SECURITY INITIALIZED] Terminal monitoring active.",
      "color: #4F8EF7; font-family: monospace; font-size: 12px; font-weight: bold;"
    );

    // 2. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerSecurityAlert("Context Menu Restricted: Right-click is disabled by client security policy.");
    };

    // 3. Block Developer Key Combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        triggerSecurityAlert("Action Intercepted: F12 DevTools access restricted.");
        return;
      }

      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Picker)
      if (isCtrlOrCmd && e.shiftKey && (key === "i" || key === "j" || key === "c")) {
        e.preventDefault();
        triggerSecurityAlert("Action Intercepted: Developer inspection hotkey denied.");
        return;
      }

      // Ctrl+U (View Page Source)
      if (isCtrlOrCmd && key === "u") {
        e.preventDefault();
        triggerSecurityAlert("Action Intercepted: Direct View-Source shortcut denied.");
        return;
      }

      // Ctrl+S (Save Page HTML)
      if (isCtrlOrCmd && key === "s") {
        e.preventDefault();
        triggerSecurityAlert("Action Intercepted: Payload extraction denied.");
        return;
      }
    };

    // 4. Anti-Debugger Trap (triggers if an external tool opens DevTools)
    const antiDebugger = setInterval(() => {
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = performance.now();
      if (end - start > 100) {
        triggerSecurityAlert("Anti-Debugger Trap Triggered: Execution paused.");
      }
    }, 2000);

    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(antiDebugger);
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
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[2147483647] flex items-center gap-3 px-5 py-3 rounded-xl border border-danger/40 bg-card/95 backdrop-blur-xl shadow-[0_0_30px_rgba(255,92,92,0.3)] text-white text-xs sm:text-sm font-mono"
        >
          <div className="p-1.5 rounded-lg bg-danger/20 text-danger">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
          </div>
          <span className="font-semibold text-danger">SECURITY POLICY:</span>
          <span className="text-gray-200">{alertMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}