import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './icon';

export default {
  title: 'Components/Icon',
} satisfies Meta;

export const Sizing: StoryObj = {
  render: () => html`
    <cx-icon name="settings" size="1" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="2" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="3" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="4" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="5" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="6" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="7" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="8" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="9" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="10" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="11" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="12" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="13" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="14" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="15" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="16" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="17" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="18" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="19" class="cx-mr-4"></cx-icon>
<cx-icon name="settings" size="20"></cx-icon>
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

<cx-icon name="star-filled" size="10" class="cx-mr-4 danger-icon"></cx-icon>
<cx-icon name="star-filled" size="10" class="cx-mr-4 info-icon"></cx-icon>
<cx-icon name="star-filled" size="10" class="cx-mr-4 success-icon"></cx-icon>
<button class="cx-btn__secondary">
  Go forward
  <cx-icon name="forward" size="4"></cx-icon>
</button>
  `,
};
