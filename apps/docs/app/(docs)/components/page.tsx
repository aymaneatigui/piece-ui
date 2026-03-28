import type { Metadata } from "next";
import Link from "next/link";
import { components } from "@/lib/components-data";
import Badge from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Layers, Code2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Components",
  description: "Browse all 17 Piece UI components with live examples and documentation.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  form:      <Code2 size={16} />,
  layout:    <Layers size={16} />,
  content:   <Star size={16} />,
  animation: <Sparkles size={16} />,
};

const categoryDescriptions: Record<string, string> = {
  form:      "Interactive form controls and input components.",
  layout:    "Page structure, wrappers, and navigation.",
  content:   "Cards, icons, and content display components.",
  animation: "Motion effects, transitions, and decorative elements.",
};

export default function ComponentsPage() {
  const grouped = {
    form:      components.filter((c) => c.category === "form"),
    layout:    components.filter((c) => c.category === "layout"),
    content:   components.filter((c) => c.category === "content"),
    animation: components.filter((c) => c.category === "animation"),
  };

  return (
    <div className="py-10">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-mono text-accent">piece-ui</span>
          <span className="text-text-muted">/</span>
          <span className="text-sm font-mono text-text-muted">components</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text-subtle">Components</h1>
        <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
          {components.length} production-ready components. Fully typed with TypeScript, styled with Tailwind CSS.
          Install via npm or copy the source.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
        {(Object.entries(grouped) as [string, typeof components][]).map(([cat, comps]) => (
          <div
            key={cat}
            className="p-5 rounded-xl border border-border bg-surface flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-text-muted">{categoryIcons[cat]}</span>
              <Badge variant={cat as "form" | "layout" | "content" | "animation"}>
                {cat}
              </Badge>
            </div>
            <div className="text-4xl font-bold gradient-text tabular-nums">{comps.length}</div>
            <div className="text-sm text-text-muted">{categoryDescriptions[cat]}</div>
          </div>
        ))}
      </div>

      {/* Component sections */}
      {(Object.entries(grouped) as [string, typeof components][]).map(([cat, comps]) => (
        <div key={cat} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-text-secondary">{categoryIcons[cat]}</span>
            <h2 className="text-xl font-semibold capitalize text-text-primary">{cat}</h2>
            <span className="text-sm font-mono text-text-muted bg-surface border border-border rounded-md px-2 py-0.5">
              {comps.length}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {comps.map((component) => (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className="group p-6 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all duration-200 glow-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {component.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    {component.badge && (
                      <Badge variant={component.badge}>{component.badge}</Badge>
                    )}
                    <span className="opacity-0 group-hover:opacity-100 transition-all text-accent -translate-x-1 group-hover:translate-x-0">
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {component.description}
                </p>
                {component.peerDeps && component.peerDeps.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-4">
                    {component.peerDeps.map((dep) => (
                      <span
                        key={dep}
                        className="text-xs font-mono text-text-muted bg-surface-2 border border-border rounded px-2 py-0.5"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
