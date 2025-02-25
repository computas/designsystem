import type { IconName, SVGIcon } from './iconRegistry';

type IconRegistry = Record<string, SVGIcon>;

const _cxGlobalIconsStore: IconRegistry = {};

/**
 * Add icons to the global icon store to make them available for use in the `<cx-icon>/CxIcon` component.
 * You can add multiple icons at once.
 *
 * @example
 * ```ts
 * import { addIcons } from '@computas/designsystem/icon';
 * import { bin, download } from '@computas/designsystem/icon/iconRegistry';
 *
 * addIcons(bin, download);
 * ```
 */
export const addIcons = (...icons: SVGIcon[]) => {
  icons.forEach((icon) => {
    _cxGlobalIconsStore[icon.name] = icon;
  });
};

export const getIcon = (name: IconName | null): SVGIcon | undefined => {
  // Need to check `name` because it can be `undefined` on initial render depending on property vs attribute
  if (name && !_cxGlobalIconsStore[name]) {
    console.error(
      `The icon "${name}" was not found. Ensure that the icon name is correct and that it has been added to the global icon store by calling the \`addIcons\` function.
Check out the documentation for further details: https://designsystem.computas.com/?path=/docs/components-icon--overview, or ask for support in the Slack channel #designsystemet.`,
    );
  }
  return _cxGlobalIconsStore[name ?? ''];
};
