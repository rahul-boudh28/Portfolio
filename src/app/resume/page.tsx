// src/app/resume/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, CheckCircle2, ShieldCheck, Briefcase, GraduationCap, Award, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { experienceData, certificationsData, skillsData, projectsData } from "@/data/resume";

export default function ResumePage() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  // Trigger browser's high-fidelity PDF print engine
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-text-main py-12 px-4 sm:px-6 print:p-0 print:bg-white print:text-black">
      
      {/* Top Action Bar (Hidden on Print) */}
      <div className="max-w-[900px] mx-auto mb-8 print:hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-md">
          
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-semibold text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Grid</span>
          </Link>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* Recruiter Density Toggle */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
                recruiterMode 
                  ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(79,142,247,0.3)]" 
                  : "bg-surface text-text-muted border-border hover:border-text-muted hover:text-white"
              }`}
            >
              {recruiterMode ? "✓ Recruiter Mode Active" : "Recruiter Mode"}
            </button>

            {/* Option 2: Download Web Resume as ATS PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-surface border border-border hover:border-primary text-text-main hover:text-primary transition-all shadow-sm"
              title="Prints or saves an immaculate ATS-friendly PDF directly from your browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download Web Resume (ATS PDF)</span>
            </button>

            {/* Option 1: Download Original Uploaded PDF */}
            <a
              href="/Portfolio/resume.pdf"
              download="Rahul_Boudh_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
              title="Downloads the uploaded resume.pdf file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original PDF</span>
            </a>

          </div>

        </div>
      </div>

      {/* 📄 ATS-FORMATTED RESUME SHEET 📄 */}
      <main className="max-w-[900px] mx-auto p-8 sm:p-14 rounded-2xl border border-border bg-[#0B0C0E] shadow-2xl print:max-w-full print:p-0 print:border-none print:bg-white print:text-black print:shadow-none">
        
        {/* Header */}
        <header className="border-b border-border pb-6 mb-6 print:border-black print:pb-4 print:mb-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
            RAHUL BOUDH
          </h1>
          <p className="text-primary font-mono text-base font-semibold mt-1 print:text-black print:font-bold">
            SOFTWARE DEVELOPER &bull; CERTIFIED ETHICAL HACKER (CEH)
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs font-mono text-text-muted print:text-black">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 print:hidden" /> Bhandup, Mumbai, Maharashtra - 400078
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 print:hidden" /> 
              <a href="mailto:rahuldboudh@gmail.com" className="hover:underline">rahuldboudh@gmail.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 print:hidden" /> +91 7400329443
            </span>
            <span>
              Portfolio: <a href="https://rahul-boudh28.github.io/Portfolio/" className="hover:underline">https://rahul-boudh28.github.io/Portfolio/</a>
            </span>
          </div>
        </header>

        {/* Recruiter Summary Banner (Hidden in Print unless active) */}
        {recruiterMode && (
          <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 mb-6 text-xs font-mono text-primary leading-relaxed print:hidden">
            <strong>⚡ RECRUITER HIGHLIGHTS:</strong> 1+ years enterprise experience at Vita Health RCM building production Python RPA bots for Prognocis/Luna systems, automating ANSI X12 healthcare billing conversions, administering Active Directory & LAN/WAN security, and holding an EC-Council CEH credential.
          </div>
        )}

        {/* Education & Certifications */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black">
            <GraduationCap className="w-4 h-4 print:hidden" /> EDUCATION & CERTIFICATIONS
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div>
                <strong className="text-white print:text-black font-bold">Bachelor of Science in Information Technology (B.Sc I.T)</strong>
                <p className="text-text-muted text-xs print:text-black">Mumbai University &bull; CGPA: 8.9</p>
              </div>
              <span className="text-xs font-mono text-text-muted print:text-black">2023</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div>
                <strong className="text-success print:text-black font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 print:hidden" /> Certified Ethical Hacker (CEH) &bull; EC Council
                </strong>
                <p className="text-text-muted text-xs font-mono print:text-black">Certificate No: ECC7182649503</p>
              </div>
              <span className="text-xs font-mono text-text-muted print:text-black">2024</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div>
                <strong className="text-white print:text-black font-semibold">Google Cybersecurity Professional Certificate &bull; Coursera</strong>
              </div>
              <span className="text-xs font-mono text-text-muted print:text-black">2024</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div>
                <strong className="text-white print:text-black font-semibold">Python Programming Certification &bull; DevTown</strong>
              </div>
              <span className="text-xs font-mono text-text-muted print:text-black">2023</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black">
            <Briefcase className="w-4 h-4 print:hidden" /> PROFESSIONAL EXPERIENCE
          </h2>
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <div>
                  <h3 className="text-base font-bold text-white print:text-black">
                    {exp.role} &bull; <span className="text-primary print:text-black">{exp.company}</span>
                  </h3>
                </div>
                <span className="text-xs font-mono text-text-muted print:text-black">{exp.duration}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-text-muted print:text-black leading-relaxed">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary print:text-black mt-0.5">&bull;</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills Matrix */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black">
            <Award className="w-4 h-4 print:hidden" /> TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {skillsData.map((grp) => (
              <div key={grp.category} className="p-2 rounded border border-border/60 bg-surface/30 print:p-1 print:border-none">
                <span className="font-bold text-white print:text-black">{grp.category}: </span>
                <span className="text-text-muted print:text-black font-mono">{grp.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Key Production Projects */}
        <section className="print:page-break-inside-avoid">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black">
            KEY PRODUCTION PROJECTS
          </h2>
          <div className="space-y-3 text-xs">
            {projectsData.slice(0, 6).map((proj) => (
              <div key={proj.id} className="p-2.5 rounded border border-border/60 bg-surface/20 print:p-1 print:border-none">
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="text-white print:text-black text-sm">{proj.title}</strong>
                  <span className="font-mono text-[10px] text-text-muted print:text-black">{proj.techStack.join(" • ")}</span>
                </div>
                <p className="text-text-muted print:text-black leading-relaxed">{proj.shortDescription}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
}