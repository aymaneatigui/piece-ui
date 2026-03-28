"use client";

import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children = "Button",
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = { sm: "px-4 py-1.5 text-xs", md: "px-5 py-2 text-sm", lg: "px-6 py-2.5 text-base" };
  const variants = {
    primary: "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white",
    ghost: "border border-[rgba(0,240,255,0.3)] bg-transparent text-[#00f0ff] hover:bg-[rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.5)]",
    danger: "border border-red-800 bg-red-950/50 text-red-400 hover:bg-red-900/50",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default function ButtonPreview() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="primary">Get Started</Button>
        <Button variant="ghost">Learn More</Button>
        <Button variant="danger">Delete</Button>
      </div>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}
