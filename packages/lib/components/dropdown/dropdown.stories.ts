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
<cx-dropdown>
  <cx-option>Option 1</cx-option>
  <cx-option>Option 2</cx-option>
  <cx-option>Option 3</cx-option>
</cx-dropdown>
  `,
};
