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
    subtitle1: { control: 'text' },
    subtitle2: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle1: '14:00 - 16:00',
    subtitle2: 'Oslo, Norway',
    image: 'https://picsum.photos/500/220',
    imageAlt: 'Image',
  },
  render: (args) => html`
    <cx-card 
      title="${args.title}"
      subtitle1="${args.subtitle1}"
      subtitle2="${args.subtitle2}"
      image="${args.image}"
      image-alt="${args.imageAlt}"
    >
    </cx-card>
  `,
};