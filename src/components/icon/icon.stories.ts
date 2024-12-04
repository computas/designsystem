import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './icon';
import './register-demo-icons';

export default {
  title: 'Components/Icon',
} satisfies Meta;

export const Sizing: StoryObj = {
  render: () => html`
    <cx-icon name="download" size="1" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="2" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="3" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="4" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="5" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="6" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="7" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="8" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="9" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="10" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="11" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="12" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="13" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="14" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="15" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="16" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="17" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="18" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="19" class="cx-mr-4"></cx-icon>
<cx-icon name="download" size="20"></cx-icon>
  `,
};

export const Color: StoryObj = {
  render: () => html`
    <style>
      .danger-icon {
        color: var(--cx-color-signal-danger);
      }
      
      .info-icon {
        color: var(--cx-color-signal-info);
      }
      
      .success-icon {
        color: var(--cx-color-signal-success);
      }
    </style>

    <cx-icon name="star-added" size="10" class="cx-mr-4 danger-icon"></cx-icon>
    <cx-icon name="star-added" size="10" class="cx-mr-4 info-icon"></cx-icon>
    <cx-icon name="star-added" size="10" class="cx-mr-4 success-icon"></cx-icon>
  `,
};
