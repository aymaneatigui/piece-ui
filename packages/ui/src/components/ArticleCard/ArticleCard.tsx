import React from "react";

export interface ArticleTag {
  name: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description?: string | null;
  coverImage?: string | null;
  publishedAt?: Date | null;
  tags?: { tag: ArticleTag }[];
}

export interface ArticleCardProps {
  article: Article;
  href?: string;
}

function formatDate(date: Date | null | undefined): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const ArticleCard = ({ article, href }: ArticleCardProps) => {
  const tagNames = (article.tags ?? []).map((t) => t.tag.name).slice(0, 2);
  const articleHref = href ?? `/articles/${article.slug}`;

  return (
    <a
      href={articleHref}
      className="group flex w-full flex-col transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-2xl sm:aspect-[4/3]">
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-white/6 bg-white/[0.03]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="text-white/[0.12]"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex flex-nowrap items-center gap-1.5 overflow-hidden">
            {tagNames.map((tag) => (
              <span
                key={`${article.id}-${tag}`}
                className="shrink-0 cursor-default rounded-full border border-white/10 bg-[rgba(26,28,35,0.6)] px-3.5 py-1 font-mono text-xs text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="shrink-0 font-mono text-[11px] tracking-wider text-white/35">
            {formatDate(article.publishedAt)}
          </div>
        </div>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-(--white) sm:text-xl">
          {article.title}
        </h3>
        {article.description && (
          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-(--light-gray)">
            {article.description}
          </p>
        )}
      </div>
    </a>
  );
};
