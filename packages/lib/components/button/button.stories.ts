import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../icon';

export default {
  title: 'Components/Button',
} satisfies Meta;

export const Primary: StoryObj = {
  render: () => html`
    <button class="cx-btn__primary cx-btn__lg cx-mr-6">Primary button large</button>
<button class="cx-btn__primary cx-mr-6">Primary button</button>
<button class="cx-btn__primary cx-btn__sm cx-mr-6">Primary button small</button>
<br /><br />
<button class="cx-btn__primary cx-btn__icon cx-btn__lg cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__primary cx-btn__icon cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__primary cx-btn__icon cx-btn__sm">
  <cx-icon name="edit"></cx-icon>
</button>
  `,
};

export const Secondary: StoryObj = {
  render: () => html`
    <button class="cx-btn__secondary cx-btn__lg cx-mr-6">Secondary button large</button>
<button class="cx-btn__secondary cx-mr-6">Secondary button</button>
<button class="cx-btn__secondary cx-btn__sm">Secondary button small</button>
<br /><br />
<button class="cx-btn__secondary cx-btn__icon cx-btn__lg cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__secondary cx-btn__icon cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__secondary cx-btn__icon cx-btn__sm">
  <cx-icon name="edit"></cx-icon>
</button>
`,
};

export const Tertiary: StoryObj = {
  render: () => html`
    <button class="cx-btn__tertiary cx-btn__lg cx-mr-6">Tertiary button large</button>
<button class="cx-btn__tertiary cx-mr-6">Tertiary button</button>
<button class="cx-btn__tertiary cx-btn__sm">Tertiary button small</button>
<br /><br />
<button class="cx-btn__tertiary cx-btn__icon cx-btn__lg cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__tertiary cx-btn__icon cx-mr-6">
  <cx-icon name="edit"></cx-icon>
</button>
<button class="cx-btn__tertiary cx-btn__icon cx-btn__sm">
  <cx-icon name="edit"></cx-icon>
</button>
`,
};

export const Danger: StoryObj = {
  render: () => html`
    <button class="cx-btn__danger cx-btn__lg cx-mr-6">Danger button large</button>
<button class="cx-btn__danger cx-mr-6">Danger button</button>
<button class="cx-btn__danger cx-btn__sm">Danger button small</button>`,
};

export const WithIcon: StoryObj = {
  render: () => html`
<button class="cx-btn__primary cx-btn__lg cx-mr-6">Button large with icon<cx-icon name="edit"></cx-icon></button>
<button class="cx-btn__secondary cx-mr-6">Button with icon<cx-icon name="edit"></cx-icon></button>
<button class="cx-btn__tertiary cx-btn__sm cx-mr-6">Button small with icon<cx-icon name="edit"></cx-icon></button>
<br /><br />`,
};
