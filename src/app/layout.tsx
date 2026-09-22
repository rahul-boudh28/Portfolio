// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import AnimatedCursor from "@/components/ui/AnimatedCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";
import ClientSecurityGuard from "@/components/security/ClientSecurityGuard";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap", 
});

export const viewport: Viewport = {
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

// 100% Free Organic SEO Meta Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://rahul-boudh28.github.io/Portfolio/"),
  title: {
    default: "Rahul Boudh | Software Developer & Certified Ethical Hacker (CEH)",
    template: "%s | Rahul Boudh",
  },
  description:
    "Official portfolio of Rahul Boudh — Software Developer, RPA Engineer, and Certified Ethical Hacker (CEH). Specialized in Python automation, enterprise infrastructure security, and high-performance full-stack applications.",
  keywords: [
    "Rahul Boudh",
    "Rahul",
    "Rahul software developer",
    "Rahul ethical hacker",
    "Rahul Boudh Mumbai",
    "Software Developer",
    "Ethical Hacker",
    "Certified Ethical Hacker",
    "CEH",
    "RPA Developer",
    "Python Automation Specialist",
    "Cyber Security Analyst",
    "Vita Health RCM Developer",
    "Full Stack Engineer",
  ],
  authors: [{ name: "Rahul Boudh", url: "https://rahul-boudh28.github.io/Portfolio/" }],
  creator: "Rahul Boudh",
  publisher: "Rahul Boudh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rahul-boudh28.github.io/Portfolio/",
  },
  verification: {
    google: "vnc-xQA_2EXh-4D00Mceb2HQtT8Ld0zm2jIliMFYUBw",
  },
  openGraph: {
    type: "profile",
    firstName: "Rahul",
    lastName: "Boudh",
    username: "rahul-boudh28",
    gender: "male",
    title: "Rahul Boudh | Software Developer & Certified Ethical Hacker",
    description:
      "Explore the enterprise portfolio of Rahul Boudh: Production RPA systems, Ethical Hacking tools, and modern web architectures.",
    url: "https://rahul-boudh28.github.io/Portfolio/",
    siteName: "RahulOS",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Boudh | Software Developer & Ethical Hacker",
    description:
      "Production RPA bots, CEH cybersecurity projects, and enterprise full-stack development by Rahul Boudh.",
  },
};



// Structured Schema Markup for Google Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Boudh",
  alternateName: ["Rahul", "Rahul D. Boudh"],
  url: "https://rahul-boudh28.github.io/Portfolio/",
  jobTitle: ["Software Developer", "Certified Ethical Hacker (CEH)", "RPA Developer"],
  worksFor: {
    "@type": "Organization",
    name: "Vita Health RCM",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mumbai University",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Ethical Hacker (CEH)",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "EC-Council",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cybersecurity Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Google / Coursera",
      },
    },
  ],
  knowsAbout: [
    "Software Development",
    "Ethical Hacking",
    "Cyber Security",
    "Python",
    "Robotic Process Automation (RPA)",
    "Penetration Testing",
    "React",
    "Node.js",
    "Network Infrastructure Security",
    "Active Directory",
  ],
  sameAs: [
    "https://github.com/rahul-boudh28",
    "https://www.linkedin.com/in/rahul-boudh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Strict Content Security Policy (CSP) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://api.ipify.org https://formspree.io https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com; object-src 'none'; base-uri 'self';"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `/* [!] RAHULOS CLIENT HARDENED • CEH VERIFIED */`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-text-main bg-bg selection:bg-primary selection:text-white"> 
        <ClientSecurityGuard />
        <LoadingScreen />
        <AnimatedCursor />
        <Navbar />
        <CommandPalette />
        {/* Removed overflow-hidden so window.scrollTo smooth scrolling is never trapped */}
        <main className="flex-grow w-full max-w-[1440px] mx-auto pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}