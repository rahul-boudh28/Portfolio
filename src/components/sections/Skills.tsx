// src/components/sections/Skills.tsx
"use client";

import { skillsData, certificationsData } from "@/data/resume";
import { motion } from "framer-motion";
import { Cpu, Award, ShieldCheck, Code2, Database, Network, Lock, Wrench, Bot, Layout, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const getCategoryIcon = (category: string) => {
  const iconProps = { className: "w-5 h-5 text-text-muted group-hover:text-primary transition-colors" };
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="skills" className="py-32 relative bg-surface/20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Skills Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-surface/50 mb-6" style={{ borderColor: 'var(--color-border)' }}>
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">Module 05: Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">System Capabilities</h2>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="p-6 rounded-2xl border bg-card/50 backdrop-blur hover:bg-card transition-all group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(79,142,247,0.05)]"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                {getCategoryIcon(skillGroup.category)}
                <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-xs font-medium px-3 py-1.5 rounded-md border bg-bg text-text-muted transition-colors group-hover:border-primary/30"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-success/10 mb-6" style={{ borderColor: 'var(--color-border)' }}>
              <Award className="w-4 h-4 text-success" />
              <span className="text-xs font-mono font-bold text-success uppercase tracking-wider">Clearances</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Certifications Wall</h2>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative p-8 rounded-2xl border bg-card overflow-hidden group hover:border-success/50 transition-colors flex flex-col"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-text-muted" />
              </div>
              
              <ShieldCheck className="w-10 h-10 mb-6 text-surface group-hover:text-success transition-colors" />
              <h3 className="text-xl font-bold mb-2 text-white">{cert.name}</h3>
              
              <div className="mt-auto pt-6 flex flex-col gap-1 text-sm font-medium text-text-muted">
                <span>{cert.issuer} • {cert.year}</span>
                {cert.credentialId && (
                  <span className="font-mono text-[10px] uppercase tracking-widest mt-2 opacity-50">ID: {cert.credentialId}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}