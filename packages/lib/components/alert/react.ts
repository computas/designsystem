import { createComponent } from '@lit/react';
import * as React from 'react';

import { Alert } from './index';

export const CxAlert = createComponent({
	tagName: 'cx-alert',
	elementClass: Alert,
	react: React,
});
