import { createComponent } from '@lit/react';
import * as React from 'react';

import { Button } from './index';

export const CButton = createComponent({
  tagName: 'c-button',
  elementClass: Button,
  react: React,
});
