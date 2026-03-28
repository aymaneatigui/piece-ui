"use client";

import React from "react";

export default function ProjectCardPreview() {
  const project = {
    title: "Piece UI",
    description: "A modern component library built with React, TypeScript, and Tailwind CSS. Designed for portfolio sites with dark aesthetics.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0b1017]">
      <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:gap-10">
        {/* Left: Text */}
        <div className="flex flex-col gap-4 sm:max-w-[45%]">
          <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
          <p className="text-sm font-light leading-relaxed text-white/50">{project.description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-sm text-white/50">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#00f0ff]" />
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={project.liveUrl} className="flex items-center gap-2 rounded-full border border-[#00f0ff50] bg-[linear-gradient(135deg,#00f0ff22,#00f0ff11)] px-4 py-2 text-sm font-semibold text-[#00f0ff] no-underline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              Live Site
            </a>
            <a href={project.githubUrl} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 no-underline hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
          </div>
        </div>
        {/* Right: Mock browser */}
        <div className="flex-1">
          <div className="rounded-t-xl border border-white/10 bg-[#0d0e13] px-4 py-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <div className="ml-2 h-4 max-w-40 flex-1 rounded bg-white/5" />
          </div>
          <div className="overflow-hidden rounded-b-xl border border-t-0 border-white/10">
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-white/20 text-sm">
              Project preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
