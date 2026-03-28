import React from "react";

export interface CustomBtnProps {
  text: string;
  onClick: () => void;
  color?: string;
  bgColor?: string;
  padding?: string;
  icon?: React.ReactNode;
}

export const CustomBtn = ({
  text,
  onClick,
  color,
  bgColor,
  padding,
  icon,
}: CustomBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-(--border-color) bg-white/5 text-sm font-medium transition-all duration-200 hover:border-white/30 hover:text-(--white)"
      style={{
        color: color || "var(--light-gray)",
        backgroundColor: bgColor || "rgba(255,255,255,0.05)",
        padding: padding || "8px 20px",
      }}
    >
      {text}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};
