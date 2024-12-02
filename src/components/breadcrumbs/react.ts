import { createComponent } from '@lit/react';
import * as React from 'react';

import { Breadcrumbs } from './index';

export const CxBreadcrumbs = createComponent({
  tagName: 'cx-breadcrumbs',
  elementClass: Breadcrumbs,
  react: React,
});
