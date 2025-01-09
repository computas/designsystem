import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../icon';

export default {
  title: 'Components/Input',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__input-container">
    <input />
  </div>
</label>
  `,
};

export const WithPlaceholder: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__placeholder">Example: Use me instead of placeholder</div>
  <div class="cx-form-field__input-container">
    <input />
  </div>
</label>
  `,
};

export const Focused: StoryObj = {
  render: () => html`
    <label class="cx-form-field cx-form-field--focused">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__input-container">
    <input />
  </div>
</label>
  `,
};

export const Invalid: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">E-mail</div>
  <div class="cx-form-field__input-container">
    <input aria-describedby="error-text" type="email" />
  </div>
  <div class="cx-form-field__error" aria-live="polite" id="error-text">
    <cx-icon name="error-circle" size="6"></cx-icon>
    Please provide a valid e-mail
  </div>
</label>
    `,
};

export const TextArea: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__input-container">
    <textarea></textarea>
  </div>
</label>
  `,
};

export const InputWithoutLabel: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label cx-visually-hidden">This label is read by a screen reader</div>
  <div class="cx-form-field__placeholder">The label above is read by a screen reader</div>
  <div class="cx-form-field__input-container">
    <input />
  </div>
</label>
  `,
};
