import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  render: (args) => html`<c-button ?primary=${args.primary != null}>This is a button</c-button>`,
  argTypes: {
    primary: { control: 'boolean', type: 'boolean' },
  },
  args: {
    primary: false,
  },
} satisfies Meta;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: StoryObj = {};
