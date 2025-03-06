import { createComponent } from '@lit/react';
import * as React from 'react';

import { Tooltip } from './index';

export const CxTooltip = createComponent({
  tagName: 'cx-tooltip',
  elementClass: Tooltip,
  react: React,
});
