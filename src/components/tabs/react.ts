import { createComponent } from '@lit/react';
import * as React from 'react';

import { Tab, TabContent, TabGroup } from './index';

export const CxTabGroup = createComponent({
  tagName: 'cx-tab-group',
  elementClass: TabGroup,
  react: React,
});

export const CxTab = createComponent({
  tagName: 'cx-tab',
  elementClass: Tab,
  react: React,
});

export const CxTabContent = createComponent({
  tagName: 'cx-tab-content',
  elementClass: TabContent,
  react: React,
});
