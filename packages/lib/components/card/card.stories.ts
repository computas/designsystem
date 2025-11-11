import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card.js';

const meta: Meta = {
  title: 'Components/Card',
  component: 'cx-card',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    image: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Card Title',
    image: 'https://picsum.photos/500/220',
  },
  render: (args) => html`
    <cx-card title="${args.title}" image="${args.image}">
      <span slot="subtitle">14:00 - 16:00 • Oslo, Norway</span>
      <div slot="body">
        <p>Additional body content</p>
      </div>
    </cx-card>
  `,
};
