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

  <p>Edit the settings below:</p>
  <label class="cx-form-field">
    <div class="cx-form-field__label">E-mail</div>
    <div class="cx-form-field__input-container">
      <input autofocus type="email">
    </div>
  </label>
</cx-popover>
  `,
};

export const WithHeader: StoryObj = {
  render: () => html`
<cx-popover header="Edit settings">
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <p>Edit the settings below:</p>
  <label class="cx-form-field">
    <div class="cx-form-field__label">E-mail</div>
    <div class="cx-form-field__input-container">
      <input autofocus type="email">
    </div>
  </label>
</cx-popover>
  `,
};

export const WithCloseBtn: StoryObj = {
  render: () => html`
<cx-popover header="Edit settings" withCloseBtn>
  <button slot="trigger" class="cx-btn__secondary cx-btn__icon">
    <cx-icon name="edit"></cx-icon>
  </button>

  <p>Edit the settings below:</p>
  <label class="cx-form-field">
    <div class="cx-form-field__label">E-mail</div>
    <div class="cx-form-field__input-container">
      <input autofocus type="email">
    </div>
  </label>
</cx-popover>
  `,
};
