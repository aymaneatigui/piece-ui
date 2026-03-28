"use client";

import React from "react";

export default function SectionHeaderPreview() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-baseline">
          <span className="text-xs text-white/40">02</span>
          <h2 className="text-2xl font-semibold text-white ml-1">Recent Projects</h2>
        </div>
        <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-opacity hover:opacity-100 whitespace-nowrap">
          All Projects
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <p className="mt-2 text-sm text-white/40">A selection of work I've shipped recently.</p>
    </div>
  );
}
