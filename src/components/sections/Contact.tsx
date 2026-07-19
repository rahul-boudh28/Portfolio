// src/components/sections/Contact.tsx
"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Turnstile from "react-turnstile";

export default function Contact() {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form State
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isSoc = mode === "soc";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("Please complete the security check.");
      return;
    }

    setStatus("loading");

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    // Safety check for development environment if key is missing
    if (!formspreeEndpoint || formspreeEndpoint === "https://formspree.io/f/your_form_id") {
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 1500);
      return;
    }

    // Gather form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
      // Formspree can automatically validate Turnstile if configured in their dashboard
      "cf-turnstile-response": turnstileToken, 
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        console.error("Formspree error response:", await response.text());
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {isSoc ? "Initiate Secure Transmission" : "Let's Build Together"}
          </h2>
          <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
            {isSoc 
              ? "Establish a secure connection for security roles, consulting, or threat intelligence sharing."
              : "Currently open for Software Developer opportunities. Reach out to discuss how I can bring value to your team."}
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl border shadow-lg"
          style={{
            backgroundColor: isSoc ? '#18181B' : '#FFFFFF',
            borderColor: isSoc ? '#27272A' : '#EAEAEA',
          }}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                <CheckCircle2 className="w-16 h-16 mb-4" style={{ color: 'var(--color-soc-success)' }} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
              <p style={{ color: isSoc ? 'var(--color-soc-muted)' : 'var(--color-workspace-muted)' }}>
                Thank you for reaching out. I will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 rounded-lg text-sm font-semibold border transition-colors hover:opacity-70"
                style={{ borderColor: isSoc ? '#27272A' : '#EAEAEA' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 opacity-70" /> Name
                  </label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-transparent transition-all"
                    style={{ 
                      borderColor: isSoc ? '#27272A' : '#EAEAEA',
                      color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-text)',
                    }}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 opacity-70" /> Email
                  </label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-transparent transition-all"
                    style={{ 
                      borderColor: isSoc ? '#27272A' : '#EAEAEA',
                      color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-text)',
                    }}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 opacity-70" /> Message
                </label>
                <textarea 
                  name="message"
                  required
                  disabled={status === "loading"}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-transparent transition-all resize-none"
                  style={{ 
                    borderColor: isSoc ? '#27272A' : '#EAEAEA',
                    color: isSoc ? 'var(--color-soc-text)' : 'var(--color-workspace-text)',
                  }}
                  placeholder="How can we collaborate?"
                />
              </div>

              {/* Security Check (Turnstile) */}
              <div className="flex justify-center my-4">
                <Turnstile 
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} 
                  onVerify={(token) => setTurnstileToken(token)}
                  theme={isSoc ? "dark" : "light"}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-500 justify-center">
                  <AlertCircle className="w-4 h-4" /> 
                  Something went wrong. Please check your network and try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading" || !turnstileToken}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  backgroundColor: isSoc ? 'var(--color-soc-accent)' : 'var(--color-workspace-accent)',
                  color: '#FFFFFF'
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> {isSoc ? "Send Secure Message" : "Send Message"}
                  </>
                )}
              </button>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}