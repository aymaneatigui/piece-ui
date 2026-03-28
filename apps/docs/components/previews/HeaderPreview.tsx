"use client";

import React, { useState } from "react";

const routes = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Articles", href: "#" },
  { name: "Contact", href: "#" },
];

export default function HeaderPreview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = "/";

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]">
      <div className="relative h-16 w-full px-6">
        <div className="flex h-full max-w-full items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50 text-sm font-bold text-white">
            MyApp
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-4 text-sm font-medium">
              {routes.map((route) => (
                <li key={route.name}>
                  <a
                    href={route.href}
                    className={`whitespace-nowrap transition-colors duration-300 ${
                      currentPath === route.href ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-40 border-t border-white/10 bg-black/90 backdrop-blur-md sm:hidden">
            <ul className="flex flex-col py-4">
              {routes.map((route) => (
                <li key={route.name}>
                  <a
                    href={route.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-sm font-medium text-white/60 hover:text-white"
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
