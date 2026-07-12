import React, { useCallback, useState } from "react";

export type ChipOption =
  | string
  | {
      label: string;
      value?: string;
      disabled?: boolean;
    };

export interface ChipGroupProps {
  /** The list to render. Pass plain strings, or objects for per-item control. */
  options: ChipOption[];
  /** Controlled selection. Omit to let the component manage its own state. */
  value?: string[];
  /** Initial selection when uncontrolled. */
  defaultValue?: string[];
  /** Fires with the full next selection whenever it changes. */
  onChange?: (value: string[]) => void;
  /** Fires for the single chip that was just toggled. */
  onSelect?: (value: string, selected: boolean) => void;
  /** Set false to behave like a radio group — only one chip at a time. */
  multiple?: boolean;
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Background of a selected chip. */
  accentColor?: string;
  /** Label colour of a selected chip. */
  selectedLabelColor?: string;
  /** Background of an unselected chip. */
  chipColor?: string;
  /** Border colour of an unselected chip. */
  borderColor?: string;
  /** Label colour of an unselected chip. Defaults to inheriting from the parent. */
  labelColor?: string;
  fontFamily?: string;
  /** Disables every chip at once. */
  disabled?: boolean;
  className?: string;
}

const SIZES = {
  sm: { chip: "px-3.5 py-1.5 text-[13px]", gap: "gap-2" },
  md: { chip: "px-[18px] py-2.5 text-[15px]", gap: "gap-2.5" },
  lg: { chip: "px-5 py-3 text-base", gap: "gap-3" },
} as const;

const WEIGHTS = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const normalize = (option: ChipOption) =>
  typeof option === "string"
    ? { label: option, value: option, disabled: false }
    : { label: option.label, value: option.value ?? option.label, disabled: option.disabled ?? false };

export const ChipGroup = ({
  options,
  value,
  defaultValue = [],
  onChange,
  onSelect,
  multiple = true,
  size = "md",
  weight = "semibold",
  accentColor = "#3b82f6",
  selectedLabelColor = "#ffffff",
  chipColor = "transparent",
  borderColor = "rgba(140,140,150,0.35)",
  labelColor = "inherit",
  fontFamily,
  disabled = false,
  className = "",
}: ChipGroupProps) => {
  const [internal, setInternal] = useState<string[]>(defaultValue);

  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;
  const s = SIZES[size];

  const toggle = useCallback(
    (optionValue: string) => {
      const isSelected = selected.includes(optionValue);
      let next: string[];

      if (!multiple) {
        next = isSelected ? [] : [optionValue];
      } else {
        next = isSelected
          ? selected.filter((v) => v !== optionValue)
          : [...selected, optionValue];
      }

      if (!isControlled) setInternal(next);
      onSelect?.(optionValue, !isSelected);
      onChange?.(next);
    },
    [selected, multiple, isControlled, onChange, onSelect],
  );

  return (
    <div
      role="group"
      className={`flex flex-wrap ${s.gap} ${className}`}
      style={
        {
          fontFamily,
          "--pui-accent": accentColor,
          "--pui-selected-label": selectedLabelColor,
          "--pui-chip": chipColor,
          "--pui-border": borderColor,
          "--pui-label": labelColor,
        } as React.CSSProperties
      }
    >
      {options.map((option) => {
        const { label, value: optionValue, disabled: optionDisabled } = normalize(option);
        const isSelected = selected.includes(optionValue);
        const isDisabled = disabled || optionDisabled;

        return (
          <button
            key={optionValue}
            type="button"
            role="checkbox"
            aria-checked={isSelected}
            disabled={isDisabled}
            onClick={() => toggle(optionValue)}
            className={`rounded-full border transition-all duration-150 ${s.chip} ${
              WEIGHTS[weight]
            } ${
              isSelected
                ? "border-[var(--pui-accent)] bg-[var(--pui-accent)] text-[color:var(--pui-selected-label)]"
                : "border-[var(--pui-border)] bg-[var(--pui-chip)] text-[color:var(--pui-label)]"
            } ${
              isDisabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:opacity-85"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
