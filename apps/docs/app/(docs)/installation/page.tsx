import type { Metadata } from "next";
import CodeBlock from "@/components/ui/CodeBlock";
import { TerminalBlock } from "@/components/ui/CodeBlock";
import { InlineCode } from "@/components/ui/CodeBlock";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation",
  description: "Get started with Piece UI in your Next.js or React project.",
};

const step2Code = `// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add piece-ui to content so Tailwind picks up its classes:
    "./node_modules/piece-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00bfff",
        "accent-strong": "#00f0ff",
      },
    },
  },
  plugins: [],
};

export default config;`;

const step3Code = `/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0d0d0d;
  --border-color: #333333;
  --border-primary: #333333;
  --white: #f5f4f4;
  --light-gray: #b3b3b3;
  --accent: #00bfff;
  --accent-strong: #00f0ff;
  --accent-gradient: linear-gradient(120deg, #00f0ff 0%, #7000ff 100%);
}`;

const step4Code = `import { Button, ArticleCard, Header } from "piece-ui";

export default function App() {
  return (
    <div>
      <Header
        logo="MyApp"
        routes={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <main>
        <Button variant="primary">Hello, Piece UI!</Button>
      </main>
    </div>
  );
}`;

const frameworkCode = `# Next.js
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
npm install piece-ui framer-motion

# Vite + React
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss autoprefixer postcss framer-motion piece-ui`;

const copyUsageCode = `// Copy the component source from the docs
// and paste it into your components/ folder.
// Then import it directly — no npm package needed.

import { Button } from "@/components/Button";`;

const steps = [
  { label: "Install piece-ui" },
  { label: "Configure Tailwind" },
  { label: "Add CSS variables" },
  { label: "Import and use" },
];

export default function InstallationPage() {
  return (
    <div className="py-8 max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3 text-xs text-text-muted">
          <span className="font-mono text-accent">piece-ui</span>
          <span>/</span>
          <span>docs</span>
          <span>/</span>
          <span className="text-text-secondary">installation</span>
        </div>
        <h1 className="text-4xl font-bold mb-3 gradient-text-subtle">Installation</h1>
        <p className="text-text-secondary">
          Get piece-ui running in your project in under 2 minutes. Works with any React framework.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="mb-8 p-5 rounded-xl border border-border bg-surface">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">Prerequisites</h2>
        <ul className="space-y-2">
          {[
            { label: "React 18+", note: "peer dependency" },
            { label: "Tailwind CSS 3+", note: "for utility classes" },
            { label: "Framer Motion 11+", note: "for animated components" },
            { label: "TypeScript", note: "recommended" },
          ].map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-sm">
              <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Check size={10} className="text-accent" />
              </span>
              <span className="text-text-primary">{item.label}</span>
              <span className="text-text-muted text-xs">— {item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Framework setup */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2">New project?</h2>
        <p className="text-text-muted text-sm mb-4">
          If you&apos;re starting fresh, scaffold a project first then add piece-ui:
        </p>
        <CodeBlock code={frameworkCode} language="bash" filename="terminal" />
      </section>

      {/* Step 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-bold text-sm shrink-0">
            1
          </span>
          <h2 className="text-lg font-semibold">Install piece-ui</h2>
        </div>
        <p className="text-text-muted text-sm mb-3">Install the package and its peer dependencies:</p>
        <TerminalBlock command="npm install piece-ui framer-motion" />
        <p className="text-text-muted text-xs mt-3">
          Using yarn?{" "}
          <InlineCode>yarn add piece-ui framer-motion</InlineCode>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          pnpm?{" "}
          <InlineCode>pnpm add piece-ui framer-motion</InlineCode>
        </p>
      </section>

      {/* Step 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-bold text-sm shrink-0">
            2
          </span>
          <h2 className="text-lg font-semibold">Configure Tailwind CSS</h2>
        </div>
        <p className="text-text-muted text-sm mb-3">
          Add the piece-ui dist folder to your Tailwind <InlineCode>content</InlineCode> array so
          Tailwind scans and includes its classes:
        </p>
        <CodeBlock code={step2Code} language="typescript" filename="tailwind.config.ts" />
      </section>

      {/* Step 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-bold text-sm shrink-0">
            3
          </span>
          <h2 className="text-lg font-semibold">Add CSS design tokens</h2>
        </div>
        <p className="text-text-muted text-sm mb-3">
          Add the following CSS variables to your global stylesheet. These tokens power piece-ui&apos;s
          theming system:
        </p>
        <CodeBlock code={step3Code} language="css" filename="globals.css" />
      </section>

      {/* Step 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-bold text-sm shrink-0">
            4
          </span>
          <h2 className="text-lg font-semibold">Import and use</h2>
        </div>
        <p className="text-text-muted text-sm mb-3">
          All components are exported from <InlineCode>piece-ui</InlineCode>. Import what you need:
        </p>
        <CodeBlock code={step4Code} language="tsx" filename="app/page.tsx" />
      </section>

      {/* Copy & Paste approach */}
      <section className="mb-10 p-5 rounded-xl border border-border bg-surface">
        <h2 className="text-base font-semibold mb-2">Prefer copy & paste?</h2>
        <p className="text-text-muted text-sm mb-4">
          Every component page includes the full source code. You can copy it directly into your project
          instead of installing via npm — perfect if you want to customize components at the source level.
        </p>
        <CodeBlock code={copyUsageCode} language="tsx" />
        <p className="text-xs text-text-muted mt-3">
          Navigate to any{" "}
          <Link href="/components" className="text-accent hover:underline">component page</Link>{" "}
          {" "}and use the copy button on the code block.
        </p>
      </section>

      {/* TypeScript note */}
      <section className="mb-10 flex items-start gap-3 p-4 rounded-xl border border-accent/20 bg-accent/5">
        <span className="text-accent text-lg mt-0.5">✦</span>
        <div>
          <h3 className="font-semibold text-sm mb-1">TypeScript support</h3>
          <p className="text-text-muted text-sm">
            All components ship with TypeScript definitions. Props are fully typed — your editor will
            show autocompletion and type errors automatically. No <InlineCode>@types</InlineCode>{" "}
            package needed.
          </p>
        </div>
      </section>

      {/* Next steps */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Next steps</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/components"
            className="p-4 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all group"
          >
            <div className="font-medium mb-1 group-hover:text-accent transition-colors">Browse Components →</div>
            <div className="text-sm text-text-muted">See all 17 components with examples and props.</div>
          </Link>
          <Link
            href="/changelog"
            className="p-4 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all group"
          >
            <div className="font-medium mb-1 group-hover:text-accent transition-colors">Changelog →</div>
            <div className="text-sm text-text-muted">See what changed in the latest release.</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
