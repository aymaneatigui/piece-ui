"use client";

import React from "react";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ArticleCardPreview() {
  const article = {
    id: "1",
    slug: "building-with-rsc",
    title: "Building with React Server Components",
    description: "A deep dive into how RSC changes the way we think about data fetching and rendering.",
    coverImage: null as string | null,
    publishedAt: new Date("2025-03-15"),
    tags: [{ tag: { name: "React" } }, { tag: { name: "Next.js" } }],
  };

  const tagNames = article.tags.map((t) => t.tag.name).slice(0, 2);

  return (
    <div className="w-full max-w-sm">
      <a href="#" className="group flex w-full flex-col transition-transform duration-300 hover:-translate-y-2">
        <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-2xl">
          <div className="flex h-full w-full items-center justify-center border border-white/6 bg-white/[0.03]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-white/20">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-1">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {tagNames.map((tag) => (
                <span key={tag} className="shrink-0 cursor-default rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-xs text-white/75">
                  {tag}
                </span>
              ))}
            </div>
            <div className="shrink-0 font-mono text-[11px] tracking-wider text-white/35">
              {formatDate(article.publishedAt)}
            </div>
          </div>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-white">
            {article.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-white/50">
            {article.description}
          </p>
        </div>
      </a>
    </div>
  );
}
