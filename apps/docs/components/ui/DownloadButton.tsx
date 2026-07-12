"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DownloadButton({
  text,
  filename,
  className,
}: {
  text: string;
  filename: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  const handleDownload = () => {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md font-medium transition-all duration-200",
        done
          ? "bg-accent/15 text-accent border border-accent/30"
          : "bg-surface hover:bg-surface-2 text-text-secondary hover:text-text-primary border border-border",
        className
      )}
      title={`Download ${filename}`}
    >
      {done ? (
        <>
          <Check size={12} />
          Saved!
        </>
      ) : (
        <>
          <Download size={12} />
          Download
        </>
      )}
    </button>
  );
}
