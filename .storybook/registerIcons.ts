import { addIcons } from '../packages/lib/components/icon';
import * as cxIcons from '../packages/lib/components/icon/iconRegistry';

const iconObj = Object.entries(cxIcons)
  .map(([_, icon]) => icon as cxIcons.SVGIcon)
  .filter((icon) => !!icon.name && !!icon.data);

addIcons(...iconObj);
