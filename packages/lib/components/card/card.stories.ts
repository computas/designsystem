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
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Title',
    image: 'https://picsum.photos/500/220',
  },
  render: (args) => html`
    <cx-card title="${args.title}" image="${args.image}" href="${args.href || ''}">
      <span slot="subtitle">14:00 - 16:00 • Oslo, Norway</span>
      <span slot="other">Other content</span>
    </cx-card>
  `,
};