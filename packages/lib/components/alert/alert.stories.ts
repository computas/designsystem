import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './alert';

export default {
  title: 'Components/Alert',
} satisfies Meta;

export const AlertInfo: StoryObj = {
  render: () =>
    html` <cx-alert header=${'Info alert'}>
	Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna
	quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque
	magna quis.
</cx-alert>`,
};
export const AlertDanger: StoryObj = {
  render: () =>
    html` <cx-alert header=${'Danger alert'} priority=${'Danger'}>
	Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna
	quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque
	magna quis.
</cx-alert>`,
};
export const AlertWarning: StoryObj = {
  render: () =>
    html` <cx-alert header=${'Warning alert'} priority=${'Warning'}>
	Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna
	quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque
	magna quis.
</cx-alert>`,
};
export const AlertSuccess: StoryObj = {
  render: () =>
    html` <cx-alert header=${'Success alert'} priority=${'Success'}>
	Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque magna
	quis. Lorem ipsum dolor sit amet consectetur. Justo orci pellentesque
	magna quis.
</cx-alert>`,
};
