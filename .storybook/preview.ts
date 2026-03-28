import type { Preview } from "@storybook/react";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0d0d0d" },
        { name: "light", value: "#f5f4f4" },
        { name: "gray", value: "#1a1a1a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
