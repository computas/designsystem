import { createComponent } from '@lit/react';
import * as React from 'react';

import { Toast } from './index';

export const CxToast = createComponent({
  tagName: 'cx-toast',
  elementClass: Toast,
  react: React,
});
