import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { components, getComponent } from "@/lib/components-data";
import CodeBlock from "@/components/ui/CodeBlock";
import { TerminalBlock } from "@/components/ui/CodeBlock";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import ComponentPreview from "@/components/previews/ComponentPreview";

export async function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) return {};
  return {
    title: component.name,
    description: component.description,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) notFound();

  const idx = components.findIndex((c) => c.slug === slug);
  const prevComponent = idx > 0 ? components[idx - 1] : null;
  const nextComponent = idx < components.length - 1 ? components[idx + 1] : null;

  const importCode = `import { ${component.name} } from "piece-ui";`;

  return (
    <div className="py-10 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/components" className="hover:text-accent transition-colors flex items-center gap-1.5">
          <ArrowLeft size={14} /> Components
        </Link>
        <span>/</span>
        <span className="text-text-secondary">{component.name}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">{component.name}</h1>
          <Badge variant={component.category}>{component.category}</Badge>
          {component.badge && <Badge variant={component.badge}>{component.badge}</Badge>}
        </div>
        <p className="text-lg text-text-secondary leading-relaxed">{component.description}</p>
      </div>

      {/* Preview */}
      <section className="mb-12">
        <ComponentPreview slug={slug} />
      </section>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
          <span className="w-6 h-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-xs font-bold border border-accent/20">1</span>
          Installation
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-text-muted mb-2.5">Install the package:</p>
            <TerminalBlock command="npm install piece-ui" />
          </div>
          <div>
            <p className="text-sm text-text-muted mb-2.5">Import the component:</p>
            <CodeBlock code={importCode} language="tsx" />
          </div>
          {component.peerDeps && component.peerDeps.length > 0 && (
            <div className="flex items-start gap-3 p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <span className="text-amber-400 mt-0.5 text-base">⚠</span>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-amber-400">Peer dependencies required</p>
                <p className="text-sm text-text-muted">
                  This component requires:{" "}
                  {component.peerDeps.map((dep, i) => (
                    <span key={dep}>
                      <code className="font-mono text-amber-400/80 bg-amber-500/10 px-1.5 rounded">{dep}</code>
                      {i < component.peerDeps!.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <TerminalBlock command={`npm install ${component.peerDeps.join(" ")}`} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
          <span className="w-6 h-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-xs font-bold border border-accent/20">2</span>
          Usage
        </h2>
        <div className="space-y-6">
          {component.examples.map((example) => (
            <div key={example.label}>
              <p className="text-sm text-text-muted mb-2.5">{example.label}</p>
              <CodeBlock code={example.code} language={example.language ?? "tsx"} />
            </div>
          ))}
        </div>
      </section>

      {/* Props */}
      {component.props.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
            <span className="w-6 h-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-xs font-bold border border-accent/20">3</span>
            Props
          </h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-5 py-3.5 text-text-muted font-medium text-xs uppercase tracking-wider">Prop</th>
                  <th className="text-left px-5 py-3.5 text-text-muted font-medium text-xs uppercase tracking-wider">Type</th>
                  <th className="text-left px-5 py-3.5 text-text-muted font-medium text-xs uppercase tracking-wider hidden sm:table-cell">Default</th>
                  <th className="text-left px-5 py-3.5 text-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {component.props.map((prop, i) => (
                  <tr
                    key={prop.name}
                    className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? "" : "bg-surface/40"}`}
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-accent text-xs">{prop.name}</code>
                        {prop.required && (
                          <span className="text-[9px] font-semibold uppercase text-red-400 bg-red-400/10 border border-red-400/20 rounded px-1">req</span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <code className="font-mono text-text-secondary text-xs">{prop.type}</code>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      {prop.default ? (
                        <code className="font-mono text-text-muted text-xs">{prop.default}</code>
                      ) : (
                        <span className="text-text-muted text-xs">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-text-muted text-sm hidden md:table-cell">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-10 border-t border-border">
        {prevComponent ? (
          <Link
            href={`/components/${prevComponent.slug}`}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="text-base font-medium">{prevComponent.name}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextComponent ? (
          <Link
            href={`/components/${nextComponent.slug}`}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group text-right"
          >
            <div>
              <div className="text-xs text-text-muted">Next</div>
              <div className="text-base font-medium">{nextComponent.name}</div>
            </div>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
