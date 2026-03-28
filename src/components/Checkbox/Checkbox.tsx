import React from "react";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const Checkbox = ({ checked, onChange, disabled = false }: CheckboxProps) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    disabled={disabled}
    onClick={(e) => {
      e.stopPropagation();
      onChange();
    }}
    className={`flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded border transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed ${
      checked
        ? "border-blue-700 bg-blue-950/50"
        : "border-zinc-700 bg-zinc-900 hover:border-zinc-500"
    }`}
  >
    {checked && (
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )}
  </button>
);
