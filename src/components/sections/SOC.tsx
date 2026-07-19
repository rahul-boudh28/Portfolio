// src/components/sections/SOC.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Activity, Lock, AlertTriangle, Crosshair, Server, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function SOC() {
  const [mounted, setMounted] = useState(false);
  const [logEvents, setLogEvents] = useState([
    { id: 1, time: "18:42:01", type: "INFO", message: "User Activity Logger initialized on Node-Alpha." },
    { id: 2, time: "18:43:15", type: "WARN", message: "Unusual bandwidth spike detected on port 443." },
    { id: 3, time: "18:45:22", type: "SECURE", message: "Automated vulnerability scan completed. 0 criticals." },
  ]);

  useEffect(() => {
    setMounted(true);
    // Simulate incoming logs
    const interval = setInterval(() => {
      setLogEvents(prev => {
        const newLog = {
          id: Date.now(),
          time: new Date().toLocaleTimeString('en-GB'),
          type: Math.random() > 0.8 ? "WARN" : "INFO",
          message: Math.random() > 0.5 ? "Network Health Monitor: Active heartbeat received." : "Firewall Rules updated successfully.",
        };
        return [newLog, ...prev].slice(0, 5); // Keep last 5
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="soc" className="py-24 relative overflow-hidden bg-[#040608]"> {/* Slightly darker than default bg to differentiate */}
      
      {/* Topographic Background Pattern (Simulated SVG) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-6" style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(24, 194, 156, 0.1)' }}>
              <ShieldAlert className="w-4 h-4 text-success" />
              <span className="text-xs font-mono font-bold text-success uppercase">Module 02: Cyber Defense</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Security Operations Center</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Deploying ethical security tools, monitoring network health, and ensuring compliance across enterprise environments.</p>
          </motion.div>
        </div>

        {/* SOC Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Radar / Topology Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl border bg-surface/50 p-6 flex flex-col"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-8 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold flex items-center gap-2"><Crosshair className="w-5 h-5 text-primary" /> Active Network Topology</h3>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> SYSTEM SECURE
              </div>
            </div>
            
            {/* Radar Animation */}
            <div className="flex-1 min-h-[300px] relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/20" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20" />
              
              {/* Radar sweep */}
              <motion.div 
                className="absolute w-[200px] h-[200px] origin-bottom-right bg-gradient-to-tr from-primary/30 to-transparent right-1/2 bottom-1/2 rounded-tl-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Node Indicators */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-success rounded-full shadow-[0_0_15px_var(--color-success)]" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-success rounded-full shadow-[0_0_15px_var(--color-success)]" />
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/3 right-1/3 w-3 h-3 bg-warning rounded-full shadow-[0_0_15px_var(--color-warning)]" 
              />
              <Server className="w-10 h-10 text-primary relative z-10 bg-[#040608] rounded-lg p-1" />
            </div>
          </motion.div>

          {/* Right Column: Metrics & Logs */}
          <div className="flex flex-col gap-6">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-4 rounded-xl border bg-card/50" style={{ borderColor: 'var(--color-border)' }}>
                <Activity className="w-5 h-5 text-primary mb-2" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-[10px] text-text-muted font-mono uppercase tracking-wide">Uptime Monitored</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-4 rounded-xl border bg-card/50" style={{ borderColor: 'var(--color-border)' }}>
                <Lock className="w-5 h-5 text-success mb-2" />
                <div className="text-2xl font-bold">0</div>
                <div className="text-[10px] text-text-muted font-mono uppercase tracking-wide">Active Vulnerabilities</div>
              </motion.div>
            </div>

            {/* Simulated Live Event Stream */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="flex-1 rounded-2xl border bg-surface/50 p-5 flex flex-col"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <h3 className="font-bold flex items-center gap-2 mb-4 text-sm"><AlertTriangle className="w-4 h-4 text-warning" /> Live Event Stream</h3>
              <div className="flex-1 flex flex-col gap-3 font-mono text-xs overflow-hidden">
                {logEvents.map((log) => (
                  <motion.div 
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2 p-2 rounded bg-card/80 border"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <span className="text-text-muted shrink-0">[{log.time}]</span>
                    <span className={`shrink-0 font-bold ${log.type === 'WARN' ? 'text-warning' : log.type === 'SECURE' ? 'text-success' : 'text-primary'}`}>
                      {log.type}
                    </span>
                    <span className="text-text-main truncate">{log.message}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}