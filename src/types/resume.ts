// src/types/resume.ts

export interface CaseStudy {
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  security: string;
  challenges: string;
  results: string;
  lessonsLearned: string;
  futureImprovements: string;
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  shortDescription: string;
  caseStudy: CaseStudy;
  githubUrl?: string;
  liveUrl?: string;
  category: "Automation" | "Full Stack" | "Security" | "AI/ML";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}