// src/components/sections/SOC.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Activity, Lock, AlertTriangle, Crosshair, Server, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export default function SOC() {
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [logEvents, setLogEvents] = useState([
    { id: 1, time: "18:42:01", type: "INFO", message: "User Activity Logger active on Node-Alpha." },
    { id: 2, time: "18:43:15", type: "WARN", message: "Traffic anomaly on Port 443 safely filtered." },
    { id: 3, time: "18:45:22", type: "SECURE", message: "Automated vulnerability scan completed. 0 threats." },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerScan = () => {
    setIsScanning(true);
    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString("en-GB"),
      type: "SCAN",
      message: "Tactical host penetration probe initiated across all endpoints.",
    };
    setLogEvents(prev => [newLog, ...prev.slice(0, 4)]);

    setTimeout(() => {
      setIsScanning(false);
      setLogEvents(prev => [
        {
          id: Date.now() + 1,
          time: new Date().toLocaleTimeString("en-GB"),
          type: "SECURE",
          message: "Probe completed: Zero privilege escalations detected.",
        },
        ...prev.slice(0, 4)
      ]);
    }, 1800);
  };

  if (!mounted) return null;

  return (
    <section id="soc" className="py-24 relative overflow-hidden bg-[#060709] border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface mb-4">
            <ShieldAlert className="w-4 h-4 text-success" />
            <span className="text-xs font-mono font-bold text-success uppercase">Module 02: Cyber Defense Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Security Operations Center</h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
            Real-time topology monitoring, intrusion detection algorithms, and CEH vulnerability assessment telemetry.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Radar Column */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-surface/40 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-primary" /> Active Perimeter Telemetry
              </h3>
              
              <button 
                onClick={triggerScan}
                disabled={isScanning}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface border border-border hover:border-primary text-xs font-mono text-text-muted hover:text-white transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isScanning ? "animate-spin text-primary" : ""}`} />
                <span>{isScanning ? "Probing Grid..." : "Run Security Assessment"}</span>
              </button>
            </div>
            
            {/* Radar Animation Area */}
            <div className="flex-1 min-h-[300px] relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-[360px] h-[360px] rounded-full border border-primary/10" />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-primary/20" />
              <div className="absolute w-[160px] h-[160px] rounded-full border border-primary/20" />
              
              {/* Sweeping Line */}
              <motion.div 
                className="absolute w-[180px] h-[180px] origin-bottom-right bg-gradient-to-tr from-primary/30 to-transparent right-1/2 bottom-1/2 rounded-tl-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-success rounded-full shadow-[0_0_12px_var(--color-success)]" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-success rounded-full shadow-[0_0_12px_var(--color-success)]" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_var(--color-primary)]" />
              
              <Server className="w-9 h-9 text-primary relative z-10 bg-[#08090A] border border-border rounded-lg p-1.5" />
            </div>
          </div>

          {/* Metrics Column */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-surface/50">
                <Activity className="w-5 h-5 text-primary mb-2" />
                <div className="text-2xl font-bold font-mono">99.99%</div>
                <div className="text-[10px] text-text-muted font-mono uppercase">Cluster Uptime</div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/50">
                <Lock className="w-5 h-5 text-success mb-2" />
                <div className="text-2xl font-bold font-mono">0</div>
                <div className="text-[10px] text-text-muted font-mono uppercase">Vulnerabilities</div>
              </div>
            </div>

            {/* Live Logs */}
            <div className="flex-1 rounded-2xl border border-border bg-surface/40 p-5 flex flex-col">
              <h3 className="font-bold flex items-center gap-2 mb-3 text-xs font-mono text-text-muted uppercase">
                <AlertTriangle className="w-3.5 h-3.5 text-warning" /> Live Threat Audit Stream
              </h3>
              
              <div className="flex-1 flex flex-col gap-2 font-mono text-xs">
                {logEvents.map((log) => (
                  <div 
                    key={log.id}
                    className="flex items-start gap-2 p-2 rounded bg-card/60 border border-border/70"
                  >
                    <span className="text-text-muted shrink-0 text-[10px]">[{log.time}]</span>
                    <span className={`shrink-0 text-[10px] font-bold ${log.type === "WARN" ? "text-warning" : log.type === "SCAN" ? "text-primary" : "text-success"}`}>
                      {log.type}
                    </span>
                    <span className="text-text-main text-[11px] truncate">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}