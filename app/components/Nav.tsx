"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(15,10,10,0.92)", backdropFilter: "blur(12px)", borderColor: "#27272a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-xl font-bold">
            <span style={{ color: "#ff1744" }}>Ziggy</span>
            <span style={{ color: "#8b5cf6" }}>HR</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Features</Link>
            <Link href="/pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Pricing</Link>
            <div className="relative group">
              <button className="text-sm hover:text-white transition-colors flex items-center gap-1" style={{ color: "#a1a1aa" }}>
                Compare
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto" style={{ background: "#18181b", borderColor: "#27272a" }}>
                <Link href="/vs/bamboohr" className="block px-4 py-2 text-sm hover:bg-white/5 transition-colors" style={{ color: "#a1a1aa" }}>vs BambooHR</Link>
                <Link href="/vs/rippling" className="block px-4 py-2 text-sm hover:bg-white/5 transition-colors" style={{ color: "#a1a1aa" }}>vs Rippling</Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/pricing" className="text-sm font-medium hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Sign in</Link>
            <Link href="/pricing" className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90" style={{ background: "#8b5cf6", color: "#fff" }}>
              Start free trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} style={{ color: "#a1a1aa" }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-3" style={{ borderColor: "#27272a" }}>
            <Link href="/features" className="block text-sm py-2" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>Features</Link>
            <Link href="/pricing" className="block text-sm py-2" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/vs/bamboohr" className="block text-sm py-2" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>vs BambooHR</Link>
            <Link href="/vs/rippling" className="block text-sm py-2" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>vs Rippling</Link>
            <Link href="/pricing" className="block text-sm font-semibold px-4 py-2 rounded-lg text-center mt-2" style={{ background: "#8b5cf6", color: "#fff" }} onClick={() => setOpen(false)}>
              Start free trial
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
