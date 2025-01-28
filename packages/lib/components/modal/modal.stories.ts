import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Modal';

export default {
	title: 'Components/Modal',
} satisfies Meta;

export const Modal1: StoryObj = {
	render: () => html` <h1>Modal1</h1>`,
};

export const Modal2: StoryObj = {
	render: () => html` <h1>Modal2</h1>`,
};
