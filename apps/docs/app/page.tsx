import Link from "next/link";
import { ArrowRight, Github, Package, Zap, Code2, Layers } from "lucide-react";
import { components } from "@/lib/components-data";
import Badge from "@/components/ui/Badge";
import { TerminalBlock } from "@/components/ui/CodeBlock";

function PuzzleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/>
    </svg>
  );
}

const features = [
  {
    icon: <Package size={22} />,
    title: "Zero config setup",
    description: "One install command. All components ready with TypeScript definitions and Tailwind classes baked in.",
  },
  {
    icon: <Zap size={22} />,
    title: "Framer Motion powered",
    description: "Smooth, production-quality animations built into components. No extra setup required.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Copy or install",
    description: "Use via npm or copy source directly into your project. Your choice — zero lock-in.",
  },
  {
    icon: <Layers size={22} />,
    title: "Composable by design",
    description: "Every component works standalone or composes with others seamlessly.",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Dot grid */}
      <div className="fixed inset-0 grid-bg bg-grid opacity-100 pointer-events-none" />
      {/* Top glow — indigo */}
      <div className="fixed inset-x-0 top-0 h-[600px] bg-hero-gradient pointer-events-none" />

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-28 px-4 sm:px-6 max-w-6xl mx-auto text-center">

        {/* Version pill */}
        <Link
          href="/changelog"
          className="inline-flex items-center gap-2 border border-accent/25 bg-accent/8 rounded-full px-4 py-1.5 mb-10 text-sm text-accent animate-fade-in hover:bg-accent/15 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono">v1.0.0-alpha.3</span>
          <span className="text-text-muted hidden sm:inline">· Latest release</span>
          <ArrowRight size={13} />
        </Link>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 animate-fade-up">
          <span className="gradient-text-subtle block">Build beautiful</span>
          <span className="gradient-text">piece by piece.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.08s", opacity: 0 }}
        >
          A dark-mode React component library.{" "}
          <span className="text-text-primary font-medium">17 production-ready components</span>{" "}
          built with TypeScript, Tailwind CSS, and Framer Motion.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 animate-fade-up"
          style={{ animationDelay: "0.16s", opacity: 0 }}
        >
          <Link
            href="/components"
            className="flex items-center gap-2 bg-accent text-background font-semibold px-6 py-3 rounded-xl hover:bg-accent-strong transition-all shadow-glow hover:shadow-glow-lg text-base"
          >
            Browse Components
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/installation"
            className="flex items-center gap-2 border border-border bg-surface hover:bg-surface-2 text-text-primary font-medium px-6 py-3 rounded-xl transition-colors text-base"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/aymaneatigui/piece-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary px-4 py-3 rounded-xl transition-colors text-base"
          >
            <Github size={19} />
            GitHub
          </a>
        </div>

        {/* Install command */}
        <div
          className="max-w-sm mx-auto animate-fade-up"
          style={{ animationDelay: "0.24s", opacity: 0 }}
        >
          <TerminalBlock command="npm install piece-ui" />
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-10 mt-16 animate-fade-up"
          style={{ animationDelay: "0.32s", opacity: 0 }}
        >
          {[
            { value: "17", label: "Components" },
            { value: "100%", label: "TypeScript" },
            { value: "MIT", label: "License" },
            { value: "0", label: "Config needed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text tabular-nums">{stat.value}</div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Why piece-ui</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-subtle">Everything you need,</span>
          </h2>
          <p className="text-2xl text-text-secondary">nothing you don&apos;t.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-2xl border border-border bg-surface hover:border-accent/30 hover:bg-card-gradient transition-all duration-300 shine"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">{feature.title}</h3>
              <p className="text-base text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Component Grid ─── */}
      <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Library</p>
            <h2 className="text-4xl font-bold text-text-primary">
              {components.length} components.{" "}
              <span className="text-text-secondary font-normal">One import.</span>
            </h2>
          </div>
          <Link
            href="/components"
            className="hidden sm:flex items-center gap-1.5 text-base text-text-secondary hover:text-accent transition-colors"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/components/${component.slug}`}
              className="group p-5 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <PuzzleIcon className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                {component.badge && (
                  <Badge variant={component.badge}>{component.badge}</Badge>
                )}
              </div>
              <h3 className="font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
                {component.name}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                {component.description.split(".")[0]}.
              </p>
              <Badge variant={component.category} className="mt-3">
                {component.category}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="relative rounded-2xl border border-border bg-surface overflow-hidden p-10 sm:p-14 text-center shine">
          <div className="absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-60" />
          <div className="absolute inset-0 bg-hero-gradient opacity-40" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-7 text-sm text-accent">
              <PuzzleIcon className="w-4 h-4" />
              Quick install
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              Start building in{" "}
              <span className="gradient-text">seconds.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-9 max-w-md mx-auto leading-relaxed">
              Install piece-ui, import your components, and ship. No build steps, no configuration.
            </p>
            <div className="max-w-sm mx-auto mb-8">
              <TerminalBlock command="npm install piece-ui" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/installation"
                className="flex items-center gap-2 bg-accent text-background font-semibold px-6 py-3 rounded-xl hover:bg-accent-strong transition-all shadow-glow text-base"
              >
                Installation Guide
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/components"
                className="flex items-center gap-2 border border-border bg-transparent hover:bg-surface-2 text-text-primary font-medium px-6 py-3 rounded-xl transition-colors text-base"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <PuzzleIcon className="w-5 h-5 text-accent" />
            <span className="text-base font-semibold text-text-primary">piece-ui</span>
            <span className="text-sm font-mono text-text-muted border border-border rounded px-2 py-0.5">MIT</span>
          </div>
          <p className="text-sm text-text-muted">
            Built by{" "}
            <a
              href="https://github.com/aymaneatigui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              Aymane Atigui
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
