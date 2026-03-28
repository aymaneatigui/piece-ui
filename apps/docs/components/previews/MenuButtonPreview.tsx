"use client";

import React, { useState } from "react";

export default function MenuButtonPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>
      <p className="text-xs text-white/40">{isOpen ? "Click to close" : "Click to open"}</p>
    </div>
  );
}
