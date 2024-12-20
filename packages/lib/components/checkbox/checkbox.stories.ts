import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Checkbox',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
<label class="cx-checkbox">
  <input type="checkbox" />
  <div class="cx-checkbox__checkmark"></div>
  Check me
</label>
  `,
};

export const CheckboxList: StoryObj = {
  render: () => html`
<fieldset class="cx-checkbox-list">
  <label class="cx-checkbox">
    <input type="checkbox" />
    <div class="cx-checkbox__checkmark"></div>
    Checkbox no 1
  </label>
  <label class="cx-checkbox">
    <input type="checkbox" />
    <div class="cx-checkbox__checkmark"></div>
    Checkbox no 2
  </label>
  <label class="cx-checkbox">
    <input type="checkbox" />
    <div class="cx-checkbox__checkmark"></div>
    Checkbox no 3
  </label>
</fieldset>
  `,
};

export const Indeterminate: StoryObj = {
  render: () => html`
<label class="cx-checkbox cx-checkbox--indeterminate">
  <input type="checkbox" />
  <div class="cx-checkbox__checkmark"></div>
  Check me
</label>
  `,
};

export const ErrorState: StoryObj = {
  render: () => html`
<label class="cx-checkbox cx-checkbox--invalid">
  <input type="checkbox" />
  <div class="cx-checkbox__checkmark"></div>
  Check me
</label>
  `,
};
