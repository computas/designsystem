import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './tooltip';

export default {
  title: 'Components/Tooltip',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <cx-tooltip>
      <button slot="trigger" class="cx-btn__primary">Hover me</button>

      <p>This is a tooltip!</p>
    </cx-tooltip>
  `,
};
