import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import './chip';

export default {
  title: 'Components/Chip',
} satisfies Meta;

export const Default: StoryObj = {
  render: ({ variant }) => html`<cx-chip variant=${variant}>I'm a chip</cx-chip>`,
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
