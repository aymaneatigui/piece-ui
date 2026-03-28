"use client";

import React from "react";

export default function Line2Preview() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative w-full h-48 bg-zinc-950 rounded-xl overflow-hidden border border-white/5 flex items-center justify-end">
        {/* Simulated right decorative line */}
        <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
        <div className="mr-24 flex flex-col gap-2">
          <div className="h-3 w-48 rounded bg-white/10" />
          <div className="h-2 w-32 rounded bg-white/5" />
          <div className="h-2 w-40 rounded bg-white/5" />
        </div>
      </div>
      <p className="text-xs text-white/30 text-center">Right decorative vertical line — mirrors Line1 for symmetrical framing</p>
    </div>
  );
}
