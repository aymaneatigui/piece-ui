import type { Meta, StoryObj } from "@storybook/react";
import { SectionWrapper } from "./SectionWrapper";

const meta = {
  title: "Components/SectionWrapper",
  component: SectionWrapper,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullHeight: false,
    children: (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="text-(--light-gray)">Section content goes here</p>
      </div>
    ),
  },
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
    children: (
      <div className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="text-(--light-gray)">Full-height section</p>
      </div>
    ),
  },
};
