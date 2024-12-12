import { createComponent } from '@lit/react';
import * as React from 'react';

import { Icon } from './index';

export const CxIcon = createComponent({
  tagName: 'cx-icon',
  elementClass: Icon,
  react: React,
});
