// src/components/sections/Resume.tsx
"use client";

import { motion } from "framer-motion";
import { FileText, Download, Printer, CheckCircle2, ShieldCheck, Briefcase, GraduationCap, Award } from "lucide-react";
import { useState } from "react";
import { experienceData, certificationsData, skillsData } from "@/data/resume";

export default function Resume() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-32 relative bg-[#060709] border-t border-border">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-text-muted uppercase">Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Resume Center</h2>
            <p className="text-text-muted mt-2">ATS-compliant verified profile. Preview, toggle density, or export to PDF.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Recruiter Mode Toggle */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                recruiterMode 
                  ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(79,142,247,0.4)]" 
                  : "bg-surface text-text-muted border-border hover:border-text-muted hover:text-white"
              }`}
            >
              {recruiterMode ? "✓ Recruiter Mode Active" : "Enable Recruiter Mode"}
            </button>

            {/* Print / Save as PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-surface border border-border hover:border-primary text-text-main hover:text-primary transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Direct Download (Using relative ./resume.pdf for GitHub Pages subpath compatibility) */}
            <a
              href="./resume.pdf"
              download="Rahul_Boudh_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* ATS-Optimized Sheet (Formatted for both screen and print) */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border bg-[#090A0C] shadow-2xl relative overflow-hidden print:p-0 print:border-none print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-border pb-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">RAHUL BOUDH</h1>
            <p className="text-primary font-mono text-base font-semibold mt-1">Software Developer • Certified Ethical Hacker (CEH)</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs font-mono text-text-muted">
              <span>Bhandup, Mumbai, Maharashtra - 400078</span>
              <span>•</span>
              <a href="mailto:rahuldboudh@gmail.com" className="hover:text-primary">rahuldboudh@gmail.com</a>
              <span>•</span>
              <span>+91 7400329443</span>
            </div>
          </div>

          {/* Quick Recruiter Summary */}
          {recruiterMode && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              className="p-4 rounded-xl border border-primary/30 bg-primary/5 mb-8 text-xs font-mono text-primary leading-relaxed"
            >
              <strong>⚡ RECRUITER HIGHLIGHTS:</strong> 1+ years enterprise experience at Vita Health RCM building production Python RPA bots for Prognocis/Luna systems, automating ANSI X12 healthcare billing conversions, administering Active Directory & LAN/WAN security, and holding an EC-Council CEH credential.
            </motion.div>
          )}

          {/* Education & Certs */}
          <div className="mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4" /> Education & Certifications
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <div>
                  <strong className="text-white">Bachelor of Science in Information Technology (B.Sc I.T)</strong>
                  <p className="text-text-muted text-xs">Mumbai University • CGPA: 8.9</p>
                </div>
                <span className="text-xs font-mono text-text-muted">Graduated 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <div>
                  <strong className="text-success flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Certified Ethical Hacker (CEH) — EC Council
                  </strong>
                  <p className="text-text-muted text-xs font-mono">Certificate No: ECC7182649503</p>
                </div>
                <span className="text-xs font-mono text-text-muted">Completed 2024</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-base font-bold text-white">{exp.role} — <span className="text-primary">{exp.company}</span></h3>
                  </div>
                  <span className="text-xs font-mono text-text-muted">{exp.duration}</span>
                </div>
                <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Technical Arsenal */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-4">
              <Award className="w-4 h-4" /> Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((grp) => (
                <div key={grp.category} className="p-3 rounded-lg border border-border bg-surface/40">
                  <span className="font-bold text-white block mb-1">{grp.category}:</span>
                  <span className="text-text-muted font-mono">{grp.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}