import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    defaultName: 'Overview',
  },
  async viteFinal(config, { configType }) {
    if (config.optimizeDeps) {
      // customize the Vite config here
      config.optimizeDeps.include = [...(config.optimizeDeps?.include ?? []), '@storybook/web-components'];
      config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html'];
    }

    // return the customized config
    return config;
  },
};
export default config;
