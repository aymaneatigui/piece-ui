import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const changelog = [
  {
    version: "1.0.0-alpha.3",
    date: "2025-03-28",
    tag: "latest",
    changes: [
      { type: "new", text: "Added SpotlightReveal component with Framer Motion hover effect" },
      { type: "new", text: "Added SectionHeader component with index numbering" },
      { type: "new", text: "Added SectionWrapper layout utility" },
      { type: "new", text: "Added SocialIcon with 8 platform variants" },
      { type: "improved", text: "Button component now supports loading state" },
      { type: "improved", text: "Footer marquee animation performance improvements" },
      { type: "fixed", text: "Header mobile menu z-index stacking issue" },
    ],
  },
  {
    version: "1.0.0-alpha.2",
    date: "2025-02-14",
    tag: "alpha",
    changes: [
      { type: "new", text: "Added Line1 and Line2 decorative animation components" },
      { type: "new", text: "Added NoiseBackground texture overlay component" },
      { type: "improved", text: "ProjectCard scroll-driven animation refinements" },
      { type: "improved", text: "ArticleCard now supports optional image" },
      { type: "fixed", text: "Checkbox keyboard navigation accessibility fix" },
      { type: "fixed", text: "ContactForm validation edge cases" },
    ],
  },
  {
    version: "1.0.0-alpha.1",
    date: "2025-01-10",
    tag: "alpha",
    changes: [
      { type: "new", text: "Initial alpha release with 11 core components" },
      { type: "new", text: "Button with primary, ghost, and danger variants" },
      { type: "new", text: "ArticleCard and ProjectCard content components" },
      { type: "new", text: "Header and Footer layout components" },
      { type: "new", text: "ConfirmDialog modal component" },
      { type: "new", text: "ContactForm with validation" },
      { type: "new", text: "Checkbox accessible input" },
      { type: "new", text: "MenuButton hamburger toggle" },
      { type: "new", text: "CustomBtn flexible button" },
      { type: "new", text: "Full TypeScript support with exported types" },
      { type: "new", text: "Tailwind CSS design token system" },
    ],
  },
];
