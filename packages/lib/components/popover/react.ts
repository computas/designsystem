import { createComponent } from '@lit/react';
import * as React from 'react';

import { Popover } from './index';

export const CxPopover = createComponent({
  tagName: 'cx-popover',
  elementClass: Popover,
  react: React,
  events: {
    onOpen: 'open',
    onClose: 'close',
  },
});
