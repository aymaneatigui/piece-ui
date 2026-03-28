import type { Metadata } from "next";
import { changelog } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history and version notes for Piece UI.",
};

const changeTypeConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  new: { label: "New", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  improved: { label: "Improved", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  fixed: { label: "Fixed", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  breaking: { label: "Breaking", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
};

export default function ChangelogPage() {
  return (
    <div className="py-8 max-w-2xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3 text-xs text-text-muted">
          <span className="font-mono text-accent">piece-ui</span>
          <span>/</span>
          <span className="text-text-secondary">changelog</span>
        </div>
        <h1 className="text-4xl font-bold mb-3 gradient-text-subtle">Changelog</h1>
        <p className="text-text-secondary">
          All notable changes to piece-ui are documented here. Follows{" "}
          <a
            href="https://semver.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Semantic Versioning
          </a>.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-4 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

        <div className="space-y-12 pl-12">
          {changelog.map((release, releaseIdx) => (
            <div key={release.version} className="relative">
              {/* Dot */}
              <div className="absolute -left-12 top-1 w-8 flex justify-center">
                <div className={`w-3 h-3 rounded-full border-2 ${releaseIdx === 0 ? "bg-accent border-accent shadow-glow-sm" : "bg-background border-border"}`} />
              </div>

              {/* Version header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl font-bold font-mono">{release.version}</h2>
                {release.tag === "latest" && (
                  <span className="text-[10px] font-semibold bg-accent/15 text-accent border border-accent/25 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                    Latest
                  </span>
                )}
                {release.tag === "alpha" && (
                  <span className="text-[10px] font-semibold bg-surface-2 text-text-muted border border-border rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                    Alpha
                  </span>
                )}
                <span className="text-sm text-text-muted font-mono">
                  {new Date(release.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Changes */}
              <div className="space-y-2">
                {release.changes.map((change, i) => {
                  const config = changeTypeConfig[change.type] ?? changeTypeConfig.new;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-surface/50 hover:border-border hover:bg-surface transition-colors"
                    >
                      <span
                        className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${config.bg} ${config.color} ${config.border} mt-0.5`}
                      >
                        {config.label}
                      </span>
                      <span className="text-sm text-text-secondary leading-relaxed">{change.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* NPM link */}
              <div className="mt-4">
                <a
                  href={`https://www.npmjs.com/package/piece-ui/v/${release.version}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  <Package size={12} />
                  npm · piece-ui@{release.version}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          Missing something? Open an issue on{" "}
          <a
            href="https://github.com/aymaneatigui/piece-ui/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>.
        </p>
      </div>
    </div>
  );
}
