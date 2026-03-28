import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcon, SOCIAL_ICON_KEYS } from "./SocialIcon";

const meta = {
  title: "Components/SocialIcon",
  component: SocialIcon,
  tags: ["autodocs"],
  argTypes: {
    iconKey: {
      control: "select",
      options: SOCIAL_ICON_KEYS.map((k) => k.key),
    },
  },
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: { iconKey: "github", className: "h-6 w-6" },
};

export const Twitter: Story = {
  args: { iconKey: "twitter", className: "h-6 w-6" },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      {SOCIAL_ICON_KEYS.map(({ key, label }) => (
        <div key={key} className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60">
            <SocialIcon iconKey={key} className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] text-white/40">{label}</span>
        </div>
      ))}
    </div>
  ),
};
