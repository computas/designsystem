import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { addIcons } from '../icon';
import { edit } from '../icon/iconRegistry';

addIcons(edit);

export default {
  title: 'Components/Link',
} satisfies Meta;

export const Link: StoryObj = {
  render: () => html`
<a class="cx-link cx-mr-6" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Medium link</a>
<a class="cx-link cx-link--sm" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Small link</a>
  `,
};

export const InlineLink: StoryObj = {
  render: () => html`
<div class="cx-body-2">Lorem ipsum dolor sit amet <a class="cx-link cx-link--inline" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Inline link</a> consectetur. Justo orci pellentesque magna quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna quis.</div>
  `,
};

export const IconLink: StoryObj = {
  render: () => html`
<a class="cx-link" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Link med ikon <cx-icon name="edit"></cx-icon></a>
<a class="cx-link cx-link--sm" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Link med ikon <cx-icon name="edit"></cx-icon></a>
  `,
};
