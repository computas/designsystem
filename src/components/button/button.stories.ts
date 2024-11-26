import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import './button';

export default {
  title: 'Components/Button (do not use this component)',
} satisfies Meta;

export const Default: StoryObj = {
  render: ({ variant }) => html`<cx-button variant=${variant}>I'm a button</cx-button>`,
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
