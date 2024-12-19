import { createComponent } from '@lit/react';
import * as React from 'react';

import { CheckboxContainer } from './index';

export const CxCheckboxContainer = createComponent({
  tagName: 'cx-checkbox-container',
  elementClass: CheckboxContainer,
  react: React,
});
