"use client";

import React from "react";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Articles" },
  { href: "#", label: "Contact" },
];

const socials = [
  { name: "GitHub", iconKey: "github", url: "#" },
  { name: "X (Twitter)", iconKey: "twitter", url: "#" },
  { name: "LinkedIn", iconKey: "linkedin", url: "#" },
];

function GithubIcon() {
  return <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>;
}
function TwitterIcon() {
  return <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}
function LinkedinIcon() {
  return <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedinIcon />,
};

export default function FooterPreview() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-white/5 py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-baseline gap-3 pr-8 text-2xl font-bold tracking-tight">
              <span className="text-white">Let&apos;s</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(245,244,244,0.3)" }}>Build</span>
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#7000FF] bg-clip-text text-transparent">Something.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-3 gap-8 px-6 py-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] tracking-wide text-white/50">Available</span>
          </div>
          <p className="text-sm font-bold text-white">Your Name</p>
          <p className="text-xs leading-relaxed text-white/30">Building fast, reliable web experiences with modern tools.</p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-white/30">Navigation</p>
          {navItems.map((item) => (
            <a key={item.href + item.label} href={item.href} className="text-xs text-white/50 hover:text-white transition-colors">{item.label}</a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-white/30">Find Me</p>
          {socials.map((s) => (
            <a key={s.name} href={s.url} className="group flex w-fit items-center gap-2 text-xs text-white/50 hover:text-white transition-colors">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-[#00F0FF]/30 group-hover:text-[#00F0FF] transition-all">
                {iconMap[s.iconKey]}
              </span>
              {s.name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-3 flex justify-between items-center">
        <p className="text-[11px] text-white/25">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <button className="text-[10px] text-white/25 border border-white/10 rounded-full px-2.5 py-1 hover:text-white/50 transition-colors">↑ Top</button>
      </div>
    </div>
  );
}
