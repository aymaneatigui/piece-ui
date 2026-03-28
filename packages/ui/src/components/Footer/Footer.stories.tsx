import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Aymane Atigui",
    email: "hello@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com", iconKey: "github" },
      { name: "X (Twitter)", url: "https://twitter.com", iconKey: "twitter" },
      { name: "LinkedIn", url: "https://linkedin.com", iconKey: "linkedin" },
    ],
  },
};

export const FullyCustom: Story = {
  args: {
    name: "Jane Doe",
    email: "jane@example.com",
    tagline: "Crafting delightful digital experiences.",
    location: "Based in Paris, France",
    year: 2026,
    socials: [
      { name: "Dribbble", url: "https://dribbble.com", iconKey: "dribbble" },
      { name: "Behance", url: "https://behance.com", iconKey: "behance" },
    ],
    navItems: [
      { href: "/", label: "Home" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
};
