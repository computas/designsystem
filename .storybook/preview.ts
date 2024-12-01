import type { Preview } from '@storybook/web-components';
import '../global-styles.css';

/**
 * Enforce light theme on the docs. We do this since it's
 * complicated to add a dynamic theme to Storybook.
 */
const storybookDocs = document.getElementById('storybook-docs');
storybookDocs?.classList.add('cx-theme-light');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default preview;
