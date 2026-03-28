export type PropDef = {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
};

export type CodeExample = {
  label: string;
  code: string;
  language?: string;
};

export type ComponentDoc = {
  name: string;
  slug: string;
  description: string;
  category: "form" | "layout" | "content" | "animation";
  badge?: "new" | "updated";
  props: PropDef[];
  examples: CodeExample[];
  peerDeps?: string[];
};

export const components: ComponentDoc[] = [
  {
    name: "Button",
    slug: "button",
    description:
      "A versatile button component with multiple variants, sizes, and optional icon support. Built with accessibility in mind and fully customizable via Tailwind CSS.",
    category: "form",
    props: [
      { name: "variant", type: '"primary" | "ghost" | "danger"', required: false, default: '"primary"', description: "Visual style variant of the button." },
      { name: "size", type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: "Controls the padding and font size." },
      { name: "icon", type: "React.ReactNode", required: false, description: "Optional icon rendered inside the button." },
      { name: "loading", type: "boolean", required: false, default: "false", description: "Displays a loading spinner and disables interaction." },
      { name: "disabled", type: "boolean", required: false, default: "false", description: "Disables the button." },
      { name: "onClick", type: "() => void", required: false, description: "Click handler." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Button } from "piece-ui";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Get Started</Button>
      <Button variant="ghost">Learn More</Button>
      <Button variant="danger">Delete</Button>
    </div>
  );
}`,
      },
      {
        label: "With sizes",
        code: `import { Button } from "piece-ui";

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
      },
      {
        label: "Loading state",
        code: `import { Button } from "piece-ui";

export default function Example() {
  return <Button loading>Processing...</Button>;
}`,
      },
    ],
  },
  {
    name: "ArticleCard",
    slug: "article-card",
    description:
      "A rich card component for displaying article previews with cover image, title, description, tags, author info, and publish date.",
    category: "content",
    props: [
      { name: "title", type: "string", required: true, description: "The article title." },
      { name: "description", type: "string", required: true, description: "Short preview text of the article." },
      { name: "image", type: "string", required: false, description: "URL of the cover image." },
      { name: "tags", type: "string[]", required: false, description: "Array of topic tags." },
      { name: "date", type: "string", required: false, description: "Publication date string." },
      { name: "href", type: "string", required: false, description: "Link URL for the card." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { ArticleCard } from "piece-ui";

export default function Example() {
  return (
    <ArticleCard
      title="Building with React Server Components"
      description="A deep dive into how RSC changes the way we think about data fetching."
      image="/cover.jpg"
      tags={["React", "Next.js", "Performance"]}
      date="March 2025"
      href="/blog/rsc"
    />
  );
}`,
      },
    ],
  },
  {
    name: "ProjectCard",
    slug: "project-card",
    description:
      "A showcase card for portfolio projects with scroll-driven animations powered by Framer Motion, project image, tech stack tags, and action links.",
    category: "content",
    badge: "new",
    peerDeps: ["framer-motion"],
    props: [
      { name: "title", type: "string", required: true, description: "Project name." },
      { name: "description", type: "string", required: true, description: "Project description." },
      { name: "image", type: "string", required: false, description: "Project screenshot or preview image." },
      { name: "tags", type: "string[]", required: false, description: "Tech stack or feature tags." },
      { name: "liveUrl", type: "string", required: false, description: "Link to live demo." },
      { name: "repoUrl", type: "string", required: false, description: "Link to source repository." },
      { name: "motionValue", type: "MotionValue<number>", required: false, description: "Framer Motion value for scroll-driven effects." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { ProjectCard } from "piece-ui";

export default function Example() {
  return (
    <ProjectCard
      title="Piece UI"
      description="A modern component library built with React, TypeScript, and Tailwind CSS."
      image="/project-preview.jpg"
      tags={["React", "TypeScript", "Tailwind"]}
      liveUrl="https://piece-ui.dev"
      repoUrl="https://github.com/aymaneatigui/piece-ui"
    />
  );
}`,
      },
    ],
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description:
      "An accessible, customizable checkbox component with support for indeterminate state, custom labels, and keyboard navigation.",
    category: "form",
    props: [
      { name: "checked", type: "boolean", required: false, description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", required: false, description: "Initial uncontrolled checked state." },
      { name: "onChange", type: "(checked: boolean) => void", required: false, description: "Change handler." },
      { name: "disabled", type: "boolean", required: false, default: "false", description: "Disables the checkbox." },
      { name: "label", type: "string", required: false, description: "Label text displayed next to checkbox." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Checkbox } from "piece-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-2">
      <Checkbox label="I agree to the terms" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Disabled option" disabled />
    </div>
  );
}`,
      },
    ],
  },
  {
    name: "ConfirmDialog",
    slug: "confirm-dialog",
    description:
      "A modal confirmation dialog with customizable title, message, and action buttons. Perfect for destructive actions that need user confirmation.",
    category: "form",
    props: [
      { name: "open", type: "boolean", required: true, description: "Controls dialog visibility." },
      { name: "onClose", type: "() => void", required: true, description: "Called when dialog should close." },
      { name: "onConfirm", type: "() => void", required: true, description: "Called when user confirms the action." },
      { name: "title", type: "string", required: false, default: '"Are you sure?"', description: "Dialog heading." },
      { name: "message", type: "string", required: false, description: "Descriptive body text." },
      { name: "confirmLabel", type: "string", required: false, default: '"Confirm"', description: "Text for the confirm button." },
      { name: "cancelLabel", type: "string", required: false, default: '"Cancel"', description: "Text for the cancel button." },
      { name: "variant", type: '"danger" | "primary"', required: false, default: '"danger"', description: "Visual style of the confirm button." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { useState } from "react";
import { ConfirmDialog, Button } from "piece-ui";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete Account
      </Button>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          console.log("Confirmed!");
          setOpen(false);
        }}
        title="Delete Account"
        message="This action cannot be undone. All your data will be permanently removed."
        confirmLabel="Yes, Delete"
      />
    </>
  );
}`,
      },
    ],
  },
  {
    name: "ContactForm",
    slug: "contact-form",
    description:
      "A complete contact form with name, email, and message fields. Includes built-in validation, loading state, and success/error handling.",
    category: "form",
    props: [
      { name: "onSubmit", type: "(data: FormData) => Promise<void>", required: true, description: "Async submit handler that receives form data." },
      { name: "successMessage", type: "string", required: false, default: '"Message sent!"', description: "Message shown on successful submission." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes for the form wrapper." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { ContactForm } from "piece-ui";

export default function Example() {
  const handleSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
    });
    if (!res.ok) throw new Error("Failed to send");
  };

  return (
    <ContactForm
      onSubmit={handleSubmit}
      successMessage="Thanks! I'll get back to you soon."
    />
  );
}`,
      },
    ],
  },
  {
    name: "CustomBtn",
    slug: "custom-btn",
    description:
      "A highly flexible button component that accepts custom colors, background, padding, and icon. Ideal for branded or themed button variations.",
    category: "form",
    props: [
      { name: "color", type: "string", required: false, description: "Text color (CSS value or Tailwind class)." },
      { name: "bgColor", type: "string", required: false, description: "Background color." },
      { name: "padding", type: "string", required: false, description: "Custom padding." },
      { name: "icon", type: "React.ReactNode", required: false, description: "Icon element to render alongside text." },
      { name: "children", type: "React.ReactNode", required: true, description: "Button label content." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { CustomBtn } from "piece-ui";

export default function Example() {
  return (
    <CustomBtn
      color="#00f0ff"
      bgColor="transparent"
      padding="12px 24px"
    >
      Custom Button
    </CustomBtn>
  );
}`,
      },
    ],
  },
  {
    name: "Footer",
    slug: "footer",
    description:
      "A full-featured footer with animated marquee text, navigation links, social icons, and copyright info. Highly customizable with prop-driven content.",
    category: "layout",
    props: [
      { name: "marqueeText", type: "string", required: false, description: "Text content for the scrolling marquee animation." },
      { name: "navLinks", type: "{ label: string; href: string }[]", required: false, description: "Footer navigation links." },
      { name: "socialLinks", type: "SocialLink[]", required: false, description: "Array of social media link objects." },
      { name: "copyright", type: "string", required: false, description: "Copyright text." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Footer } from "piece-ui";

export default function Example() {
  return (
    <Footer
      marqueeText="Available for freelance work · Let's build something great ·"
      navLinks={[
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ]}
      socialLinks={[
        { platform: "github", href: "https://github.com/username" },
        { platform: "twitter", href: "https://twitter.com/username" },
      ]}
      copyright="© 2025 Your Name. All rights reserved."
    />
  );
}`,
      },
    ],
  },
  {
    name: "Header",
    slug: "header",
    description:
      "A responsive site header with logo, navigation links, and an integrated mobile hamburger menu. Supports custom route highlighting for active states.",
    category: "layout",
    props: [
      { name: "logo", type: "string | React.ReactNode", required: false, description: "Logo content — text string or custom element." },
      { name: "routes", type: "{ label: string; href: string }[]", required: false, description: "Navigation links." },
      { name: "activePath", type: "string", required: false, description: "Current path for active link highlighting." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Header } from "piece-ui";

export default function Example() {
  return (
    <Header
      logo="MyApp"
      routes={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ]}
      activePath="/about"
    />
  );
}`,
      },
    ],
  },
  {
    name: "MenuButton",
    slug: "menu-button",
    description:
      "An animated hamburger menu toggle button. Used internally by Header but available standalone for custom mobile navigation patterns.",
    category: "layout",
    props: [
      { name: "isOpen", type: "boolean", required: true, description: "Controls the open/closed animation state." },
      { name: "onClick", type: "() => void", required: true, description: "Toggle handler." },
      { name: "color", type: "string", required: false, description: "Icon color." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { useState } from "react";
import { MenuButton } from "piece-ui";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <MenuButton
      isOpen={open}
      onClick={() => setOpen(!open)}
      color="#00f0ff"
    />
  );
}`,
      },
    ],
  },
  {
    name: "NoiseBackground",
    slug: "noise-background",
    description:
      "A utility component that renders a subtle noise texture overlay. Use it to add depth and texture to sections without distracting from content.",
    category: "animation",
    props: [
      { name: "opacity", type: "number", required: false, default: "0.05", description: "Opacity of the noise texture (0–1)." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes." },
      { name: "children", type: "React.ReactNode", required: false, description: "Content to render on top of the noise." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { NoiseBackground } from "piece-ui";

export default function Example() {
  return (
    <NoiseBackground opacity={0.06} className="rounded-xl p-8 bg-zinc-900">
      <h2>Section with texture</h2>
      <p>Content sits on top of the noise layer.</p>
    </NoiseBackground>
  );
}`,
      },
    ],
  },
  {
    name: "SocialIcon",
    slug: "social-icon",
    description:
      "An SVG icon component supporting 8+ social platforms: GitHub, Twitter/X, LinkedIn, Behance, Dribbble, Instagram, YouTube, and Website.",
    category: "content",
    props: [
      { name: "platform", type: '"github" | "twitter" | "linkedin" | "behance" | "dribbble" | "instagram" | "youtube" | "website"', required: true, description: "The social platform to render an icon for." },
      { name: "size", type: "number", required: false, default: "24", description: "Icon size in pixels." },
      { name: "color", type: "string", required: false, description: "Icon fill/stroke color." },
      { name: "href", type: "string", required: false, description: "Wraps the icon in an anchor tag when provided." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { SocialIcon } from "piece-ui";

export default function Example() {
  return (
    <div className="flex gap-4">
      <SocialIcon platform="github" href="https://github.com" size={24} />
      <SocialIcon platform="twitter" href="https://twitter.com" size={24} />
      <SocialIcon platform="linkedin" href="https://linkedin.com" size={24} />
      <SocialIcon platform="dribbble" href="https://dribbble.com" size={24} />
    </div>
  );
}`,
      },
    ],
  },
  {
    name: "SectionWrapper",
    slug: "section-wrapper",
    description:
      "A responsive layout wrapper for page sections. Handles max-width constraints and consistent horizontal padding across breakpoints.",
    category: "layout",
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "Section content." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes." },
      { name: "as", type: "React.ElementType", required: false, default: '"section"', description: "HTML element to render as." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { SectionWrapper } from "piece-ui";

export default function Example() {
  return (
    <SectionWrapper>
      <h2>Section Title</h2>
      <p>Section content goes here...</p>
    </SectionWrapper>
  );
}`,
      },
    ],
  },
  {
    name: "SectionHeader",
    slug: "section-header",
    description:
      "A section heading with an optional index number, title, subtitle, and a 'View All' action link. Consistent typography across all sections.",
    category: "layout",
    props: [
      { name: "number", type: "string | number", required: false, description: "Section index number (e.g. '01')." },
      { name: "title", type: "string", required: true, description: "Main heading text." },
      { name: "subtitle", type: "string", required: false, description: "Optional secondary description." },
      { name: "viewAllHref", type: "string", required: false, description: "URL for the 'View All' link." },
      { name: "viewAllLabel", type: "string", required: false, default: '"View All"', description: "Text for the 'View All' link." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { SectionHeader } from "piece-ui";

export default function Example() {
  return (
    <SectionHeader
      number="02"
      title="Recent Projects"
      subtitle="A selection of work I've shipped recently."
      viewAllHref="/projects"
      viewAllLabel="All Projects"
    />
  );
}`,
      },
    ],
  },
  {
    name: "SpotlightReveal",
    slug: "spotlight-reveal",
    description:
      "An advanced Framer Motion animation component that reveals content with a spotlight effect on hover. Creates a dramatic, interactive entrance for cards and sections.",
    category: "animation",
    badge: "new",
    peerDeps: ["framer-motion"],
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "Content to apply the spotlight effect to." },
      { name: "size", type: "number", required: false, default: "300", description: "Size of the spotlight radius in pixels." },
      { name: "color", type: "string", required: false, default: '"rgba(0,240,255,0.1)"', description: "Spotlight color." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { SpotlightReveal } from "piece-ui";

export default function Example() {
  return (
    <SpotlightReveal
      color="rgba(0, 240, 255, 0.12)"
      size={350}
      className="rounded-xl border border-zinc-800 p-8"
    >
      <h3>Hover over me</h3>
      <p>The spotlight follows your cursor.</p>
    </SpotlightReveal>
  );
}`,
      },
    ],
  },
  {
    name: "Line1",
    slug: "line1",
    description:
      "A decorative animated vertical line component for the left side of a layout. Fades in on mount with a smooth animation.",
    category: "animation",
    props: [
      { name: "color", type: "string", required: false, description: "Line color (CSS value)." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Line1 } from "piece-ui";

export default function Example() {
  return (
    <div className="relative min-h-screen">
      <Line1 color="rgba(0,240,255,0.4)" />
      {/* Your page content */}
    </div>
  );
}`,
      },
    ],
  },
  {
    name: "Line2",
    slug: "line2",
    description:
      "A decorative animated vertical line component for the right side of a layout. Mirrors Line1 for symmetrical framing.",
    category: "animation",
    props: [
      { name: "color", type: "string", required: false, description: "Line color (CSS value)." },
      { name: "className", type: "string", required: false, description: "Additional CSS classes." },
    ],
    examples: [
      {
        label: "Basic usage",
        code: `import { Line2 } from "piece-ui";

export default function Example() {
  return (
    <div className="relative min-h-screen">
      <Line2 color="rgba(0,240,255,0.4)" />
      {/* Your page content */}
    </div>
  );
}`,
      },
    ],
  },
];

export const categories = [
  { label: "All", value: "all" },
  { label: "Form", value: "form" },
  { label: "Layout", value: "layout" },
  { label: "Content", value: "content" },
  { label: "Animation", value: "animation" },
] as const;

export function getComponent(slug: string): ComponentDoc | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentDoc[] {
  if (category === "all") return components;
  return components.filter((c) => c.category === category);
}
