import type { Meta, StoryObj } from "@storybook/react";
import { NoiseBackground } from "./NoiseBackground";

const meta = {
  title: "Components/NoiseBackground",
  component: NoiseBackground,
  tags: ["autodocs"],
} satisfies Meta<typeof NoiseBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="relative h-48 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1017]">
      <NoiseBackground {...args} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-sm text-(--light-gray)">Content over noise texture</p>
      </div>
    </div>
  ),
  args: { opacity: 0.04 },
};

export const HighOpacity: Story = {
  render: (args) => (
    <div className="relative h-48 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1017]">
      <NoiseBackground {...args} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-sm text-(--light-gray)">High opacity noise</p>
      </div>
    </div>
  ),
  args: { opacity: 0.12 },
};
