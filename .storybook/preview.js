import '../src/styles/index.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true // Enable dark mode by default on all stories
    }
  },
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
      defaultViewport: 'someDefault'
    }
  }
};

export default preview;
