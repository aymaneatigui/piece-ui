"use client";

import { useState } from "react";
import { Eye, Code2 } from "lucide-react";
import ComponentPreview from "./ComponentPreview";
import CodeBlock from "../ui/CodeBlock";
import { cn } from "@/lib/utils";

export default function ComponentShowcase({
  slug,
  source,
  filename,
}: {
  slug: string;
  source?: string;
  filename?: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const hasCode = Boolean(source && filename);

  return (
    <div>
      {hasCode && (
        <div className="mb-3 inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-1">
          {(
            [
              { id: "preview", label: "Preview", icon: <Eye size={13} /> },
              { id: "code", label: "Code", icon: <Code2 size={13} /> },
            ] as const
          ).map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                tab === id
                  ? "bg-accent/15 text-accent"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      )}

      {tab === "preview" || !hasCode ? (
        <div className="flex min-h-[160px] items-center justify-center rounded-xl border border-border bg-surface/50 p-6">
          <ComponentPreview slug={slug} />
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-text-muted">
            Prefer to own the code? Copy this into{" "}
            <code className="font-mono text-accent">components/ui/{filename}</code> — no install
            needed.
          </p>
          <CodeBlock code={source!} language="tsx" filename={filename} downloadName={filename} />
        </div>
      )}
    </div>
  );
}
