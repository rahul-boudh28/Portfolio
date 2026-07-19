// src/components/sections/Workspace.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Folder, FileJson, FileCode2, Play, GitBranch } from "lucide-react";
import { useState, useEffect } from "react";

const CODE_SNIPPETS = {
  python: {
    name: "rpa_bot.py",
    icon: <FileCode2 className="w-4 h-4 text-blue-400" />,
    code: `import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from time import sleep

class HealthcareRPA:
    def __init__(self):
        self.options = uc.ChromeOptions()
        self.options.add_argument("--headless")
        self.driver = uc.Chrome(options=self.options)

    def fetch_claim_status(self, claim_id):
        # Bypassing bot detection via UCD
        self.driver.get("https://secure.rcm-portal.com")
        self.driver.find_element(By.ID, "claim_search").send_keys(claim_id)
        sleep(1.5) # Human-like delay
        return self.driver.find_element(By.ID, "status").text

# Initializing Bot Manager
bot = HealthcareRPA()
print(f"Status: {bot.fetch_claim_status('CLM-889021')}")`
  },
  react: {
    name: "ChatSystem.tsx",
    icon: <FileCode2 className="w-4 h-4 text-cyan-400" />,
    code: `import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function SecureChat() {
  const [messages, setMessages] = useState([]);
  const socket = io('wss://api.rahulos.dev', { secure: true });

  useEffect(() => {
    socket.on('message', (data) => {
      // E2E Decryption simulation
      const decrypted = decryptPayload(data);
      setMessages(prev => [...prev, decrypted]);
    });
    
    return () => socket.disconnect();
  }, []);

  return (
    <div className="chat-container">
      {messages.map(msg => <MessageBubble key={msg.id} data={msg} />)}
    </div>
  );
}`
  }
};

type TabKey = keyof typeof CODE_SNIPPETS;

export default function Workspace() {
  const [activeTab, setActiveTab] = useState<TabKey>("python");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="workspace" className="py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border mb-6" style={{ borderColor: 'var(--color-border)' }}>
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-text-muted">Module 01: Engineering</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Developer Workspace</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Architecting full-stack applications, intelligent RPA bots, and scalable backends using modern paradigms and strict typing.</p>
          </motion.div>
        </div>

        {/* IDE UI Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden border shadow-2xl bg-bg flex flex-col"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {/* Mac-style Window Header */}
          <div className="h-10 bg-surface flex items-center px-4 border-b gap-4" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-danger" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xs font-mono text-text-muted flex items-center gap-2">
                <Folder className="w-3 h-3" /> RahulOS_Architecture
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* IDE Sidebar */}
            <div className="w-full md:w-64 bg-surface/30 border-r p-4 flex flex-col gap-1" style={{ borderColor: 'var(--color-border)' }}>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 ml-2">Explorer</span>
              
              <button onClick={() => setActiveTab("python")} className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm font-mono transition-colors ${activeTab === 'python' ? 'bg-primary/10 text-primary' : 'text-text-muted hover:text-text-main'}`}>
                {CODE_SNIPPETS.python.icon} {CODE_SNIPPETS.python.name}
              </button>
              
              <button onClick={() => setActiveTab("react")} className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm font-mono transition-colors ${activeTab === 'react' ? 'bg-primary/10 text-primary' : 'text-text-muted hover:text-text-main'}`}>
                {CODE_SNIPPETS.react.icon} {CODE_SNIPPETS.react.name}
              </button>

              <div className="flex items-center gap-2 px-2 py-1.5 rounded text-sm font-mono text-text-muted opacity-50 cursor-not-allowed mt-2">
                <FileJson className="w-4 h-4" /> package.json
              </div>
            </div>

            {/* IDE Main Content */}
            <div className="flex-1 flex flex-col bg-[#0d1117]">
              {/* Tabs */}
              <div className="flex bg-surface/50 border-b overflow-x-auto scrollbar-hide" style={{ borderColor: 'var(--color-border)' }}>
                {(Object.keys(CODE_SNIPPETS) as TabKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-mono border-r transition-colors ${activeTab === key ? 'bg-[#0d1117] text-text-main border-t-2 border-t-primary' : 'bg-transparent text-text-muted hover:bg-surface/80 border-t-2 border-t-transparent'}`}
                    style={{ borderRightColor: 'var(--color-border)' }}
                  >
                    {CODE_SNIPPETS[key].icon}
                    {CODE_SNIPPETS[key].name}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div className="flex-1 p-6 overflow-auto relative group">
                <button className="absolute top-4 right-4 p-2 rounded-lg bg-surface/80 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity hover:text-success border" style={{ borderColor: 'var(--color-border)' }}>
                  <Play className="w-4 h-4" />
                </button>
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-mono leading-relaxed"
                  >
                    <code className="text-gray-300">
                      {CODE_SNIPPETS[activeTab].code}
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Terminal Footer */}
              <div className="h-8 bg-surface border-t flex items-center px-4 gap-4 text-xs font-mono text-text-muted" style={{ borderColor: 'var(--color-border)' }}>
                <span className="flex items-center gap-1 hover:text-primary cursor-pointer"><GitBranch className="w-3 h-3" /> main</span>
                <span className="flex items-center gap-1 hover:text-danger cursor-pointer"><Terminal className="w-3 h-3" /> 0 errors, 0 warnings</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}