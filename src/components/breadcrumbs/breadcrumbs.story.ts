import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import './breadcrumbs';

export default {
  title: 'Components/Breadcrumbs (do not use this component)',
} satisfies Meta;

export const Default: StoryObj = {
  render: ({ variant }) => html`<cx-breadcrumbs variant=${variant}>I'm a breadcrumbs</cx-breadcrumbs>`,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Changes the visual appearance of the button',
    },
  },
  args: {
    variant: 'primary',
  },
};
