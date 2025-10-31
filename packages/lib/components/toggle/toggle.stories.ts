import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Toggle',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
<label class="cx-toggle">
  <input type="checkbox">
  Toggle me
</label>
  `,
};
