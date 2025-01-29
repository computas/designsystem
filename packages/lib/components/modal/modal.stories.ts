import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Modal';

export default {
	title: 'Components/Modal',
} satisfies Meta;

export const Modal: StoryObj = {
	render: () => html` <cx-modal></cx-modal>`,
};
