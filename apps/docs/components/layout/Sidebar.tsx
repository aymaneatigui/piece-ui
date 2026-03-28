"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { components } from "@/lib/components-data";

const sidebarSections = [
  {
    label: "Getting Started",
    links: [{ label: "Installation", href: "/installation" }],
  },
  {
    label: "Components",
    links: [{ label: "Overview", href: "/components" }],
  },
  {
    label: "Form",
    links: components
      .filter((c) => c.category === "form")
      .map((c) => ({ label: c.name, href: `/components/${c.slug}` })),
  },
  {
    label: "Layout",
    links: components
      .filter((c) => c.category === "layout")
      .map((c) => ({ label: c.name, href: `/components/${c.slug}` })),
  },
  {
    label: "Content",
    links: components
      .filter((c) => c.category === "content")
      .map((c) => ({ label: c.name, href: `/components/${c.slug}` })),
  },
  {
    label: "Animation",
    links: components
      .filter((c) => c.category === "animation")
      .map((c) => ({ label: c.name, href: `/components/${c.slug}` })),
  },
  {
    label: "More",
    links: [{ label: "Changelog", href: "/changelog" }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 hidden lg:block">
      <div className="sticky top-16 overflow-y-auto max-h-[calc(100vh-4rem)] pb-8">
        <div className="py-6 pr-4 space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2 px-2.5">
                {section.label}
              </p>
              <ul className="space-y-px">
                {section.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm transition-colors",
                          isActive
                            ? "text-accent bg-accent/10 font-medium"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface"
                        )}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="pt-4 border-t border-border px-2.5">
            <span className="text-xs font-mono text-text-muted">v1.0.0-alpha.3</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
