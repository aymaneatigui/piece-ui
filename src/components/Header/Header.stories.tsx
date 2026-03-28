import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoAlt: "MyBrand",
    currentPath: "/",
  },
};

export const WithLogo: Story = {
  args: {
    logoSrc: "https://via.placeholder.com/120x32/0d0d0d/f5f4f4?text=Logo",
    logoAlt: "MyBrand",
    currentPath: "/projects",
  },
};

export const ActiveProjects: Story = {
  args: {
    logoAlt: "Portfolio",
    currentPath: "/projects",
    routes: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
    ],
  },
};
