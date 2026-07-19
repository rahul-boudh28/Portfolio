// src/components/sections/Skills.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { skillsData, certificationsData } from "@/data/resume";
import { motion } from "framer-motion";
import { Cpu, Award, ShieldCheck, Code2, Database, Network, Lock, Wrench, Bot, Layout } from "lucide-react";
import { useEffect, useState } from "react";

// Helper function to map category names to Lucide icons
const getCategoryIcon = (category: string, isSoc: boolean) => {
  const iconProps = { className: "w-5 h-5", style: { color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)' } };
  
  if (category.includes("Programming")) return <Code2 {...iconProps} />;
  if (category.includes("Frontend")) return <Layout {...iconProps} />;
  if (category.includes("Backend")) return <Database {...iconProps} />;
  if (category.includes("Databases")) return <Database {...iconProps} />;
  if (category.includes("RPA") || category.includes("AI")) return <Bot {...iconProps} />;
  if (category.includes("Cyber")) return <Lock {...iconProps} />;
  if (category.includes("Networking")) return <Network {...iconProps} />;
  return <Wrench {...iconProps} />;
};

export default function Skills() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  if (!mounted) return null;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl"
            style={{ 
              backgroundColor: isSoc ? 'rgba(0, 97, 255, 0.1)' : '#F0F0F0',
              color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)'
            }}
          >
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {isSoc ? "System Capabilities Matrix" : "Technical Arsenal"}
            </h2>
            <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
              {isSoc ? "Monitored skill vectors and security toolkits." : "Core technologies, languages, and frameworks."}
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border transition-all hover:shadow-lg"
              style={{
                backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
                borderColor: isSoc ? '#27272A' : '#EAEAEA',
              }}
            >
              <div className="flex items-center gap-3 mb-6 border-b pb-4" style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
                {getCategoryIcon(skillGroup.category, isSoc)}
                <h3 className="text-lg font-bold">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors"
                    style={{ 
                      backgroundColor: isSoc ? '#09090B' : '#FAFAFA',
                      borderColor: isSoc ? '#27272A' : '#EAEAEA',
                      color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-text)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header: Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl"
            style={{ 
              backgroundColor: isSoc ? 'rgba(16, 185, 129, 0.1)' : '#F0F0F0',
              color: isSoc ? 'var(--color-soc-success)' : 'var(--color-workspace-accent)'
            }}
          >
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications & Clearances</h2>
            <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
              Industry-recognized credentials validating technical and security proficiency.
            </p>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border overflow-hidden group hover:shadow-xl transition-shadow"
              style={{
                backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
                borderColor: isSoc ? '#27272A' : '#EAEAEA',
              }}
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                   style={{ backgroundColor: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)' }} />
              
              <div className="relative z-10">
                <ShieldCheck className="w-8 h-8 mb-4" style={{ color: isSoc ? 'var(--color-soc-success)' : 'var(--color-workspace-muted)' }} />
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <div className="flex flex-col gap-1 text-sm font-medium" style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
                  <span>{cert.issuer} • {cert.year}</span>
                  {cert.credentialId && (
                    <span className="font-mono text-xs opacity-70 mt-2">ID: {cert.credentialId}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}