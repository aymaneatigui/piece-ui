import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:    "#09090b",
        surface:       "#111115",
        "surface-2":   "#18181d",
        border:        "#27272a",
        "border-subtle":"#1f1f23",
        "text-primary":  "#fafafa",
        "text-secondary":"#a1a1aa",
        "text-muted":    "#52525b",
        accent:          "#818cf8",
        "accent-dim":    "#6366f1",
        "accent-strong": "#a5b4fc",
        "accent-glow":   "rgba(99,102,241,0.2)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.18), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.06), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(99,102,241,0.25)",
        glow:      "0 0 24px rgba(99,102,241,0.3)",
        "glow-lg": "0 0 48px rgba(99,102,241,0.35)",
        card:      "0 1px 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "fade-up":  "fadeUp 0.5s ease-out forwards",
        "fade-in":  "fadeIn 0.4s ease-out forwards",
        "shimmer":  "shimmer 4s ease-in-out infinite",
        "marquee":  "marquee 20s linear infinite",
        "pulse-glow":"pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { left: "-200%" },
          "100%": { left: "200%" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(99,102,241,0.25)" },
          "50%":      { boxShadow: "0 0 30px rgba(99,102,241,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
