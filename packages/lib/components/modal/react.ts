import { createComponent } from '@lit/react';
import * as React from 'react';

import { Modal } from './index';

export const CxModal = createComponent({
	tagName: 'cx-modal',
	elementClass: Modal,
	react: React,
});
