import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "Components/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { number: "01", title: "Projects" },
};

export const WithViewAll: Story = {
  args: {
    number: "02",
    title: "Articles",
    viewAllHref: "/articles",
    viewAllLabel: "View All",
  },
};

export const Services: Story = {
  args: {
    number: "03",
    title: "Services",
    viewAllHref: "/services",
    viewAllLabel: "See All Services",
  },
};
