import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ChipGroup } from "./ChipGroup";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const meta = {
  title: "Components/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: DAYS,
    defaultValue: ["Monday", "Tuesday", "Thursday", "Saturday"],
  },
};

export const SingleSelect: Story = {
  args: {
    options: DAYS,
    defaultValue: ["Monday"],
    multiple: false,
  },
};

export const Sizes: Story = {
  args: { options: DAYS.slice(0, 3) },
  render: () => (
    <div className="flex flex-col gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <ChipGroup key={size} options={DAYS.slice(0, 3)} defaultValue={["Monday"]} size={size} />
      ))}
    </div>
  ),
};

export const Theming: Story = {
  args: { options: DAYS.slice(0, 4) },
  render: () => (
    <ChipGroup
      options={DAYS.slice(0, 4)}
      defaultValue={["Monday", "Wednesday"]}
      accentColor="#10b981"
      weight="bold"
      size="lg"
    />
  ),
};

export const WithDisabledItems: Story = {
  args: {
    options: [
      "Monday",
      "Tuesday",
      { label: "Saturday", disabled: true },
      { label: "Sunday", disabled: true },
    ],
    defaultValue: ["Monday"],
  },
};

export const Controlled: Story = {
  args: { options: DAYS },
  render: () => {
    const [days, setDays] = useState<string[]>(["Monday", "Tuesday"]);
    return (
      <div className="flex flex-col gap-4">
        <ChipGroup options={DAYS} value={days} onChange={setDays} />
        <p className="text-sm text-gray-400">Working days: {days.join(", ") || "none"}</p>
      </div>
    );
  },
};
