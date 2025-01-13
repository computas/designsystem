import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../icon';

export default {
  title: 'Components/Link',
} satisfies Meta;

export const Link: StoryObj = {
  render: () => html`
  <div class="cx-body-2">Lorem ipsum dolor sit amet <a class="cx-link" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">basic link</a> consectetur. Justo orci pellentesque magna quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna quis.</div>
  `,
};

export const StandaloneLink: StoryObj = {
  render: () => html`
<a class="cx-link cx-link--standalone cx-mr-6" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Standalone link</a>
<a class="cx-link cx-link--standalone cx-mr-6" href="https://designsystem.computas.com/?path=/docs/basics-colors--overview">Standalone link with icon <cx-icon name="edit"></cx-icon></a>
  `,
};
