import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './toast';
import { showToast } from './showToast';

export default {
  title: 'Components/Toast',
} satisfies Meta;

export const Default: StoryObj = {
  render: ({ openInfoToast, openSuccessToast }) =>
    html`
<cx-toast></cx-toast>
<button class="cx-btn__primary cx-mr-4" @click=${openInfoToast}>
  Show info toast
</button>
<button class="cx-btn__secondary" @click=${openSuccessToast}>
  Show short success toast
</button>
`,
  args: {
    openInfoToast: () =>
      showToast({
        body: 'Lorem ipsum dolor sit amet consectetur.',
      }),
    openSuccessToast: () =>
      showToast({
        body: 'This is a toast displaying a successful message.',
        severity: 'success',
        duration: 2000,
      }),
  },
};
