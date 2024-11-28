import { createComponent } from '@lit/react';
import * as React from 'react';

import { FormField } from './index';

export const CxFormField = createComponent({
  tagName: 'cx-form-field',
  elementClass: FormField,
  react: React,
});
