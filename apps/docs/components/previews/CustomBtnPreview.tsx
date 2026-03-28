"use client";

import React from "react";

function CustomBtn({ text, onClick, color, bgColor, padding, icon }: {
  text: string;
  onClick: () => void;
  color?: string;
  bgColor?: string;
  padding?: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 text-sm font-medium transition-all duration-200 hover:border-white/30"
      style={{ color: color || "rgba(255,255,255,0.7)", backgroundColor: bgColor || "rgba(255,255,255,0.05)", padding: padding || "8px 20px" }}
    >
      {text}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
}

export default function CustomBtnPreview() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <CustomBtn text="Default Style" onClick={() => {}} />
      <CustomBtn text="Cyan Accent" onClick={() => {}} color="#00f0ff" bgColor="rgba(0,240,255,0.08)" padding="10px 22px" />
      <CustomBtn
        text="With Icon"
        onClick={() => {}}
        color="rgba(255,255,255,0.8)"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        }
      />
    </div>
  );
}
