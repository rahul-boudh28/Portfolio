// src/app/not-found.tsx
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div className="p-4 rounded-2xl border border-danger/40 bg-danger/10 text-danger mb-6">
        <ShieldAlert className="w-12 h-12 animate-pulse" />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Error 404 • Threat Containment</span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">Node Not Found</h1>
      <p className="text-text-muted max-w-md text-sm sm:text-base mb-8">
        The requested perimeter coordinate does not exist or has been relocated behind access control.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Grid</span>
      </Link>
    </div>
  );
}