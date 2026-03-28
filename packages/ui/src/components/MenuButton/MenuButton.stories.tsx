import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MenuButton } from "./MenuButton";

const meta = {
  title: "Components/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: { isMenuOpen: false, setIsMenuOpen: () => {} },
};

export const Open: Story = {
  args: { isMenuOpen: true, setIsMenuOpen: () => {} },
};

export const Interactive: Story = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <p className="text-xs text-(--light-gray)">{isMenuOpen ? "Open" : "Closed"}</p>
      </div>
    );
  },
};
