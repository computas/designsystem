import { createComponent } from '@lit/react';
import * as React from 'react';

import { Option, Select } from './index';

export const CxSelect = createComponent({
  tagName: 'cx-select',
  elementClass: Select,
  react: React,
  events: {
    onChange: 'change',
  },
});

export const CxOption = createComponent({
  tagName: 'cx-option',
  elementClass: Option,
  react: React,
});
