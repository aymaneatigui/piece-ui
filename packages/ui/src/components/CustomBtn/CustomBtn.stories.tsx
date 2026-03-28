import type { Meta, StoryObj } from "@storybook/react";
import { CustomBtn } from "./CustomBtn";

const meta = {
  title: "Components/CustomBtn",
  component: CustomBtn,
  tags: ["autodocs"],
} satisfies Meta<typeof CustomBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: "Get Started", onClick: () => {} },
};

export const WithIcon: Story = {
  args: {
    text: "View Projects",
    onClick: () => {},
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    text: "Accent Button",
    onClick: () => {},
    color: "#00f0ff",
    bgColor: "rgba(0,240,255,0.08)",
    padding: "10px 24px",
  },
};
