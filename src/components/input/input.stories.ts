import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Input',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__input-container">
    <input placeholder="Placeholder" />
  </div>
</label>
  `,
};

export const Invalid: StoryObj = {
  render: () => html`
    <label class="cx-form-field cx-form-field--invalid">
      <div class="cx-form-field__label">My label</div>
      <div class="cx-form-field__input-container">
        <input placeholder="Placeholder" />
      </div>
      <div class="cx-form-field__subscript">
        Error text
      </div>
    </label>
    `,
};

export const TextArea: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label">My label</div>
  <div class="cx-form-field__input-container">
    <textarea placeholder="Placeholder"></textarea>
  </div>
</label>
  `,
};

export const InputWithoutLabel: StoryObj = {
  render: () => html`
    <label class="cx-form-field">
  <div class="cx-form-field__label cx-visually-hidden">This label is read by a screen reader</div>
  <div class="cx-form-field__input-container">
    <input placeholder="This input has no label" />
  </div>
</label>
  `,
};