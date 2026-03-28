"use client";

import React from "react";

export default function NoiseBackgroundPreview() {
  return (
    <div className="w-full max-w-md">
      <div className="relative overflow-hidden rounded-xl bg-zinc-900 p-8">
        {/* Simulated noise overlay using CSS */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            opacity: 0.06,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "100px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-2">Section with texture</h3>
          <p className="text-sm text-white/50">Content sits on top of the noise layer. The subtle grain adds depth without distracting from the content.</p>
        </div>
      </div>
      <p className="text-xs text-white/30 text-center mt-3">Subtle noise texture overlay</p>
    </div>
  );
}
