import type { Meta, StoryObj } from "@storybook/react";
import { SpotlightReveal } from "./SpotlightReveal";

const meta = {
  title: "Components/SpotlightReveal",
  component: SpotlightReveal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SpotlightReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder images from picsum
export const Default: Story = {
  args: {
    baseImage: "https://picsum.photos/seed/base/800/500",
    revealImage: "https://picsum.photos/seed/reveal/800/500",
    alt: "Spotlight reveal demo",
    className: "h-[300px] w-[480px] rounded-2xl",
    spotlightSize: 280,
  },
};

export const SmallSpotlight: Story = {
  args: {
    baseImage: "https://picsum.photos/seed/base/800/500",
    revealImage: "https://picsum.photos/seed/reveal/800/500",
    alt: "Small spotlight",
    className: "h-[300px] w-[480px] rounded-2xl",
    spotlightSize: 120,
  },
};

export const LargeSpotlight: Story = {
  args: {
    baseImage: "https://picsum.photos/seed/base/800/500",
    revealImage: "https://picsum.photos/seed/reveal/800/500",
    alt: "Large spotlight",
    className: "h-[300px] w-[480px] rounded-2xl",
    spotlightSize: 400,
  },
};
