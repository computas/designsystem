import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  render: (args) =>
    html`<button>Regular button</button><computas-button ?primary=${args.primary != null}>This is a button</computas-button>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {};
