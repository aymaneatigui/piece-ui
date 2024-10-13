import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Story } from "@storybook/blocks";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Primary.args = {};
