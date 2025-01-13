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
<cx-dropdown label="Countries">
  <cx-option value="norway">Norway</cx-option>
  <cx-option value="romania">Romania</cx-option>
  <cx-option value="denmark">Denmark</cx-option>
</cx-dropdown>
  `,
};

export const WithValue: StoryObj = {
  render: () => html`
<cx-dropdown label="Countries" value="romania">
  <cx-option value="norway">Norway</cx-option>
  <cx-option value="romania">Romania</cx-option>
  <cx-option value="denmark">Denmark</cx-option>
</cx-dropdown>
  `,
};

export const Required: StoryObj = {
  render: () => html`
<cx-dropdown label="Countries" required invalidText="Please provide a value">
  <cx-option value="norway">Norway</cx-option>
  <cx-option value="romania">Romania</cx-option>
  <cx-option value="denmark">Denmark</cx-option>
</cx-dropdown>
  `,
};
