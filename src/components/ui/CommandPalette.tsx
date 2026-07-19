// src/components/ui/CommandPalette.tsx
"use client";

import { useUIStore } from "@/lib/store/uiStore";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Code2, Shield, User, Mail, Command, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const { isCommandOpen, setCommandOpen } = useUIStore();
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen(!isCommandOpen);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isCommandOpen, setCommandOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isCommandOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCommandOpen]);

  const commands = [
    { id: "about", name: "About Me", icon: <User className="w-4 h-4" />, action: () => router.push("#about") },
    { id: "dev", name: "Developer Workspace", icon: <Code2 className="w-4 h-4" />, action: () => router.push("#workspace") },
    { id: "soc", name: "Cyber Defense Center", icon: <Shield className="w-4 h-4" />, action: () => router.push("#soc") },
    { id: "resume", name: "Download Resume", icon: <FileText className="w-4 h-4" />, action: () => window.open("/resume.pdf", "_blank") },
    { id: "contact", name: "Contact", icon: <Mail className="w-4 h-4" />, action: () => router.push("#contact") },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (action: () => void) => {
    action();
    setCommandOpen(false);
    setSearch("");
  };

  return (
    <AnimatePresence>
      {isCommandOpen && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl"
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <Search className="w-5 h-5 text-text-muted mr-3" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-text-main placeholder-text-muted text-lg"
              />
              <button onClick={() => setCommandOpen(false)} className="p-1 rounded-md hover:bg-card transition-colors text-text-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-sm text-text-muted">
                  No results found.
                </div>
              ) : (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.action)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors hover:bg-card text-text-muted hover:text-primary group"
                  >
                    <div className="p-2 rounded-lg bg-card group-hover:bg-bg transition-colors">
                      {cmd.icon}
                    </div>
                    <span className="font-medium text-sm flex-1 text-text-main">{cmd.name}</span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t flex items-center justify-between text-[10px] text-text-muted bg-card/50" style={{ borderColor: 'var(--color-border)' }}>
              <span className="flex items-center gap-1"><Command className="w-3 h-3" /> Navigation Panel</span>
              <span>Use <kbd className="px-1.5 py-0.5 rounded bg-surface border" style={{ borderColor: 'var(--color-border)' }}>esc</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}