// src/components/sections/Experience.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { experienceData } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Experience() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  if (!mounted) return null;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl"
            style={{ 
              backgroundColor: isSoc ? 'rgba(0, 97, 255, 0.1)' : '#F0F0F0',
              color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)'
            }}
          >
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {isSoc ? "Operational History" : "Professional Experience"}
            </h2>
            <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
              {isSoc ? "Security deployments & infrastructure management." : "Software engineering & automation roles."}
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 ml-4 md:ml-0 md:border-l-0"
             style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
          
          {/* Desktop central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
               style={{ backgroundColor: isSoc ? '#27272A' : '#EAEAEA' }} />

          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 w-full mb-12 flex flex-col md:flex-row items-center justify-between group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 transition-transform group-hover:scale-150 duration-300"
                   style={{ 
                     backgroundColor: isSoc ? '#09090B' : '#FAFAFA',
                     borderColor: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)'
                   }} 
              />

              {/* Content Card (Centered for single experience, scalable for more) */}
              <div className="w-full md:w-[85%] mx-auto relative z-0">
                <div className="p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl"
                     style={{ 
                       backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
                       borderColor: isSoc ? '#27272A' : '#EAEAEA',
                     }}>
                  
                  {/* Role Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                      <h4 className="text-lg font-medium mt-1" 
                          style={{ color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-muted)' }}>
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border"
                         style={{ 
                           backgroundColor: isSoc ? '#09090B' : '#FAFAFA',
                           borderColor: isSoc ? '#27272A' : '#EAEAEA' 
                         }}>
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Achievements List */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-3 text-sm md:text-base leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" 
                                      style={{ color: isSoc ? 'var(--color-soc-success)' : 'var(--color-workspace-accent)' }} />
                        <span style={{ color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-muted)' }}>
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}