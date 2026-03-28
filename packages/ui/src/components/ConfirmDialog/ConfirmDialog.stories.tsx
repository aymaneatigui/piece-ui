import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";

const meta = {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "Are you sure?",
    message: "This action cannot be undone.",
    confirmLabel: "Confirm",
    danger: false,
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const Danger: Story = {
  args: {
    open: true,
    title: "Delete Project",
    message: "This will permanently delete the project and all its data.",
    confirmLabel: "Delete",
    danger: true,
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex h-screen items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="pill-btn pill-btn-primary"
        >
          Open Dialog
        </button>
        <ConfirmDialog
          open={open}
          title="Confirm Action"
          message="Are you sure you want to proceed?"
          confirmLabel="Yes, proceed"
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </div>
    );
  },
};
