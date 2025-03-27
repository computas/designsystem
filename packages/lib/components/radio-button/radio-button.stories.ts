import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default { title: 'Components/Radio Buttons' } satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <label class="cx-radio-button">
      <input type="radio" name="default" />
      <div class="cx-radio-button__mark"></div>
      Radio button
    </label>
  `,
};

export const RadioButtonVertical: StoryObj = {
  render: () => html`
    <div class="cx-radio-button-vertical-list">
      <label class="cx-radio-button">
        <input type="radio" name="vertical" />
        <div class="cx-radio-button__mark"></div>
        Radio 1
      </label>

      <label class="cx-radio-button">
        <input type="radio" name="vertical" />
        <div class="cx-radio-button__mark"></div>
        Radio 2
      </label>

      <label class="cx-radio-button">
        <input type="radio" name="vertical" />
        <div class="cx-radio-button__mark"></div>
        Radio 3
      </label>
    </div>
  `,
};

export const RadioButtonHorizontal: StoryObj = {
  render: () => html`
    <div class="cx-radio-button-horizontal-list">
      <label class="cx-radio-button">
        <input type="radio" name="horizontal" />
        <div class="cx-radio-button__mark"></div>
        Radio 1
      </label>

      <label class="cx-radio-button">
        <input type="radio" name="horizontal" />
        <div class="cx-radio-button__mark"></div>
        Radio 2
      </label>

      <label class="cx-radio-button">
        <input type="radio" name="horizontal" />
        <div class="cx-radio-button__mark"></div>
        Radio 3
      </label>
    </div>
  `,
};

export const RadioButtonError: StoryObj = {
  render: () => html`
    <label class="cx-radio-button cx-radio-button--invalid">
      <input type="radio" name="error" />
      <div class="cx-radio-button__mark"></div>
      Radio button
    </label>
  `,
};
