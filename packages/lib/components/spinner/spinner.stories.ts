import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './spinner';

export default {
  title: 'Components/Spinner',
} satisfies Meta;

export const Sizing: StoryObj = {
  render: () => html`
    <cx-spinner size="1" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="2" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="3" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="4" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="5" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="6" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="7" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="8" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="9" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="10" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="11" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="12" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="13" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="14" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="15" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="16" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="17" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="18" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="19" class="cx-mr-4"></cx-spinner>
    <cx-spinner size="20"></cx-spinner>
  `,
};

export const Color: StoryObj = {
  render: () => html`
    <style>
      .danger-spinner {
        color: var(--cx-color-signal-danger);
      }

      .info-spinner {
        color: var(--cx-color-signal-info);
      }

      .success-spinner {
        color: var(--cx-color-signal-success);
      }
    </style>

    <cx-spinner size="10" class="cx-mr-4 danger-spinner"></cx-spinner>
    <cx-spinner size="10" class="cx-mr-4 info-spinner"></cx-spinner>
    <cx-spinner size="10" class="cx-mr-4 success-spinner"></cx-spinner>
  `,
};
