"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./CopyButton";
import { cn } from "@/lib/utils";

const theme = {
  'code[class*="language-"]': {
    color: "#d4d4d8",
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
    fontSize: "13px",
    lineHeight: "1.7",
    background: "none",
  },
  'pre[class*="language-"]': {
    background: "#0e0e0e",
    padding: "1.25rem",
    borderRadius: "0.5rem",
    overflow: "auto",
  },
  comment:     { color: "#404040", fontStyle: "italic" },
  prolog:      { color: "#404040" },
  doctype:     { color: "#404040" },
  cdata:       { color: "#404040" },
  punctuation: { color: "#525252" },
  property:    { color: "#818cf8" },
  tag:         { color: "#818cf8" },
  boolean:     { color: "#f472b6" },
  number:      { color: "#fb923c" },
  constant:    { color: "#d4d4d8" },
  symbol:      { color: "#d4d4d8" },
  deleted:     { color: "#f87171" },
  selector:    { color: "#86efac" },
  "attr-name": { color: "#a5b4fc" },
  string:      { color: "#86efac" },
  char:        { color: "#86efac" },
  builtin:     { color: "#86efac" },
  inserted:    { color: "#86efac" },
  operator:    { color: "#737373" },
  entity:      { color: "#737373" },
  url:         { color: "#737373" },
  variable:    { color: "#d4d4d8" },
  atrule:      { color: "#c084fc" },
  "attr-value":{ color: "#86efac" },
  function:    { color: "#60a5fa" },
  "class-name":{ color: "#c084fc" },
  keyword:     { color: "#c084fc" },
  regex:       { color: "#fb923c" },
  important:   { color: "#fb923c", fontWeight: "bold" },
  bold:        { fontWeight: "bold" },
  italic:      { fontStyle: "italic" },
};

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
}: {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden border border-border bg-[#0e0e0e]", className)}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          {filename && (
            <span className="text-xs font-mono text-text-muted ml-2">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-text-muted uppercase">{language}</span>
          <CopyButton text={code} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language === "tsx" ? "typescript" : language}
          style={theme as never}
          customStyle={{
            margin: 0,
            background: "transparent",
            padding: "1.25rem",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
          showLineNumbers
          lineNumberStyle={{
            color: "#2a2a2a",
            fontSize: "11px",
            paddingRight: "1.5rem",
            minWidth: "2.5rem",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-text-primary text-[0.85em] bg-surface-2 px-1.5 py-0.5 rounded border border-border">
      {children}
    </code>
  );
}

export function TerminalBlock({ command }: { command: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-border bg-[#0e0e0e]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <CopyButton text={command} />
      </div>
      <div className="px-5 py-4 flex items-center gap-3">
        <span className="text-text-muted font-mono text-sm select-none">$</span>
        <span className="font-mono text-sm text-text-primary">{command}</span>
      </div>
    </div>
  );
}
