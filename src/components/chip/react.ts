import { createComponent } from '@lit/react';
import * as React from 'react';

import { Chip } from './index';

export const CxChip = createComponent({
  tagName: 'cx-chip',
  elementClass: Chip,
  react: React,
});
