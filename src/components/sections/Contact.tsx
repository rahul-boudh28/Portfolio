// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Turnstile from "react-turnstile";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("Please complete the security check.");
      return;
    }

    setStatus("loading");
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint || formspreeEndpoint === "https://formspree.io/f/your_form_id") {
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 1500);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
      "cf-turnstile-response": turnstileToken, 
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-surface/50 mb-6 mx-auto" style={{ borderColor: 'var(--color-border)' }}>
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">Module 06: Comms</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Initiate Secure Transmission</h2>
          <p className="text-text-muted text-lg">
            Establish a secure connection for software development roles, security consulting, or threat intelligence sharing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-10 rounded-2xl border bg-card shadow-2xl relative overflow-hidden"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none" />

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center relative z-10">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                <CheckCircle2 className="w-20 h-20 mb-6 text-success" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 text-white">Message Transmitted</h3>
              <p className="text-text-muted mb-8 max-w-sm">
                Secure connection closed. I have received your data payload and will respond shortly.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-6 py-3 rounded-lg text-sm font-semibold border bg-surface hover:bg-bg transition-colors text-white"
                style={{ borderColor: 'var(--color-border)' }}
              >
                Send Another Payload
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                    <User className="w-3 h-3" /> Identity
                  </label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border bg-surface text-white placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    style={{ borderColor: 'var(--color-border)' }}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Return Address
                  </label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border bg-surface text-white placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    style={{ borderColor: 'var(--color-border)' }}
                    placeholder="john@enterprise.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" /> Encrypted Payload
                </label>
                <textarea 
                  name="message"
                  required
                  disabled={status === "loading"}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border bg-surface text-white placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  style={{ borderColor: 'var(--color-border)' }}
                  placeholder="Enter your message parameters here..."
                />
              </div>

              {/* Turnstile */}
              <div className="flex justify-center py-2">
                <Turnstile 
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} 
                  onVerify={(token) => setTurnstileToken(token)}
                  theme="dark"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-danger justify-center bg-danger/10 p-3 rounded-lg border border-danger/20">
                  <AlertCircle className="w-4 h-4" /> 
                  Transmission failed. Check your network or contact me directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !turnstileToken}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-primary text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Encrypting & Transmitting...</>
                ) : (
                  <><Send className="w-4 h-4" /> Transmit Payload</>
                )}
              </button>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}