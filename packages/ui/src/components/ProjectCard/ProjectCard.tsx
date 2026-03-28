import React, { useRef } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";
import { NoiseBackground } from "../NoiseBackground/NoiseBackground";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  dribbbleUrl?: string;
  caseStudyUrl?: string;
}

export interface ProjectCardProps {
  index: number;
  totalCards: number;
  project: Project;
  progress: MotionValue<number>;
  targetScale: number;
  /** Optional ambient glow color extracted from the project image */
  imageColor?: { rgba: (alpha: number) => string } | null;
  stickyTop?: string;
}

export const ProjectCard = ({
  index,
  totalCards,
  project,
  progress,
  targetScale,
  imageColor,
  stickyTop = "top-24",
}: ProjectCardProps) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scaleRange = [index / totalCards, 1];
  const scale = useTransform(progress, scaleRange, [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className={`sticky flex min-h-[80dvh] w-full items-start justify-center sm:top-32 ${stickyTop}`}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 20}px)`,
        }}
        className="relative flex w-full origin-top flex-col gap-6 overflow-hidden rounded-2xl border border-white/5 bg-[#0b1017] shadow-2xl sm:gap-8 sm:rounded-4xl"
      >
        <div className="relative flex h-auto flex-col gap-6 overflow-hidden px-4 pt-10 pb-6 sm:h-auto sm:flex-row sm:justify-between sm:gap-16 sm:px-10 sm:py-12 md:min-h-[70vh]">
          <NoiseBackground />

          {/* ── LEFT: Text ── */}
          <div className="relative z-10 flex w-full flex-col gap-5 sm:max-w-[40%] sm:gap-15">
            <div className="flex flex-col sm:gap-6">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-(--white) sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
              <p className="line-clamp-5 text-sm font-light leading-relaxed text-(--light-gray) sm:text-base">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 text-sm tracking-[0.04em] text-(--light-gray)"
                  >
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#00f0ff]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-2 overflow-hidden rounded-full border border-[#00f0ff50] bg-[linear-gradient(135deg,#00f0ff22,#00f0ff11)] px-5 py-2.5 text-sm font-semibold text-[#00f0ff] no-underline shadow-[0_0_20px_#00f0ff15] transition-shadow duration-300 hover:shadow-[0_0_30px_#00f0ff45]"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Live Site
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-white/5 text-(--light-gray) no-underline transition-all duration-200 hover:border-white/30 hover:text-(--white)"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}

                  {project.dribbbleUrl && (
                    <a
                      href={project.dribbbleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Dribbble"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-white/5 text-(--light-gray) no-underline transition-all duration-200 hover:border-[rgba(234,76,137,0.3)] hover:text-[#ea4c89]"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.504a8.5 8.5 0 0 1 5.941 2.413c-.148.216-1.443 1.941-4.48 3.08-1.399-2.572-2.951-4.69-3.189-5A8.687 8.687 0 0 1 12 3.504zm-3.635.498a.5.5 0 0 1 .051.009c.245.317 1.762 2.434 3.143 4.952-3.965 1.053-7.468 1.035-7.838 1.035a8.514 8.514 0 0 1 4.644-5.996zM3.504 12l.005-.232c.358.007 4.497.07 8.732-1.208.244.478.479.964.692 1.46-.115.033-.231.065-.342.1-4.401 1.42-6.74 5.305-6.93 5.629A8.458 8.458 0 0 1 3.504 12zm8.496 8.496a8.464 8.464 0 0 1-5.232-1.81c.151-.302 2.058-3.986 6.913-5.674l.033-.011a43.862 43.862 0 0 1 1.116 5.702 8.5 8.5 0 0 1-2.83.793zm4.293-1.51a45.24 45.24 0 0 0-1.042-5.329c2.627-.422 4.932.266 5.216.347a8.517 8.517 0 0 1-4.174 4.982z" />
                      </svg>
                    </a>
                  )}
                </div>

                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    className="inline-flex w-fit items-center gap-2 text-sm tracking-[0.04em] text-(--light-gray) no-underline transition-colors duration-200 hover:text-(--white)"
                  >
                    <span className="inline-block h-px w-4 bg-[#00f0ff]" />
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Project Image ── */}
          <div className="relative z-10 flex w-full flex-col items-end justify-between gap-4 sm:max-w-[60%]">
            {imageColor && (
              <div
                className="pointer-events-none absolute top-1/3 left-2/3 h-[150%] w-[250%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle, ${imageColor.rgba(0.9)} 0%, ${imageColor.rgba(0.5)} 50%, ${imageColor.rgba(0.1)} 100%)`,
                  zIndex: 0,
                }}
              />
            )}

            {project.imageUrl && (
              <div className="relative z-1 w-full">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 rounded-t-2xl border border-(--border-color) bg-[#0d0e13] px-4 py-3">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="inline-block h-3 w-3 rounded-full bg-green-500/70" />
                  <div className="ml-3 h-5 max-w-64 flex-1 rounded-md bg-white/5" />
                </div>
                <div className="overflow-hidden rounded-b-2xl border border-t-0 border-(--border-color)">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1311/652" }}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_1px_#00f0ff40,0_0_40px_#00f0ff20] transition-opacity duration-500" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
