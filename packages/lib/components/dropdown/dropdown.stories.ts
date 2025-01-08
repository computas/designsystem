import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './dropdown';
import './option';
import '../icon';

export default {
  title: 'Components/Dropdown',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
<cx-dropdown value="norway" label="Countries">
  <cx-option value="norway">Norway</cx-option>
  <cx-option value="romania">Romania</cx-option>
  <cx-option value="denmark">Denmark</cx-option>
</cx-dropdown>
  `,
  parameters: {
    actions: {
      handles: ['change'],
    },
  },
  decorators: [withActions],
};
