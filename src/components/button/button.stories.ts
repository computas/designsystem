import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Button',
} satisfies Meta;

export const Primary: StoryObj = {
  render: () => html`
    <button class="cx-btn__primary cx-mr-6">Primary button</button>
    <button class="cx-btn__primary cx-btn__sm">Primary button small</button>`,
};

export const Secondary: StoryObj = {
  render: () => html`
    <button class="cx-btn__secondary cx-mr-6">Secondary button</button>
    <button class="cx-btn__secondary cx-btn__sm">Secondary button small</button>`,
};

export const Tertiary: StoryObj = {
  render: () => html`
    <button class="cx-btn__tertiary cx-mr-6">Tertiary button</button>
    <button class="cx-btn__tertiary cx-btn__sm">Tertiary button small</button>`,
};

export const Danger: StoryObj = {
  render: () => html`
    <button class="cx-btn__danger cx-mr-6">Danger button</button>
    <button class="cx-btn__danger cx-btn__sm">Danger button small</button>`,
};

export const Icon: StoryObj = {
  render: () => html`
    <button class="cx-btn__danger cx-btn__icon cx-mr-6">
      <div style="width: 24px; height: 24px; border: 1px solid black"></div>
    </button>
    <button class="cx-btn__danger cx-btn__icon cx-btn__sm">
      <div style="width: 16px; height: 16px; border: 1px solid black"></div>
    </button>
  `,
};
