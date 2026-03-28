import React, { useState, useEffect } from "react";
import { MenuButton } from "../MenuButton/MenuButton";

export interface NavRoute {
  name: string;
  href: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  routes?: NavRoute[];
  currentPath?: string;
}

const DEFAULT_ROUTES: NavRoute[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const Header = ({
  logoSrc,
  logoAlt = "Logo",
  logoHref = "/",
  routes = DEFAULT_ROUTES,
  currentPath = "/",
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative h-20 w-full px-4 sm:px-6 md:px-10">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <a href={logoHref} className="relative z-50 h-full py-6">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-full w-auto"
            />
          ) : (
            <span className="text-sm font-bold text-(--white)">{logoAlt}</span>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden h-full md:block">
          <ul className="flex h-full items-center gap-3.5 text-sm font-medium">
            {routes.map((route, index) => (
              <li key={index}>
                <a
                  href={route.href}
                  className={
                    `whitespace-nowrap transition-colors duration-300 ` +
                    (currentPath === route.href
                      ? "text-(--white)"
                      : "text-(--light-gray)/75 hover:text-(--white)")
                  }
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="relative z-50 md:hidden">
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {isMenuOpen && (
          <nav
            className="fixed inset-0 z-40 overflow-hidden bg-black/75 backdrop-blur-md md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <ul
              className="flex flex-col items-center justify-center pt-40 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              {routes.map((route, index) => (
                <li key={index}>
                  <a
                    href={route.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={
                      `block px-6 py-3 text-xl font-medium transition-colors duration-300 ` +
                      (currentPath === route.href
                        ? "text-(--white)"
                        : "text-(--light-gray)/75")
                    }
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
