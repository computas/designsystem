import { createComponent } from '@lit/react';
import * as React from 'react';

import { Dropdown, Option } from './index';

export const CxDropdown = createComponent({
  tagName: 'cx-dropdown',
  elementClass: Dropdown,
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
