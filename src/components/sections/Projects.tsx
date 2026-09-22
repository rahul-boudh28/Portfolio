// src/components/sections/Projects.tsx
"use client";

import { projectsData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, ShieldAlert, Activity, ExternalLink, Code2, Layers, Server } from "lucide-react";
import { useState, useEffect } from "react";
import { Project } from "@/types/resume";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    setMounted(true);
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  if (!mounted) return null;

  const categories = ["All", "Automation", "Security", "Full Stack"];
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const getGradient = (category: string) => {
    switch(category) {
      case "Security": return "from-danger/20 to-bg";
      case "Automation": return "from-primary/20 to-bg";
      case "Full Stack": return "from-accent/20 to-bg";
      default: return "from-surface to-bg";
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface/50 mb-6">
              <FolderGit2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">Module 03: Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Engineering Case Studies</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Detailed breakdowns of system architectures, security implementations, and scalable automation solutions.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === cat 
                  ? "bg-text-main text-bg border-text-main shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                  : "bg-surface text-text-muted hover:text-text-main border-border hover:border-text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Text-Based Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layoutId={`card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-border bg-surface/30 backdrop-blur-sm transition-all hover:bg-card hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full p-6 relative"
              >
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg border border-border bg-bg transition-colors group-hover:border-primary/50">
                    {project.category === "Security" && <ShieldAlert className="w-5 h-5 text-danger" />}
                    {project.category === "Automation" && <Activity className="w-5 h-5 text-primary" />}
                    {(project.category === "Full Stack" || project.category === "AI/ML") && <Layers className="w-5 h-5 text-accent" />}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-text-muted px-2 py-1 rounded bg-bg border border-border">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted mb-8 flex-grow leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-bg border border-border text-text-muted">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-bg border border-border text-text-muted">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay (z-index is lower than custom cursor) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-bg/85 backdrop-blur-md"
              />
              
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col bg-bg border border-border z-10"
              >
                {/* Modal Header Banner */}
                <div className={`relative h-44 md:h-56 w-full bg-gradient-to-br ${getGradient(selectedProject.category)} border-b border-border flex items-end p-8`}>
                  
                  {/* Close button with ESC indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-text-muted border border-border px-2 py-1 rounded bg-bg/60 hidden sm:inline">
                      ESC
                    </span>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full bg-bg/70 backdrop-blur border border-border text-text-muted hover:text-white transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg/60 backdrop-blur border border-border text-text-main uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">{selectedProject.title}</h2>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-10 space-y-12">
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Technologies Deployed</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="text-sm font-medium px-3 py-1.5 rounded-lg border border-border bg-surface text-text-main shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-warning">
                        <ShieldAlert className="w-4 h-4" /> The Challenge
                      </h4>
                      <p className="text-text-muted leading-relaxed">{selectedProject.caseStudy.problem}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-success">
                        <Activity className="w-4 h-4" /> The Solution
                      </h4>
                      <p className="text-text-muted leading-relaxed">{selectedProject.caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm">
                    <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                      <Server className="w-5 h-5 text-primary" /> Architecture & Security Vectors
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <strong className="block text-primary mb-2 text-sm uppercase tracking-wider font-mono">Infrastructure</strong>
                        <p className="text-sm text-text-muted leading-relaxed">{selectedProject.caseStudy.architecture}</p>
                      </div>
                      <div>
                        <strong className="block text-success mb-2 text-sm uppercase tracking-wider font-mono">Security Measures</strong>
                        <p className="text-sm text-text-muted leading-relaxed">{selectedProject.caseStudy.security}</p>
                      </div>
                      <div>
                        <strong className="block text-warning mb-2 text-sm uppercase tracking-wider font-mono">Technical Hurdles</strong>
                        <p className="text-sm text-text-muted leading-relaxed">{selectedProject.caseStudy.challenges}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">Impact & Results</h4>
                      <p className="text-text-muted leading-relaxed">{selectedProject.caseStudy.results}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">Future Scalability</h4>
                      <p className="text-text-muted leading-relaxed">{selectedProject.caseStudy.futureImprovements}</p>
                    </div>
                  </div>

                  {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                    <div className="pt-8 border-t border-border flex gap-4">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-sm font-semibold hover:bg-card transition-colors text-white">
                          <Code2 className="w-4 h-4" /> View Source
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-sm font-semibold hover:scale-105 transition-transform text-white">
                          <ExternalLink className="w-4 h-4" /> Live System
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