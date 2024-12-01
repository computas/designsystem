import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/web-components';
import '../global-styles.css';

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
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'cx-theme-light',
        dark: 'cx-theme-dark',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
