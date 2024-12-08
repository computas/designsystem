import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const cxTheme = create({
  base: 'light',

  brandUrl: 'https://designsystem.computas.com',
  brandImage: 'https://designsystem.computas.com/computas-logo.svg',
  brandTarget: '_self',

  colorPrimary: '#003459',
  colorSecondary: '#477494',

  // Text colors
  textColor: '#003459',
  textInverseColor: '#f7f7f8',
});

addons.setConfig({
  theme: cxTheme,
});
