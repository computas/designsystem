import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Chips',
} satisfies Meta;

export const Display: StoryObj = {
  render: () => html`
    <div class="cx-chip cx-chip__purple cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__dark-blue cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__blue cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__yellow cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__green cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__red">Chip text</div>
  `,
};

export const DisplaySoft: StoryObj = {
  render: () => html`
    <div class="cx-chip cx-chip__soft cx-chip__purple cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__soft cx-chip__dark-blue cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__soft cx-chip__blue cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__soft cx-chip__yellow cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__soft cx-chip__green cx-mr-6">Chip text</div>
<div class="cx-chip cx-chip__soft cx-chip__red">Chip text</div>
  `,
};

export const Removable: StoryObj = {
  render: () => html`
    <button class="cx-chip cx-chip__purple cx-mr-6">Chip text</button>
<button class="cx-chip cx-chip__dark-blue cx-mr-6">Chip text</button>
<button class="cx-chip cx-chip__blue cx-mr-6">Chip text</button>
<button class="cx-chip cx-chip__yellow cx-mr-6">Chip text</button>
<button class="cx-chip cx-chip__green cx-mr-6">Chip text</button>
<button class="cx-chip cx-chip__red">Chip text</button>
  `,
};
