import React, { useCallback, useId, useState } from "react";

export type SelectOption =
  | string
  | {
      label: string;
      value?: string;
      disabled?: boolean;
    };

export interface CheckboxGroupProps {
  /** The list to render. Pass plain strings, or objects for per-item control. */
  options: SelectOption[];
  /** Controlled selection. Omit to let the component manage its own state. */
  value?: string[];
  /** Initial selection when uncontrolled. */
  defaultValue?: string[];
  /** Fires with the full next selection whenever it changes. */
  onChange?: (value: string[]) => void;
  /** Fires for the single item that was just toggled. */
  onSelect?: (value: string, checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Fill colour of a checked box. */
  accentColor?: string;
  /** Colour of the checkmark itself. */
  checkColor?: string;
  /** Border colour of an unchecked box. */
  borderColor?: string;
  /** Label colour. Defaults to inheriting from the parent. */
  labelColor?: string;
  fontFamily?: string;
  /** Disables every item at once. */
  disabled?: boolean;
  className?: string;
}

const SIZES = {
  sm: { box: "h-4 w-4 rounded", icon: 9, text: "text-[13px]", gap: "gap-2.5", row: "gap-2.5" },
  md: { box: "h-5 w-5 rounded-md", icon: 11, text: "text-[15px]", gap: "gap-3", row: "gap-3.5" },
  lg: { box: "h-6 w-6 rounded-md", icon: 13, text: "text-[17px]", gap: "gap-3.5", row: "gap-4" },
} as const;

const WEIGHTS = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const normalize = (option: SelectOption) =>
  typeof option === "string"
    ? { label: option, value: option, disabled: false }
    : { label: option.label, value: option.value ?? option.label, disabled: option.disabled ?? false };

export const CheckboxGroup = ({
  options,
  value,
  defaultValue = [],
  onChange,
  onSelect,
  size = "md",
  weight = "normal",
  accentColor = "#3b82f6",
  checkColor = "#ffffff",
  borderColor = "rgba(140,140,150,0.45)",
  labelColor = "inherit",
  fontFamily,
  disabled = false,
  className = "",
}: CheckboxGroupProps) => {
  const groupId = useId();
  const [internal, setInternal] = useState<string[]>(defaultValue);

  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;
  const s = SIZES[size];

  const toggle = useCallback(
    (optionValue: string) => {
      const checked = !selected.includes(optionValue);
      const next = checked
        ? [...selected, optionValue]
        : selected.filter((v) => v !== optionValue);

      if (!isControlled) setInternal(next);
      onSelect?.(optionValue, checked);
      onChange?.(next);
    },
    [selected, isControlled, onChange, onSelect],
  );

  return (
    <div
      role="group"
      className={`flex flex-col ${s.row} ${className}`}
      style={
        {
          fontFamily,
          "--pui-accent": accentColor,
          "--pui-check": checkColor,
          "--pui-border": borderColor,
          "--pui-label": labelColor,
        } as React.CSSProperties
      }
    >
      {options.map((option) => {
        const { label, value: optionValue, disabled: optionDisabled } = normalize(option);
        const isChecked = selected.includes(optionValue);
        const isDisabled = disabled || optionDisabled;

        return (
          <label
            key={optionValue}
            className={`inline-flex select-none items-center ${s.gap} ${
              isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            <input
              type="checkbox"
              id={`${groupId}-${optionValue}`}
              className="sr-only"
              checked={isChecked}
              disabled={isDisabled}
              onChange={() => toggle(optionValue)}
            />
            <span
              aria-hidden="true"
              className={`flex ${s.box} shrink-0 items-center justify-center border-2 transition-colors duration-150 ${
                isChecked
                  ? "border-[var(--pui-accent)] bg-[var(--pui-accent)]"
                  : "border-[var(--pui-border)] bg-transparent"
              }`}
            >
              {isChecked && (
                <svg
                  width={s.icon}
                  height={s.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--pui-check)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </span>
            <span className={`${s.text} ${WEIGHTS[weight]} text-[color:var(--pui-label)]`}>
              {label}
            </span>
          </label>
        );
      })}
    </div>
  );
};
