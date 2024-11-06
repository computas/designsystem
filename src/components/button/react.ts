import { createComponent } from '@lit/react';
import * as React from 'react';

import { Button } from './index';

export const CxButton = createComponent({
  tagName: 'cx-button',
  elementClass: Button,
  react: React,
});
