"use client";

import React from "react";

export default function SectionWrapperPreview() {
  return (
    <div className="w-full">
      <div className="border border-dashed border-[#00f0ff]/30 rounded-xl p-1">
        <div className="text-[10px] font-mono text-[#00f0ff]/50 px-2 pb-1">SectionWrapper</div>
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 py-6 px-4">
          <div className="h-5 w-32 rounded bg-white/10" />
          <div className="h-3 w-full rounded bg-white/5" />
          <div className="h-3 w-4/5 rounded bg-white/5" />
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
            <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
          </div>
        </section>
      </div>
      <p className="text-xs text-white/30 text-center mt-3">Consistent max-width and padding across breakpoints</p>
    </div>
  );
}
