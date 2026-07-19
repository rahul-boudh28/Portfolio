// src/components/sections/Experience.tsx
"use client";

import { experienceData } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-surface/50 w-fit mb-4" style={{ borderColor: 'var(--color-border)' }}>
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">Module 04: History</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Operational History</h2>
            <p className="text-text-muted text-lg">Professional deployments, infrastructure management, and engineering roles.</p>
          </motion.div>
        </div>

        {/* Minimal SaaS Timeline */}
        <div className="relative border-l border-dashed ml-4 md:ml-0" style={{ borderColor: 'var(--color-border)' }}>
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 md:pl-12 pb-16 last:pb-0 group"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-surface border transition-all duration-300 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--color-primary)]"
                   style={{ borderColor: 'var(--color-border)' }} 
              />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-text-main flex items-center gap-2">
                    {exp.role} 
                    <ChevronRight className="w-4 h-4 text-text-muted hidden md:block" />
                  </h3>
                  <h4 className="text-primary font-mono mt-1">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono border bg-surface/50 text-text-muted"
                     style={{ borderColor: 'var(--color-border)' }}>
                  <Calendar className="w-3 h-3" />
                  {exp.duration}
                </div>
              </div>

              {/* Minimal Achievements List */}
              <ul className="space-y-4 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-muted hover:text-text-main transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-success/50" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}