"use client";

import React, { useState } from "react";

function Checkbox({ checked, onChange, disabled = false, label }: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded border transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed ${
          checked ? "border-blue-700 bg-blue-950/50" : "border-zinc-700 bg-zinc-900 hover:border-zinc-500"
        }`}
      >
        {checked && (
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      {label && <span className="text-sm text-white/70">{label}</span>}
    </label>
  );
}

export default function CheckboxPreview() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <Checkbox checked={checked1} onChange={() => setChecked1(!checked1)} label="I agree to the terms" />
      <Checkbox checked={checked2} onChange={() => setChecked2(!checked2)} label="Subscribe to newsletter" />
      <Checkbox checked={false} onChange={() => {}} disabled label="Disabled option" />
    </div>
  );
}
