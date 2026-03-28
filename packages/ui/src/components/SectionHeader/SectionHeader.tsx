import React from "react";

export interface SectionHeaderProps {
  number: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export const SectionHeader = ({
  number,
  title,
  viewAllHref,
  viewAllLabel,
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <span className="text-xs text-(--light-gray)">{number}</span>
        <h2 className="text-2xl font-semibold text-(--white) sm:text-3xl">{title}</h2>
      </div>
      {viewAllHref && viewAllLabel && (
        <a
          href={viewAllHref}
          className="group inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-(--white) opacity-80 transition-opacity hover:opacity-100"
        >
          {viewAllLabel}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      )}
    </div>
  );
};
