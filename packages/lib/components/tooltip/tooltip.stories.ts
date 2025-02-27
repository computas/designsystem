import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './tooltip';

export default {
  title: 'Components/Tooltip',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <cx-tooltip>
      <button
        aria-describedby="tooltip-content"
        slot="trigger"
        class="cx-btn__primary"
      >
        Hover or focus me
      </button>

      <p id="tooltip-content">This is a tooltip!</p>
    </cx-tooltip>
  `,
};
