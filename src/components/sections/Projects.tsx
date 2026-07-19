// src/components/sections/Projects.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { projectsData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, ShieldAlert, Cpu, Activity, ExternalLink, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { Project } from "@/types/resume";

export default function Projects() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const isSoc = mode === "soc";

  if (!mounted) return null;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
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
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {isSoc ? "Security Tools & Automation" : "Engineering Projects"}
            </h2>
            <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
              {isSoc ? "Tactical deployments and threat monitoring systems." : "Full-stack applications and RPA case studies."}
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl flex flex-col h-full"
              style={{
                backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
                borderColor: isSoc ? '#27272A' : '#EAEAEA',
              }}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                  style={{
                    backgroundColor: isSoc ? '#09090B' : '#FAFAFA',
                    color: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)',
                    border: `1px solid ${isSoc ? '#27272A' : '#EAEAEA'}`
                  }}>
                  {project.category === "Security" && <ShieldAlert className="w-3 h-3" />}
                  {project.category === "Automation" && <Activity className="w-3 h-3" />}
                  {(project.category === "Full Stack" || project.category === "AI/ML") && <Cpu className="w-3 h-3" />}
                  {project.category}
                </span>
              </div>

              {/* Fixed React inline style property to textDecorationColor */}
              <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4"
                  style={{ textDecorationColor: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)' }}>
                {project.title}
              </h3>
              
              <p className="text-sm mb-6 flex-grow" style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
                {project.shortDescription}
              </p>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded border opacity-70"
                        style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[10px] font-mono px-2 py-1 rounded border opacity-70"
                        style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay & Expanded Card (AnimatePresence handles unmounting animation) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl md:rounded-3xl shadow-2xl flex flex-col"
                style={{
                  backgroundColor: isSoc ? '#09090B' : '#FFFFFF',
                  border: `1px solid ${isSoc ? '#27272A' : '#EAEAEA'}`,
                  color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-text)'
                }}
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-start justify-between p-6 md:p-8 border-b backdrop-blur-xl"
                     style={{ 
                       backgroundColor: isSoc ? 'rgba(9,9,11,0.8)' : 'rgba(255,255,255,0.9)',
                       borderColor: isSoc ? '#27272A' : '#EAEAEA' 
                     }}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 rounded border"
                              style={{ 
                                borderColor: isSoc ? '#27272A' : '#EAEAEA',
                                backgroundColor: isSoc ? '#18181B' : '#FAFAFA' 
                              }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Body - Case Study */}
                <div className="p-6 md:p-8 space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                          style={{ color: isSoc ? 'var(--color-soc-warning)' : 'var(--color-workspace-accent)' }}>
                        <ShieldAlert className="w-4 h-4" /> The Challenge
                      </h4>
                      <p className="text-sm leading-relaxed opacity-90">{selectedProject.caseStudy.problem}</p>
                    </div>
                    
                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                          style={{ color: isSoc ? 'var(--color-soc-success)' : 'var(--color-workspace-accent)' }}>
                        <Activity className="w-4 h-4" /> The Solution
                      </h4>
                      <p className="text-sm leading-relaxed opacity-90">{selectedProject.caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Architecture & Security */}
                  <div className="p-6 rounded-xl border" style={{ backgroundColor: isSoc ? '#18181B' : '#FAFAFA', borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
                    <h4 className="text-base font-bold mb-4">Architecture & Security</h4>
                    <ul className="space-y-4 text-sm">
                      <li><strong className="opacity-70">Infrastructure:</strong> {selectedProject.caseStudy.architecture}</li>
                      <li><strong className="opacity-70">Security Measures:</strong> {selectedProject.caseStudy.security}</li>
                      <li><strong className="opacity-70">Technical Hurdles:</strong> {selectedProject.caseStudy.challenges}</li>
                    </ul>
                  </div>

                  {/* Results & Lessons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Impact & Results</h4>
                      <p className="text-sm leading-relaxed opacity-90">{selectedProject.caseStudy.results}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Lessons Learned</h4>
                      <p className="text-sm leading-relaxed opacity-90">{selectedProject.caseStudy.lessonsLearned}</p>
                    </div>
                  </div>

                  {/* External Links (If available) */}
                  {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                    <div className="pt-6 border-t flex gap-4" style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}>
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
                          {/* Changed icon to Code to prevent lucide-react version mismatch */}
                          <Code className="w-4 h-4" /> Source Code
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}