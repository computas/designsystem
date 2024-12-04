import { iconNames } from './icon-names';
import { addIcons } from './store';

iconNames.forEach(async (iconName) => {
  const icon = await import(`./svg/${iconName}.svg?raw`);
  addIcons({ [iconName]: { svg: icon.default } });
});
