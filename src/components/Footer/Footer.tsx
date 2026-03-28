import React from "react";
import { SocialIcon } from "../SocialIcon/SocialIcon";

export interface FooterNavItem {
  href: string;
  label: string;
}

export interface FooterSocial {
  id?: string;
  name: string;
  url: string;
  iconKey: string;
}

export interface FooterProps {
  name: string;
  email: string;
  socials?: FooterSocial[];
  navItems?: FooterNavItem[];
  tagline?: string;
  location?: string;
  year?: number;
}

const DEFAULT_NAV: FooterNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const Footer = ({
  name,
  email,
  socials = [],
  navItems = DEFAULT_NAV,
  tagline = "Building fast, reliable web experiences with modern tools.",
  location = "Based in Casablanca, Morocco",
  year = new Date().getFullYear(),
}: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0d0d0d]">
      {/* ── Marquee Statement ── */}
      <div className="relative overflow-hidden border-y border-white/5 py-14">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-12">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex items-baseline gap-4 pr-12">
              <span className="font-bold leading-[1.15] text-[clamp(2.5rem,10vw,7rem)] tracking-tight text-(--white)">
                Let&apos;s
              </span>
              <span
                className="font-bold leading-[1.15] text-[clamp(2.5rem,10vw,7rem)] tracking-tight text-transparent"
                style={{ WebkitTextStroke: "1px rgba(245,244,244,0.5)" }}
              >
                Build
              </span>
              <span className="bg-linear-to-r from-[#00F0FF] to-[#7000FF] bg-clip-text pb-2 font-bold leading-[1.15] text-[clamp(2.5rem,10vw,7rem)] tracking-tight text-transparent">
                Something.
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-16">

          {/* LEFT — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-white/50">
                Available for Projects
              </span>
            </div>
            <p className="text-lg font-bold tracking-tight text-(--white)">{name}</p>
            <p className="max-w-xs text-sm leading-relaxed text-white/35">{tagline}</p>
          </div>

          {/* CENTER + RIGHT */}
          <div className="grid grid-cols-2 gap-8 sm:contents">

            {/* CENTER — Nav */}
            <div className="flex flex-col gap-4">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                Navigation
              </p>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-(--white)"
                >
                  <span className="footer-slide-link" aria-label={item.label}>
                    <span>{item.label}</span>
                    <span>{item.label}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* RIGHT — Socials + Location */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Find Me Online
                </p>
                {socials.slice(0, 3).map((social) => (
                  <a
                    key={social.id || social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-3 text-sm text-white/50 transition-all duration-200 hover:text-(--white)"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 shadow-[0_0_0_rgba(0,240,255,0)] transition-all duration-200 group-hover:border-[#00F0FF]/30 group-hover:bg-[#00F0FF]/5 group-hover:text-[#00F0FF] group-hover:shadow-[0_0_22px_rgba(0,240,255,0.24)]">
                      <SocialIcon iconKey={social.iconKey} className="h-4 w-4" />
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${email}`}
                  className="group flex w-fit items-center gap-3 text-sm text-white/50 transition-all duration-200 hover:text-(--white)"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-200 group-hover:border-[#00F0FF]/30 group-hover:bg-[#00F0FF]/5 group-hover:text-[#00F0FF]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span>Email</span>
                </a>
              </div>

              <div className="mt-2 flex flex-col gap-1">
                <p className="text-sm text-white/40">{location}</p>
                <p className="text-xs text-white/25">Working globally, remotely.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 md:px-10">
          <p className="text-xs text-white/25">© {year} {name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/25">Designed &amp; Built by Aymane Atigui</p>
            <button
              onClick={scrollToTop}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/30 transition-all duration-200 hover:border-white/20 hover:text-white/60"
              aria-label="Back to top"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
