import { createComponent } from '@lit/react';
import * as React from 'react';

import { Tab, Tabs } from './index';

export const CxTabs = createComponent({
  tagName: 'cx-tabs',
  elementClass: Tabs,
  react: React,
});

export const CxTab = createComponent({
  tagName: 'cx-tab',
  elementClass: Tab,
  react: React,
});
