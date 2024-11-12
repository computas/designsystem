import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import './button';

export default {
  title: 'Examples/Button',
} satisfies Meta;

export const Default: StoryObj = {
  render: ({ Variant }) => html`<cx-button variant=${Variant}>I'm a button</cx-button>`,
  argTypes: {
    Variant: { control: 'radio', options: ['primary', 'secondary'] },
  },
  args: {
    Variant: 'primary',
  },
};
