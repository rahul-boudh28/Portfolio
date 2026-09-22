// src/app/resume/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, ShieldCheck, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe, User } from "lucide-react";
import { useState } from "react";
import { experienceData, skillsData, projectsData } from "@/data/resume";

const personalDetailsData = {
  dateOfBirth: "28 March 2003",
  gender: "Male",
  maritalStatus: "Single",
  languages: ["English", "Hindi", "Marathi"],
  hobbies: ["Cricket", "Photography", "Exploring AI Tools & Cybersecurity Trends"],
};

export default function ResumePage() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-text-main py-8 px-4 sm:px-6 print:p-0 print:bg-white print:text-black">
      
      {/* 🔴 TOP ACTION BAR (Strictly hidden during PDF print) */}
      <div className="max-w-[900px] mx-auto mb-6 no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-md shadow-lg">
          
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-semibold text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Terminal Grid</span>
          </Link>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
                recruiterMode 
                  ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(79,142,247,0.3)]" 
                  : "bg-surface text-text-muted border-border hover:border-text-muted hover:text-white"
              }`}
            >
              {recruiterMode ? "✓ Recruiter Mode Active" : "Recruiter Highlights"}
            </button>

            {/* Download Web Resume as ATS PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-surface border border-border hover:border-primary text-text-main hover:text-primary transition-all shadow-sm"
              title="Prints or saves an immaculate ATS PDF directly from your browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download Web Resume (ATS PDF)</span>
            </button>

            {/* Download Original Uploaded PDF */}
            <a
              href="/Portfolio/resume.pdf"
              download="Rahul_Boudh_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
              title="Downloads original uploaded PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original PDF</span>
            </a>
          </div>

        </div>
      </div>

      {/* 📄 MASTER ATS RESUME SHEET 📄 */}
      <main className="selectable-text max-w-[900px] mx-auto p-8 sm:p-12 rounded-2xl border border-border bg-[#0B0C0E] shadow-2xl print:max-w-full print:p-0 print:border-none print:bg-white print:text-black print:shadow-none">
        
        {/* 1. CONTACT & IDENTITY HEADER (Protected from being hidden in print) */}
        <div className="border-b border-border pb-6 mb-6 print:border-black/30 print:pb-4 print:mb-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
                RAHUL BOUDH
              </h1>
              <p className="text-primary font-mono text-sm sm:text-base font-semibold mt-1 print:text-black print:font-bold">
                SOFTWARE DEVELOPER &bull; CERTIFIED ETHICAL HACKER (CEH)
              </p>
            </div>
            <span className="text-[11px] font-mono text-text-muted print:text-black/70">
              EC-Council ID: ECC7182649503
            </span>
          </div>
          
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4 pt-3 border-t border-border/40 text-xs font-mono text-text-muted print:text-black print:border-black/20">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0 print:hidden" />
              <strong className="text-white print:text-black font-semibold">+91 7400329443</strong>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary shrink-0 print:hidden" />
              <a href="mailto:rahuldboudh@gmail.com" className="text-white print:text-black hover:underline font-semibold">
                rahuldboudh@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0 print:hidden" />
              <span>Bhandup, Mumbai - 400078</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-primary shrink-0 print:hidden" />
              <a href="https://rahul-boudh28.github.io/Portfolio/" className="hover:underline text-white print:text-black truncate">
                rahul-boudh28.github.io
              </a>
            </div>
          </div>
        </div>

        {/* Recruiter Highlights Banner (Visible on web when toggled) */}
        {recruiterMode && (
          <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 mb-6 text-xs font-mono text-primary leading-relaxed no-print">
            <strong>⚡ RECRUITER HIGHLIGHTS:</strong> 1+ years enterprise experience at Vita Health RCM building production Python RPA bots for Prognocis/Luna systems, automating ANSI X12 healthcare billing conversions, administering Active Directory & LAN/WAN security, and holding an EC-Council CEH credential.
          </div>
        )}

        {/* 2. EDUCATION & CERTIFICATIONS */}
        <section className="resume-section mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black/30">
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
                <p className="text-text-muted text-xs font-mono print:text-black">Credential: ECC7182649503</p>
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

        {/* 3. PROFESSIONAL EXPERIENCE */}
        <section className="resume-section mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black/30">
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
                <span className="text-xs font-mono text-text-muted print:text-black font-semibold">{exp.duration}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-text-muted print:text-black leading-relaxed">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary print:text-black mt-0.5 font-bold">&bull;</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 4. TECHNICAL SKILLS MATRIX */}
        <section className="resume-section mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black/30">
            <Award className="w-4 h-4 print:hidden" /> TECHNICAL SKILLS MATRIX
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {skillsData.map((grp) => (
              <div key={grp.category} className="p-2 rounded border border-border/60 bg-surface/30 print:p-1 print:border-none print:bg-transparent">
                <span className="font-bold text-white print:text-black">{grp.category}: </span>
                <span className="text-text-muted print:text-black font-mono">{grp.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. KEY PRODUCTION PROJECTS */}
        <section className="resume-section mb-6 print:mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black/30">
            KEY PRODUCTION & SECURITY PROJECTS
          </h2>
          <div className="space-y-3 text-xs">
            {projectsData.slice(0, 5).map((proj) => (
              <div key={proj.id} className="p-2.5 rounded border border-border/60 bg-surface/20 print:p-1 print:border-none print:bg-transparent">
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="text-white print:text-black text-sm">{proj.title}</strong>
                  <span className="font-mono text-[10px] text-text-muted print:text-black font-semibold">{proj.techStack.join(" • ")}</span>
                </div>
                <p className="text-text-muted print:text-black leading-relaxed">{proj.shortDescription}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PERSONAL DETAILS (From Page 4 of Resume) */}
        <section className="resume-section">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2 mb-3 border-b border-border/50 pb-1 print:text-black print:border-black/30">
            <User className="w-4 h-4 print:hidden" /> PERSONAL DETAILS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-text-muted print:text-black">
            <div><strong className="text-white print:text-black">Date of Birth:</strong> {personalDetailsData.dateOfBirth}</div>
            <div><strong className="text-white print:text-black">Gender:</strong> {personalDetailsData.gender}</div>
            <div><strong className="text-white print:text-black">Marital Status:</strong> {personalDetailsData.maritalStatus}</div>
            <div><strong className="text-white print:text-black">Languages Known:</strong> {personalDetailsData.languages.join(", ")}</div>
            <div className="sm:col-span-2">
              <strong className="text-white print:text-black">Hobbies & Interests:</strong> {personalDetailsData.hobbies.join(", ")}
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}