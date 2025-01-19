import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './dropdown';
import './option';
import '../icon';

export default {
  title: 'Components/Dropdown',
  parameters: {
    actions: {
      handles: ['change'],
    },
  },
  decorators: [withActions],
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
<label class="cx-form-field">
  <div class="cx-form-field__label">Countries</div>
  <div class="cx-form-field__input-container">
    <cx-dropdown>
      <cx-option value="norway">Norway</cx-option>
      <cx-option value="romania">Romania</cx-option>
      <cx-option value="denmark">Denmark</cx-option>
    </cx-dropdown>
  </div>
</label>
  `,
};

export const WithValue: StoryObj = {
  render: () => html`
<label class="cx-form-field">
  <div class="cx-form-field__label">Countries</div>
  <div class="cx-form-field__input-container">
    <cx-dropdown value="romania">
      <cx-option value="norway">Norway</cx-option>
      <cx-option value="romania">Romania</cx-option>
      <cx-option value="denmark">Denmark</cx-option>
    </cx-dropdown>
  </div>
</label>
  `,
};

export const Required: StoryObj = {
  render: () => html`
<label class="cx-form-field">
  <div class="cx-form-field__label">Countries</div>
  <div class="cx-form-field__input-container">
    <cx-dropdown required aria-describedby="error-text">
      <cx-option value="norway">Norway</cx-option>
      <cx-option value="romania">Romania</cx-option>
      <cx-option value="denmark">Denmark</cx-option>
    </cx-dropdown>
  </div>

  <div class="cx-form-field__error" aria-live="polite" id="error-text">
    <cx-icon name="error-circle" size="6"></cx-icon>
    Please provide a value
  </div>
</label>
  `,
};
