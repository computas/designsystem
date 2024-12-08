import { createComponent } from '@lit/react';
import * as React from 'react';

import { Tab, TabGroup } from './index';

export const CxTabGroup = createComponent({
  tagName: 'cx-tab-group',
  elementClass: TabGroup,
  react: React,
  events: {
    onActiveTabIndexChange: 'activeTabIndexChange',
  },
});

export const CxTab = createComponent({
  tagName: 'cx-tab',
  elementClass: Tab,
  react: React,
});
