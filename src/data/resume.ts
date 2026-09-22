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

// ALL 21 PROJECTS FROM YOUR RESUME
export const projectsData: Project[] = [
  {
    id: "break-tracking-system",
    title: "Break Tracking System",
    techStack: ["Python", "RPA", "Email Automation"],
    shortDescription: "Employee break tracking with User / TL / Admin dashboards plus auto reporting & alerts.",
    category: "Automation",
    caseStudy: {
      problem: "Lack of centralized tracking and automated accountability for employee breaks across operational teams.",
      solution: "Developed an automated break tracking system featuring role-based dashboards and automated alerting.",
      architecture: "Python client backend with email dispatch hooks communicating with administrative control dashboards.",
      technologies: ["Python", "RPA", "SMTP Automation"],
      security: "Role-based authorization between User, Team Lead, and Admin access levels.",
      challenges: "Handling real-time timer synchronization and auto-dispatching notification emails without latency.",
      results: "Significantly streamlined operational oversight and provided verifiable break compliance records.",
      lessonsLearned: "State management in multi-tiered desktop automation workflows.",
      futureImprovements: "Integrate with Slack/Teams webhooks for direct chat notifications."
    }
  },
  {
    id: "website-blocker",
    title: "Website Blocker",
    techStack: ["Python", "System Control"],
    shortDescription: "Real-time website blocking, browsing restriction, and activity monitoring.",
    category: "Security",
    caseStudy: {
      problem: "Need for endpoint-level browsing restrictions to prevent non-compliant internet activity.",
      solution: "Engineered a low-level Python daemon that modifies host resolution to block prohibited domains in real time.",
      architecture: "OS-level host file and socket interceptor running as a background service.",
      technologies: ["Python", "OS Libraries", "System Control"],
      security: "Requires elevated administrative privileges to modify system networking rules securely.",
      challenges: "Preventing process termination by non-administrative users.",
      results: "Successfully blocked unauthorized domains without requiring heavy proxy server software.",
      lessonsLearned: "Direct manipulation of OS host resolution files and permission elevation.",
      futureImprovements: "Add dynamic domain blocking from a cloud blacklist API."
    }
  },
  {
    id: "reconciliation-tool",
    title: "Reconciliation Tool (ERA + BAI)",
    techStack: ["Flask", "Python", "Parsing Logic"],
    shortDescription: "Automated reconciliation for U.S. Medical Billing with reporting & validation.",
    category: "Full Stack",
    caseStudy: {
      problem: "Manual reconciliation between Electronic Remittance Advice (ERA) and BAI banking files was slow and prone to human error.",
      solution: "Built an automated parser and reconciliation web application in Flask that matches payments and reports discrepancies.",
      architecture: "Flask web server with file parsing engines comparing financial remittance lines against bank records.",
      technologies: ["Flask", "Python", "File Parsers", "HTML/CSS"],
      security: "Enforced secure data sanitization to handle sensitive financial records and PHI/PII data securely.",
      challenges: "Handling complex, non-standard BAI file layouts and mismatched payment reference keys.",
      results: "Automated hours of manual financial validation into a one-click reconciliation workflow.",
      lessonsLearned: "Financial data normalization and validation rules in U.S. healthcare billing.",
      futureImprovements: "Add automated discrepancy resolution suggestions via rule-based AI."
    }
  },
  {
    id: "ms-teams-chat",
    title: "Microsoft Teams-like Chat System",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    shortDescription: "Real-time messaging system with users, groups, presence, file sharing & notifications.",
    category: "Full Stack",
    caseStudy: {
      problem: "Need for an internal, self-hosted real-time enterprise communication tool.",
      solution: "Developed a full-stack MERN collaboration platform with WebSocket duplex connectivity for instant messaging.",
      architecture: "React SPA connected to Express/Node.js cluster with Socket.IO channels and MongoDB persistence.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
      security: "JWT-based session authentication, room isolation, and sanitized file uploads.",
      challenges: "Synchronizing user presence states (Online, Away, Busy) reliably across socket disconnects.",
      results: "Supported instant messaging, group conversations, and attachments with sub-50ms latency.",
      lessonsLearned: "WebSocket connection lifecycles and horizontal event scaling.",
      futureImprovements: "Implement End-to-End Encryption (E2EE) on all message payloads."
    }
  },
  {
    id: "ai-ar-object-assistant",
    title: "AI-AR Object Assistant",
    techStack: ["Python", "Node API", "ARCore/ARKit", "Vision Models"],
    shortDescription: "AR application that detects real-world objects and displays AI-generated information overlays.",
    category: "AI/ML",
    caseStudy: {
      problem: "Identifying physical equipment and displaying technical schematics requires manual searching.",
      solution: "Created an augmented reality assistant that detects real objects and projects real-time computer vision overlays.",
      architecture: "Mobile AR interface communicating with a backend computer vision API for real-time inference.",
      technologies: ["Python", "Node API", "Vision Models", "AR Frameworks"],
      security: "Secure API endpoints with rate limiting to prevent vision inference exhaustion.",
      challenges: "Achieving low-latency frame analysis to maintain smooth AR tracking.",
      results: "Seamlessly detects physical objects and projects context-sensitive telemetry onto the screen.",
      lessonsLearned: "Optimizing vision inference pipelines for edge and mobile clients.",
      futureImprovements: "On-device model quantization using TensorRT or CoreML."
    }
  },
  {
    id: "eob-excel-converter",
    title: "EOB → Excel Converter",
    techStack: ["Python", "PDF Parsing", "Excel Automation"],
    shortDescription: "Converts Explanation of Benefits (EOB) PDFs into structured Excel format for billing operations.",
    category: "Automation",
    caseStudy: {
      problem: "Billing teams had to manually re-type claim numbers, co-pays, and allowed amounts from multi-page EOB PDFs.",
      solution: "Engineered a Python automation script that parses structured PDF tables and outputs formatted Excel workbooks.",
      architecture: "CLI and desktop tool leveraging PyPDF/pdfplumber regex parsing to extract financial tables into openpyxl.",
      technologies: ["Python", "PDF Libraries", "openpyxl", "Excel Automation"],
      security: "Local execution ensures no PHI (Protected Health Information) leaves the corporate perimeter.",
      challenges: "Handling scanned, misaligned, and multi-column tabular PDF variations.",
      results: "Reduced multi-hour manual data entry tasks into 10-second automated conversions.",
      lessonsLearned: "Regex coordinate-based PDF text extraction techniques.",
      futureImprovements: "Integrate OCR fallback for low-quality physical document scans."
    }
  },
  {
    id: "production-rpa-bots",
    title: "Production RPA Bots",
    techStack: ["Python", "Selenium", "Undetected Chrome Driver", "Web Manager", "AI Logic"],
    shortDescription: "Automates insurance claim checks and correction tasks inside Prognocis & Luna avoiding bot controls.",
    category: "Automation",
    caseStudy: {
      problem: "High manual workload and repetitive claim status verification inside Prognocis & Luna healthcare portals.",
      solution: "Developed human-like RPA bots to automate status checks, data fetching, and corrections while evading bot detection.",
      architecture: "Python automated browser orchestration using Undetected Chrome Driver and human-like interaction algorithms.",
      technologies: ["Python", "Selenium", "Undetected Chrome Driver", "AI Logic"],
      security: "Maintains session isolation, credential encryption, and respects portal security policies.",
      challenges: "Bypassing aggressive Cloudflare/Akamai bot detection mechanisms on healthcare portals.",
      results: "Maximized production speed and accuracy while eliminating hundreds of hours of manual portal navigation.",
      lessonsLearned: "Browser fingerprint spoofing and dynamic human delay modeling.",
      futureImprovements: "Centralized orchestrator dashboard to monitor bot farm execution statuses."
    }
  },
  {
    id: "custom-file-encryption",
    title: "Custom File Encryption & Security Tool",
    techStack: ["Python", "Cryptography", "OS Libraries"],
    shortDescription: "Ethical security utility for file locking, encryption, and penetration-testing awareness.",
    category: "Security",
    caseStudy: {
      problem: "Demonstrating data-at-rest vulnerability risks and the importance of cryptographic hygiene.",
      solution: "Built a Python-based file locking and encryption tool using AES symmetric cryptography for ethical security exercises.",
      architecture: "Local desktop application utilizing standard cryptographic libraries to encrypt/decrypt directories.",
      technologies: ["Python", "Cryptography", "OS Libraries"],
      security: "Implements AES-256 in CBC/GCM mode with cryptographically secure key derivation (PBKDF2).",
      challenges: "Secure in-memory key handling and ensuring zero recovery without proper secret passphrase.",
      results: "Provided a valuable hands-on utility for penetration testing awareness and file protection.",
      lessonsLearned: "Applied cryptographic primitives and key schedule security.",
      futureImprovements: "Add support for asymmetric RSA public-key sharing."
    }
  },
  {
    id: "network-health-monitor",
    title: "Network Health & Security Monitor",
    techStack: ["Python", "Socket Programming", "System Hooks"],
    shortDescription: "Monitors device status, bandwidth usage & unauthorized access attempts.",
    category: "Security",
    caseStudy: {
      problem: "Lack of real-time visibility into unauthorized network connection attempts on local endpoints.",
      solution: "Engineered a socket-based background monitor that tracks active socket bindings, bandwidth consumption, and unauthorized connections.",
      architecture: "Low-level socket daemon listening for abnormal ingress/egress connection spikes.",
      technologies: ["Python", "Socket Programming", "System Hooks"],
      security: "Operates as a localized intrusion detection agent without modifying network packets.",
      challenges: "Filtering normal background OS traffic from genuine connection anomalies.",
      results: "Provided network visibility and immediate alert telemetry upon unauthorized port scans.",
      lessonsLearned: "TCP/IP socket states, network packet headers, and system telemetry hooks.",
      futureImprovements: "Syslog integration with SIEM platforms (Splunk / MS Sentinel)."
    }
  },
  {
    id: "desktop-shortcut-launcher",
    title: "Desktop Automation Shortcut Launcher",
    techStack: ["Python", "UI Automation"],
    shortDescription: "Workflow automation tool for launching scripts/apps with voice or hotkeys.",
    category: "Automation",
    caseStudy: {
      problem: "Repetitive daily task initialization required navigating scattered directories and launching commands manually.",
      solution: "Created a desktop quick-launcher triggered via hotkeys and voice recognition to automate application workflows.",
      architecture: "Global hotkey listener hooking into system process initialization scripts.",
      technologies: ["Python", "UI Automation", "Speech Recognition"],
      security: "Restricted command execution to pre-approved script whitelists to prevent command injection.",
      challenges: "Handling background voice input without excessive CPU consumption.",
      results: "Streamlined daily workflow launch times by over 70%.",
      lessonsLearned: "Desktop process automation and global operating system hooks.",
      futureImprovements: "Cross-platform Linux and macOS porting."
    }
  },
  {
    id: "ecommerce-web-app",
    title: "E-Commerce Web App",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    shortDescription: "Shopping platform with products catalog, shopping cart, and user management system.",
    category: "Full Stack",
    caseStudy: {
      problem: "Creating a reliable, lightweight shopping portal with transactional database integrity.",
      solution: "Architected a classic full-stack PHP/MySQL application with cart persistence, product cataloging, and checkout logic.",
      architecture: "MVC PHP architecture with normalized relational MySQL schema.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      security: "Prepared SQL statements to eliminate SQL Injection (SQLi) and password hashing with bcrypt.",
      challenges: "Ensuring accurate inventory updates under simulated concurrent checkouts.",
      results: "Fully functional e-commerce workflow with secure order processing.",
      lessonsLearned: "Session management, relational database indexing, and web application attack mitigation.",
      futureImprovements: "Payment gateway integration with Stripe / PayPal APIs."
    }
  },
  {
    id: "jarvis-shree-assistants",
    title: "Jarvis & Shree AI Assistants",
    techStack: ["Python", "AI/ML", "Vision APIs"],
    shortDescription: "Voice-based AI assistants for PC automation plus AI image generation capabilities.",
    category: "AI/ML",
    caseStudy: {
      problem: "Executing computer operations hands-free while interfacing with generative vision models.",
      solution: "Developed dual voice assistants capable of parsing system commands and generating digital imagery via AI APIs.",
      architecture: "Speech-to-text pipeline coupled with system automation commands and REST API connections to generative models.",
      technologies: ["Python", "AI/ML", "Vision APIs", "Pyttsx3"],
      security: "Secured external API keys with environment isolation and restricted OS execution boundaries.",
      challenges: "Low-latency voice recognition and handling microphone background noise.",
      results: "Hands-free PC automation and creative image generation via natural language queries.",
      lessonsLearned: "Integration of modern generative APIs into local process orchestration.",
      futureImprovements: "Local offline LLM integration via Ollama."
    }
  },
  {
    id: "chatgpt-clone-web",
    title: "ChatGPT-like Web Interface",
    techStack: ["NodeJS", "WebSocket", "API"],
    shortDescription: "AI conversational web interface featuring streaming chat responses similar to ChatGPT.",
    category: "Full Stack",
    caseStudy: {
      problem: "Standard HTTP request-response cycles feel sluggish for long-form generative AI responses.",
      solution: "Engineered a responsive chat UI that streams tokens in real time over WebSockets.",
      architecture: "Node.js proxy streaming chunked response tokens directly to a dynamic browser chat interface.",
      technologies: ["Node.js", "WebSockets", "REST APIs", "JavaScript"],
      security: "Rate limiting per IP address and sanitization of Markdown outputs against XSS.",
      challenges: "Parsing markdown and code blocks smoothly as streamed text chunks arrive asynchronously.",
      results: "Delivered a lightning-fast conversational experience with zero UI freezing.",
      lessonsLearned: "Server-Sent Events (SSE) versus WebSockets for token streaming.",
      futureImprovements: "Add local session conversation history via IndexedDB."
    }
  },
  {
    id: "virtual-mouse-ai",
    title: "Virtual Mouse using AI Gesture Control",
    techStack: ["Python", "OpenCV", "MediaPipe", "AI Vision"],
    shortDescription: "Hand-gesture controlled mouse system replacing physical hardware interaction.",
    category: "AI/ML",
    caseStudy: {
      problem: "Controlling presentation screens or computers without physical mouse or trackpad hardware.",
      solution: "Built a computer vision system that tracks hand landmarks in real time and maps finger pinch gestures to cursor movements.",
      architecture: "Webcam video frame processing pipeline via OpenCV and MediaPipe landmark detection feeding OS cursor coordinates.",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      security: "Operates completely locally; video frames are processed in memory and never saved or transmitted.",
      challenges: "Smoothing cursor jitter caused by hand tremors while maintaining responsive clicking.",
      results: "Accurate, touch-free cursor navigation and left/right click actuation.",
      lessonsLearned: "Coordinate normalization, frame rate smoothing, and spatial computer vision models.",
      futureImprovements: "Multi-hand gesture shortcuts for volume and application switching."
    }
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    techStack: ["Python", "OpenCV", "face-encodings"],
    shortDescription: "Identity recognition system for automated attendance tracking and security entry.",
    category: "AI/ML",
    caseStudy: {
      problem: "Manual attendance logging and RFID card sharing allow proxy attendance and entry breaches.",
      solution: "Created an automated face recognition system that encodes authorized faces and logs timestamps automatically.",
      architecture: "OpenCV face detection pipeline generating 128-dimensional biometric embeddings matched against a local database.",
      technologies: ["Python", "OpenCV", "dlib", "face_recognition"],
      security: "Biometric encodings are stored as hashed vectors rather than raw photographs to protect identity privacy.",
      challenges: "Maintaining high recognition accuracy under variable ambient lighting conditions.",
      results: "Zero-contact, automated verification logging attendance in under 1 second.",
      lessonsLearned: "Euclidean distance matching on face encodings and biometric data security.",
      futureImprovements: "Liveness detection to prevent 2D photo spoofing attacks."
    }
  },
  {
    id: "secure-pdf-editor",
    title: "Secure PDF Editor",
    techStack: ["Python", "Flask", "PDF Libraries"],
    shortDescription: "Merge, split, and redact PDFs ensuring data protection based on healthcare RCM standards.",
    category: "Security",
    caseStudy: {
      problem: "Online PDF editors risk leaking sensitive healthcare documents containing PHI/PII data to third-party servers.",
      solution: "Engineered a local, secure web utility to merge, split, and permanently redact sensitive fields from PDFs.",
      architecture: "Local Flask utility processing document binary streams without cloud transmission.",
      technologies: ["Python", "Flask", "PyPDF", "ReportLab"],
      security: "True document redaction removing underlying vector text, not just drawing black rectangles.",
      challenges: "Ensuring redacted metadata and hidden layers cannot be reverse-engineered.",
      results: "Compliant, HIPAA-safe PDF editing suite for internal team operations.",
      lessonsLearned: "PDF document structure, metadata sanitization, and compliance constraints.",
      futureImprovements: "Automated regex identification and redaction of SSNs and Claim IDs."
    }
  },
  {
    id: "user-activity-logger",
    title: "User Activity Tracking & Event Logger",
    techStack: ["Python", "Pynput", "System Hooks", "MS SQL Server"],
    shortDescription: "Ethical security tool for tracking inputs and compliance monitoring stored securely into SQL Server.",
    category: "Security",
    caseStudy: {
      problem: "Need for internal productivity tracking and compliance monitoring within a permission-based corporate environment.",
      solution: "Developed an event logger utilizing system hooks to securely record keyboard and mouse inputs into MS SQL Server.",
      architecture: "Client-side Python agent leveraging Pynput, pushing encrypted event logs to centralized SSMS.",
      technologies: ["Python", "Pynput", "System Hooks", "MS SQL Server"],
      security: "Permission-based deployment with encrypted network database connections to enforce organizational audit integrity.",
      challenges: "Capturing system-wide hooks without triggering false positives in local endpoint protection.",
      results: "Enhanced security awareness and provided reliable productivity metrics.",
      lessonsLearned: "Balancing deep system monitoring with performance overhead.",
      futureImprovements: "Real-time visual dashboard analytics for administrative review."
    }
  },
  {
    id: "inspect-to-excel",
    title: "Inspect-to-Excel Tool",
    techStack: ["Python", "PyQt6", "MS Excel Automation"],
    shortDescription: "Desktop tool converting inspection data into formatted Excel sheets with secure login and DB access.",
    category: "Automation",
    caseStudy: {
      problem: "Field inspection logs stored in raw databases took hours to format manually for client deliverables.",
      solution: "Built a modern PyQt6 desktop application with secure user authentication that outputs formatted Excel spreadsheets with one click.",
      architecture: "PyQt6 GUI frontend interacting with database queries and openpyxl formatting engines.",
      technologies: ["Python", "PyQt6", "openpyxl", "SQL"],
      security: "Encrypted credential login and role-based database read access.",
      challenges: "Designing an intuitive, responsive GUI for non-technical operations staff.",
      results: "Eliminated manual Excel compilation, delivering formatted inspection workbooks instantly.",
      lessonsLearned: "Desktop GUI event loops and Excel style automation.",
      futureImprovements: "Direct export to PDF report summaries."
    }
  },
  {
    id: "uhc-claim-bot",
    title: "UHC Claim Status & Payment Bot",
    techStack: ["Python", "Undetected Chrome Driver", "Excel", "DB Integration"],
    shortDescription: "Automated UHC portal bot fetching claim status & payment details using bot-resistant browser automation.",
    category: "Automation",
    caseStudy: {
      problem: "Manual retrieval of claim statuses and payment details from the UnitedHealthcare (UHC) portal was time-consuming.",
      solution: "Built an automated UHC portal bot that fetches claims, downloads documents, and exports records into Excel and database tables.",
      architecture: "Headless Chrome instance utilizing Undetected Chrome Driver with direct database and Excel export pipelines.",
      technologies: ["Python", "Undetected Chrome Driver", "Web Automation", "Excel", "SQL"],
      security: "Utilized secure authenticated sessions and human-like delays to prevent account lockouts.",
      challenges: "Handling dynamic portal DOM updates and reliable document download verification.",
      results: "Automated the entire UHC claim review lifecycle, eliminating manual lookup bottlenecks.",
      lessonsLearned: "Robust error recovery and session retry strategies in production automation.",
      futureImprovements: "Multi-threaded worker scaling for concurrent payer portals."
    }
  },
  {
    id: "credentialing-website",
    title: "Credentialing Website",
    techStack: ["HTML5", "CSS", "JS", "Python", "Flask", "Gunicorn"],
    shortDescription: "Role-based web application for managing provider credentialing, payer enrollment, and document verification.",
    category: "Full Stack",
    caseStudy: {
      problem: "Healthcare provider credentialing across multiple insurance networks was tracked via scattered spreadsheets.",
      solution: "Architected a role-based web portal for tracking provider licenses, payer enrollments, document verification, and statuses.",
      architecture: "Flask backend served via Gunicorn with role-based access control and relational tracking schema.",
      technologies: ["HTML5", "CSS", "JavaScript", "Python", "Flask", "Gunicorn"],
      security: "Strict RBAC (Role-Based Access Control), document encryption, and audit logs for compliance.",
      challenges: "Structuring complex many-to-many relationships between healthcare providers and insurance payers.",
      results: "Centralized credentialing operations, drastically speeding up provider onboarding.",
      lessonsLearned: "Enterprise healthcare credentialing workflows and Gunicorn WSGI deployment.",
      futureImprovements: "Automated expiration reminder notifications for provider medical licenses."
    }
  },
  {
    id: "eob-to-835-converter",
    title: "EOB-to-835 Converter",
    techStack: ["Python", "ANSI X12", "Data Parsing"],
    shortDescription: "Converts EOB documents into ANSI X12 835 ERA files for automated healthcare posting and reconciliation.",
    category: "Automation",
    caseStudy: {
      problem: "Paper/PDF Explanation of Benefits (EOB) cannot be automatically posted into billing EHR systems without EDI 835 ERA files.",
      solution: "Engineered a parser that extracts payment and claim data from EOB documents and converts them into standardized ANSI X12 835 electronic formats.",
      architecture: "Python data parsing engine mapping healthcare claim lines to strictly formatted EDI X12 loops and segments.",
      technologies: ["Python", "EDI Parsing", "ANSI X12 835 Standard"],
      security: "Guarantees strict HIPAA EDI compliance and financial balance verification before file generation.",
      challenges: "Adhering to strict EDI segment delimiter rules and balancing payment transaction totals.",
      results: "Enabled automatic posting of non-electronic payments into EHR billing software.",
      lessonsLearned: "Deep expertise in ANSI X12 healthcare transaction sets (835 ERA and 837 claims).",
      futureImprovements: "GUI validator checking EDI syntax compliance before export."
    }
  }
];