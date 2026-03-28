import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";

const meta = {
  title: "Components/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-[420px] max-w-full p-6">
      <ContactForm />
    </div>
  ),
};

export const WithSubmitHandler: Story = {
  render: () => (
    <div className="w-[420px] max-w-full p-6">
      <ContactForm
        onSubmit={async (data) => {
          console.log("Form submitted:", data);
          await new Promise((r) => setTimeout(r, 1000));
        }}
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[420px] max-w-full p-6">
      <ContactForm
        onSubmit={async () => {
          await new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Server unavailable. Please try again later.")), 1000),
          );
        }}
      />
    </div>
  ),
};
