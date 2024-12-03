import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './tab';
import './tabs';

export default {
  title: 'Components/Tabs',
} satisfies Meta;

export const RegularTabs: StoryObj = {
  render: () => html`
    <button class="cx-tab-link">This is an option</button>
<button class="cx-tab-link cx-tab-link--active">This is another option</button>
<button class="cx-tab-link">This is the final option</button>
  `,
};

export const TabLink: StoryObj = {
  render: () => html`
    <a href="https://designsystem.computas.com" class="cx-tab-link">This is an option</a>
<a href="https://designsystem.computas.com" class="cx-tab-link cx-tab-link--active">This is another option</a>
<a href="https://designsystem.computas.com" class="cx-tab-link">This is the final option</a>
  `,
};

export const WebComponent: StoryObj = {
  render: () => html`
    <cx-tabs>
<cx-tab header="This is the first tab">
  <h2 class="cx-headline-jumbo">Heading</h2>
  <p>This is the content of the first tab</p>
</cx-tab>
<cx-tab header="Second tab">
  <button class="cx-btn">This is the content of the first tab</button>
</cx-tab>
<cx-tab header="Last tab">
<label class="cx-form-field">
  <div class="cx-form-field__label">E-mail</div>
  <div class="cx-form-field__input-container">
    <input aria-describedby="error-text" type="email" />
  </div>
  <div class="cx-form-field__error" aria-live="polite" id="error-text">
    Please provide a valid e-mail
  </div>
</label>
</cx-tab>
</cx-tabs>
  `,
};
