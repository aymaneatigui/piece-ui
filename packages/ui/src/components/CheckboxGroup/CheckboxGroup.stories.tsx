import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: DAYS,
    defaultValue: ["Monday", "Tuesday", "Thursday", "Sunday"],
  },
};

export const Sizes: Story = {
  args: { options: DAYS.slice(0, 3) },
  render: () => (
    <div className="flex gap-12">
      {(["sm", "md", "lg"] as const).map((size) => (
        <CheckboxGroup key={size} options={DAYS.slice(0, 3)} defaultValue={["Monday"]} size={size} />
      ))}
    </div>
  ),
};

export const Theming: Story = {
  args: { options: DAYS.slice(0, 4) },
  render: () => (
    <CheckboxGroup
      options={DAYS.slice(0, 4)}
      defaultValue={["Monday", "Wednesday"]}
      accentColor="#10b981"
      size="lg"
      weight="semibold"
    />
  ),
};

export const WithDisabledItems: Story = {
  args: {
    options: [
      "Monday",
      "Tuesday",
      { label: "Wednesday", disabled: true },
      { label: "Thursday", disabled: true },
      "Friday",
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
        <CheckboxGroup options={DAYS} value={days} onChange={setDays} />
        <p className="text-sm text-gray-400">Working days: {days.join(", ") || "none"}</p>
      </div>
    );
  },
};
