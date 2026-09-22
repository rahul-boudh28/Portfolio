// src/components/ui/CommandPalette.tsx
"use client";

import { useUIStore } from "@/lib/store/uiStore";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Code2, Shield, User, Mail, Command, X, FolderGit2, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navigateToSection } from "@/lib/utils/navigation";

export default function CommandPalette() {
  const { isCommandOpen, setCommandOpen } = useUIStore();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => {
    if (isCommandOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCommandOpen]);

  const commands = [
    {
      id: "about",
      name: "About Me & Philosophy",
      icon: <User className="w-4 h-4" />,
      action: () => navigateToSection("about", pathname, router),
    },
    {
      id: "workspace",
      name: "Developer Workspace (IDE)",
      icon: <Code2 className="w-4 h-4" />,
      action: () => navigateToSection("workspace", pathname, router),
    },
    {
      id: "soc",
      name: "Cyber Defense Center (SOC)",
      icon: <Shield className="w-4 h-4" />,
      action: () => navigateToSection("soc", pathname, router),
    },
    {
      id: "projects",
      name: "Engineering Case Studies",
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => navigateToSection("projects", pathname, router),
    },
    {
      id: "experience",
      name: "Professional Experience",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => navigateToSection("experience", pathname, router),
    },
    {
      id: "contact",
      name: "Contact Operator",
      icon: <Mail className="w-4 h-4" />,
      action: () => navigateToSection("contact", pathname, router),
    },
    {
      id: "resume",
      name: "View / Download ATS Resume",
      icon: <FileText className="w-4 h-4" />,
      action: () => router.push("/resume"),
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
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
        <div className="fixed inset-0 z-[999999] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl bg-surface border-border"
          >
            <div className="flex items-center px-4 py-4 border-b border-border">
              <Search className="w-5 h-5 text-text-muted mr-3" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search systems, sections, or resume..."
                className="flex-1 bg-transparent border-none outline-none text-text-main placeholder-text-muted text-base sm:text-lg"
              />
              <button
                onClick={() => setCommandOpen(false)}
                className="p-1 rounded-md hover:bg-card transition-colors text-text-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-sm text-text-muted">
                  No matching systems found.
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
                    <span className="font-medium text-sm flex-1 text-text-main">
                      {cmd.name}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted bg-card/40">
              <span className="flex items-center gap-1.5">
                <Command className="w-3 h-3" /> Navigation Command Grid
              </span>
              <span>
                Use <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border">esc</kbd> to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}