import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './popover';
import '../icon';

export default {
  title: 'Components/Popover',
  parameters: {
    actions: {
      handles: ['open', 'close'],
    },
  },
  decorators: [withActions],
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
<cx-popover>
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <p>Here comes the popover content</p>
</cx-popover>
  `,
};

export const WithHeader: StoryObj = {
  render: () => html`
<cx-popover header="Edit settings">
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <label class="cx-form-field cx-mb-4">
    <div class="cx-form-field__label">E-mail</div>
    <div class="cx-form-field__input-container">
      <input type="email">
    </div>
  </label>
  <div>
    <button class="cx-btn__secondary cx-btn__sm cx-mr-2">
      Cancel
    </button>
    <button class="cx-btn__primary cx-btn__sm">
      Save
    </button>
  </div>
</cx-popover>
  `,
};

export const Autofocus: StoryObj = {
  render: () => html`
<cx-popover autofocus>
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <p class="cx-mb-4">Would you like to save the changes?</p>
  <button class="cx-btn__secondary cx-btn__sm cx-mr-2">
    Cancel
  </button>
  <button class="cx-btn__primary cx-btn__sm">
    Save
  </button>
</cx-popover>
  `,
};

export const CloseOnClick: StoryObj = {
  render: () => html`
<cx-popover>
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <p class="cx-mb-4">Would you like to save the changes?</p>
  <button data-cx-popover-close class="cx-btn__secondary cx-btn__sm cx-mr-2">
    Cancel
  </button>
  <button data-cx-popover-close class="cx-btn__primary cx-btn__sm">
    Save
  </button>
</cx-popover>
  `,
};
