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
        "%c[!] RAHULOS CLIENT DEFENSE ACTIVE%c\nOperator: Rahul Boudh | EC-Council CEH Validated\nNotice: Client-side tampering and source extraction are restricted by policy.",
        "color: #4F8EF7; font-size: 13px; font-weight: bold; background: #08090A; padding: 6px 10px; border-radius: 4px; border: 1px solid #4F8EF7;",
        "color: #23D18B; font-size: 11px; font-family: monospace; padding-top: 6px;"
      );
    }
  };

  useEffect(() => {
    if (!alertMessage) return;
    const timer = setTimeout(() => setAlertMessage(null), 3000);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  useEffect(() => {
    // 1. Initial Console Watermark
    console.clear();
    console.log(
      "%c[RAHULOS SECURITY MATRIX] Terminal monitoring active.",
      "color: #4F8EF7; font-family: monospace; font-size: 12px; font-weight: bold;"
    );

    // 2. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on input fields and textareas for accessibility
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
      triggerSecurityAlert("Context Menu Restricted: Right-click is disabled.");
    };

    // 3. Prevent Drag & Drop Extraction of Images/Links
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "IMG" || target.tagName === "A")) {
        e.preventDefault();
      }
    };

    // 4. Intercept DevTools Hotkeys
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // F12
      if (e.key === "F12") {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: F12 DevTools launch intercepted.");
        return;
      }

      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
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

      // Ctrl+S (Save Page)
      if (isCtrlOrCmd && key === "s") {
        e.preventDefault();
        triggerSecurityAlert("Action Blocked: Payload extraction denied.");
        return;
      }
    };

    // 5. Non-Aggressive DevTools Docked Resize Detection
    const handleResize = () => {
      // Standard threshold delta for opened docked DevTools
      const threshold = 180;
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (window.outerWidth > 600 && (widthDiff > threshold || heightDiff > threshold)) {
        console.clear();
        console.log(
          "%c[SECURITY AUDIT] DevTools inspection dock detected.",
          "color: #FF5C5C; font-size: 12px; font-weight: bold;"
        );
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
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