import { createComponent } from '@lit/react';
import * as React from 'react';

import { Button } from './button';

export const ComputasButton = createComponent({
  tagName: 'computas-button',
  elementClass: Button,
  react: React,
});
