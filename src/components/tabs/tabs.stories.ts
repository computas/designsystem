import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Tabs',
} satisfies Meta;

export const Primary: StoryObj = {
  render: () => html`
    <a href="https://designsystem.computas.com" class="cx-tab-link">This is an option</a>
    <a href="https://designsystem.computas.com" class="cx-tab-link cx-tab-link--active">This is another option</a>
    <a href="https://designsystem.computas.com" class="cx-tab-link">This is the final option</a>
  `,
};
