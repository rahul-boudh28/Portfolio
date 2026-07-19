// src/data/resume.ts
import { Project, Experience, Certification, SkillCategory } from "@/types/resume";

export const experienceData: Experience[] = [
  {
    id: "vita-health",
    role: "Software Developer",
    company: "Vita Health RCM",
    duration: "Feb 2025 - Feb 2026",
    achievements: [
      "Managed end-user support, access control, account provisioning, and IT operations for a secure corporate environment.",
      "Administered Windows servers, desktops, Active Directory, OS configurations, disk management, patch management, and endpoint security.",
      "Configured and maintained LAN/WAN infrastructure, Wi-Fi networks, routers, VPN connectivity, and network security controls.",
      "Performed system monitoring, troubleshooting, log analysis, and incident investigation to ensure maximum system availability.",
      "Managed software deployment, IT asset lifecycle, backup operations, and security compliance activities.",
      "Implemented website filtering, access control policies, and monitoring solutions to enhance organizational security.",
      "Conducted vulnerability assessments, security reviews, and remediation activities to reduce infrastructure risk.",
      "Supported firewall administration, user access management, and endpoint protection initiatives.",
      "Developed internal automation tools and web applications to improve operational efficiency and business workflows.",
      "Built RPA solutions for healthcare RCM platforms (Prognocis & Luna), supported secure business operations through cross-functional collaboration, and gained expertise in U.S. Healthcare RCM workflows and compliance requirements."
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2024",
    credentialId: "ECC7182649503"
  },
  {
    id: "google-cyber",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    year: "2024"
  },
  {
    id: "python-devtown",
    name: "Python Programming Certification",
    issuer: "DevTown",
    year: "2023"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C#", "C++", "HTML", "CSS", "PHP"]
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "PyQt6"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Flask", "Gunicorn", "Socket.IO", "WebSockets"]
  },
  {
    category: "Databases",
    skills: ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "RPA & Automation",
    skills: ["Selenium", "Undetected Chrome Driver (UCD)", "UI Automation", "PDF Parsing", "Web Manager"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["LLMs (ChatGPT, Gemini, Claude, Copilot)", "NLP", "Computer Vision", "OpenCV", "MediaPipe"]
  },
  {
    category: "Cyber Security",
    skills: ["CEH Security Concepts", "Vulnerability Assessments", "Access Control", "Website Filtering", "Cryptography", "Ethical Internal Tools"]
  },
  {
    category: "IT & Networking",
    skills: ["Windows Server Admin", "Active Directory", "LAN/WAN", "VPN", "Endpoint Security", "Firewall Admin"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "VS Code", "Power BI", "Azure"]
  }
];

export const projectsData: Project[] = [
  {
    id: "production-rpa-bots",
    title: "Production RPA Bots",
    techStack: ["Python", "Selenium", "Undetected Chrome Driver", "Web Manager", "AI Logic"],
    shortDescription: "Automates insurance claim status checks and corrections inside web-based RCM systems.",
    category: "Automation",
    caseStudy: {
      problem: "High manual workload and slow production speed in web-based RCM systems (Prognocis & Luna) for claim status checks.",
      solution: "Developed human-like RPA bots to automate data fetching, correction tasks, and claim status checks.",
      architecture: "Python-based scripts utilizing Selenium and Undetected Chrome Driver to bypass bot detection, orchestrated via Web Manager.",
      technologies: ["Python", "Selenium", "Undetected Chrome Driver", "AI Logic"],
      security: "Implemented bot-resistant browsing techniques to maintain secure and compliant access to healthcare portals.",
      challenges: "Bypassing strict bot detection mechanisms on healthcare platforms without triggering security alerts.",
      results: "Improved production speed, significantly reduced manual workload, and maintained accuracy.",
      lessonsLearned: "Advanced techniques in browser fingerprint spoofing and human-like interaction modeling.",
      futureImprovements: "Scale to support additional RCM platforms and integrate LLMs for complex claim denial reasoning."
    }
  },
  {
    id: "uhc-claim-bot",
    title: "UHC Claim Status & Payment Bot",
    techStack: ["Python", "Undetected Chrome Driver", "Excel", "DB Integration"],
    shortDescription: "Automated UHC portal bot fetching claim status & payment details.",
    category: "Automation",
    caseStudy: {
      problem: "Manual retrieval of claim statuses and payment details from the UHC portal was time-consuming.",
      solution: "Built a bot using Undetected Chrome Driver to fetch data, download documents, and export to Excel/DB.",
      architecture: "Automated web scraper integrated directly with local databases and Excel for reporting.",
      technologies: ["Python", "UCD", "Web Automation", "Excel", "SQL"],
      security: "Utilized secure, authenticated sessions with human-like interaction delays to respect portal security.",
      challenges: "Handling dynamic DOM changes in the UHC portal and managing secure document downloads.",
      results: "Completely automated the UHC workflow, eliminating manual portal checking.",
      lessonsLearned: "Robust error handling is critical for web automation relying on third-party DOM structures.",
      futureImprovements: "Implement an API fallback if UHC releases a developer portal."
    }
  },
  {
    id: "user-activity-logger",
    title: "User Activity Tracking & Event Logger",
    techStack: ["Python", "Pynput", "System Hooks", "MS SQL Server"],
    shortDescription: "Ethical security tool for tracking inputs and productivity compliance.",
    category: "Security",
    caseStudy: {
      problem: "Need for internal productivity tracking and compliance monitoring within a permission-based corporate environment.",
      solution: "Developed an event logger utilizing system hooks to securely record keyboard and mouse inputs.",
      architecture: "Client-side Python agent leveraging Pynput, pushing encrypted event data to a centralized MS SQL Server.",
      technologies: ["Python", "Pynput", "System Hooks", "SSMS"],
      security: "Strictly permission-based deployment, ensuring data is stored securely in SQL Server for compliance monitoring only.",
      challenges: "Capturing system-wide hooks without triggering false positives in local endpoint protection.",
      results: "Enhanced internal security awareness and established a reliable productivity tracking metric.",
      lessonsLearned: "Balancing deep system monitoring with user privacy and system performance overhead.",
      futureImprovements: "Add real-time dashboard analytics for HR/Admin compliance teams."
    }
  },
  {
    id: "ms-teams-chat",
    title: "Microsoft Teams-like Chat System",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    shortDescription: "Real-time messaging system with users, groups, presence, and file sharing.",
    category: "Full Stack",
    caseStudy: {
      problem: "Requirement for a centralized, real-time communication platform mimicking enterprise tools.",
      solution: "Developed a MERN stack application with WebSockets for real-time presence and messaging.",
      architecture: "React frontend communicating with a Node/Express backend, using Socket.IO for real-time duplex connections and MongoDB for persistence.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      security: "Implemented secure user authentication, room-based broadcast isolation, and secure file handling.",
      challenges: "Managing real-time state synchronization across multiple connected clients.",
      results: "Delivered a scalable chat architecture capable of instant notifications and group messaging.",
      lessonsLearned: "WebSocket connection lifecycle management and database indexing for fast message retrieval.",
      futureImprovements: "Implement End-to-End Encryption (E2EE) for secure corporate communications."
    }
  },
  {
    id: "network-health-monitor",
    title: "Network Health & Security Monitor",
    techStack: ["Python", "Socket Programming", "System Hooks"],
    shortDescription: "Monitors device status, bandwidth usage & unauthorized access attempts.",
    category: "Security",
    caseStudy: {
      problem: "Lack of real-time visibility into local network health and unauthorized access attempts.",
      solution: "Created a lightweight Python daemon using socket programming to monitor network metrics.",
      architecture: "Background service utilizing raw sockets and system hooks to intercept and log network traffic anomalies.",
      technologies: ["Python", "Sockets", "Networking APIs"],
      security: "Monitors for unauthorized access attempts, functioning as an entry-level localized IDS (Intrusion Detection System).",
      challenges: "Parsing low-level network packets without causing significant CPU overhead.",
      results: "Provided real-time bandwidth metrics and alerted administrators to abnormal connection patterns.",
      lessonsLearned: "Deep understanding of TCP/IP stack and low-level socket programming in Python.",
      futureImprovements: "Integrate with SIEM tools like Splunk or MS Sentinel via Syslog."
    }
  }
];
// Note: We have selected the top 5 most impactful projects for detailed case studies to maintain premium quality.
// The rest will be rendered as standard portfolio cards utilizing the same data structure later.