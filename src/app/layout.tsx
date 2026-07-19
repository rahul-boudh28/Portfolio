// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import AnimatedCursor from "@/components/ui/AnimatedCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";

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

export const metadata: Metadata = {
  title: "RahulOS | Senior Software Engineer & Security Analyst",
  description: "Premium portfolio combining scalable software architecture and proactive cyber defense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-text-main bg-bg selection:bg-primary selection:text-white"> 
        <LoadingScreen />
        <AnimatedCursor />
        
        <Navbar />
        {/* Global Command Palette Component */}
        <CommandPalette />
        
        <main className="flex-grow w-full max-w-[1440px] mx-auto overflow-hidden pt-16">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}