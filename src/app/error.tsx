// src/app/error.tsx
"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical System Fault:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div className="p-4 rounded-2xl border border-warning/40 bg-warning/10 text-warning mb-6">
        <AlertTriangle className="w-12 h-12" />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Error 500 • Exception Trap</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Execution Interrupted</h1>
      <p className="text-text-muted max-w-md text-sm mb-8">
        An unexpected runtime anomaly occurred during DOM reconciliation.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-surface border border-border hover:border-primary text-text-main hover:text-primary transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Retry Handshake</span>
      </button>
    </div>
  );
}