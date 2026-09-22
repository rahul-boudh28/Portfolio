// src/components/sections/Workspace.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Folder, FileCode2, Play, GitBranch, CheckCircle2, RotateCw } from "lucide-react";
import { useState, useEffect } from "react";

const CODE_SNIPPETS = {
  python: {
    name: "rpa_bot.py",
    language: "Python 3.11",
    code: `import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from time import sleep

class HealthcareRPA:
    def __init__(self):
        self.options = uc.ChromeOptions()
        self.options.add_argument("--headless=new")
        self.driver = uc.Chrome(options=self.options)

    def fetch_claim_status(self, claim_id):
        # Human fingerprint emulation bypasses bot detection
        self.driver.get("https://provider.rcm-portal.com")
        self.driver.find_element(By.ID, "claim_ref").send_keys(claim_id)
        sleep(1.2)
        return self.driver.find_element(By.CLASS_NAME, "adjudication_status").text

# Worker Initialized
bot = HealthcareRPA()
result = bot.fetch_claim_status("CLM-99420-X")
print(f"[STATUS]: {result}")`,
    executionOutput: [
      "[INFO] Spawning Undetected Chrome Driver headless session...",
      "[AUTH] Handshake confirmed with TLS fingerprint bypass.",
      "[QUERY] Fetching adjudication record for Claim: CLM-99420-X...",
      "[PARSER] Status extracted: PAID ($1,420.50) • Zero Captcha challenges triggered.",
      "[COMPLETED] Process finished in 1.34s (Exit Code: 0)"
    ]
  },
  react: {
    name: "ChatSystem.tsx",
    language: "TypeScript",
    code: `import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function SecureChat() {
  const [messages, setMessages] = useState([]);
  const socket = io('wss://api.rahulos.dev', { secure: true });

  useEffect(() => {
    socket.on('message', (payload) => {
      const decrypted = decryptAES256(payload.ciphertext, sessionKey);
      setMessages(prev => [...prev, decrypted]);
    });
    return () => socket.disconnect();
  }, []);

  return <ChatViewport streams={messages} />;
}`,
    executionOutput: [
      "[WS] Establishing duplex connection to wss://api.rahulos.dev...",
      "[SECURITY] ECDH Key exchange validated. Channel encrypted with AES-GCM-256.",
      "[PRESENCE] Heartbeat active: 1 client listening on room #dev-ops.",
      "[READY] Chat engine mounted with 0 frame drops."
    ]
  }
};

type TabKey = keyof typeof CODE_SNIPPETS;

export default function Workspace() {
  const [activeTab, setActiveTab] = useState<TabKey>("python");
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runCode = () => {
    setIsRunning(true);
    setTerminalLogs([`> Initializing runtime for ${CODE_SNIPPETS[activeTab].name}...`]);

    CODE_SNIPPETS[activeTab].executionOutput.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, log]);
        if (index === CODE_SNIPPETS[activeTab].executionOutput.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  if (!mounted) return null;

  return (
    <section id="workspace" className="py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono font-bold text-text-muted">Module 01: Engineering IDE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Developer Workspace</h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
            Live interactive code runner showcasing production RPA algorithms and secure full-stack architectures.
          </p>
        </div>

        {/* IDE UI Container */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-[#090A0C] flex flex-col">
          
          {/* Window Header */}
          <div className="h-10 bg-surface flex items-center justify-between px-4 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-danger/80" />
              <div className="w-3 h-3 rounded-full bg-warning/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
              <Folder className="w-3.5 h-3.5" /> RahulOS_Core / {CODE_SNIPPETS[activeTab].name}
            </div>

            {/* Run Button */}
            <button 
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 text-xs font-mono font-semibold transition-all disabled:opacity-50"
            >
              {isRunning ? <RotateCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
              <span>{isRunning ? "Executing..." : "Run Script"}</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row min-h-[440px]">
            {/* Sidebar */}
            <div className="w-full md:w-56 bg-surface/30 border-r border-border p-3 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2 ml-2">Project Explorer</span>
              
              <button 
                onClick={() => { setActiveTab("python"); setTerminalLogs([]); }} 
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'python' ? 'bg-primary/15 text-primary font-semibold' : 'text-text-muted hover:text-white'}`}
              >
                <FileCode2 className="w-4 h-4 text-primary" /> rpa_bot.py
              </button>
              
              <button 
                onClick={() => { setActiveTab("react"); setTerminalLogs([]); }} 
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'react' ? 'bg-primary/15 text-primary font-semibold' : 'text-text-muted hover:text-white'}`}
              >
                <FileCode2 className="w-4 h-4 text-cyan-400" /> ChatSystem.tsx
              </button>
            </div>

            {/* Code + Live Output Split */}
            <div className="flex-1 flex flex-col bg-[#070809]">
              {/* Code Area */}
              <div className="flex-1 p-6 overflow-auto font-mono text-xs sm:text-sm leading-relaxed text-gray-300">
                <pre><code>{CODE_SNIPPETS[activeTab].code}</code></pre>
              </div>

              {/* Real-time Integrated Terminal Output */}
              <div className="border-t border-border bg-[#050506] p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-text-muted mb-2 text-[11px]">
                  <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-primary" /> System Terminal Simulator</span>
                  <span>Exit: 0</span>
                </div>
                
                <div className="min-h-[90px] flex flex-col justify-end space-y-1 text-text-muted">
                  {terminalLogs.length === 0 ? (
                    <span className="opacity-40 italic">Click &quot;Run Script&quot; above to execute sandbox logic...</span>
                  ) : (
                    terminalLogs.map((log, i) => (
                      <span key={i} className={log.includes("[STATUS]") || log.includes("[COMPLETED]") ? "text-success font-semibold" : log.includes("[AUTH]") ? "text-primary" : "text-gray-400"}>
                        {log}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Status Bar */}
              <div className="h-7 bg-surface border-t border-border flex items-center justify-between px-4 text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5"><GitBranch className="w-3 h-3" /> main</span>
                <span className="flex items-center gap-1.5 text-success"><CheckCircle2 className="w-3 h-3" /> Lint Passed</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}