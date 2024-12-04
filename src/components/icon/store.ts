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
    throw new Error(
      `Icon "${name}" not found. Ensure the icon name is correct and that it has been added to the global icon store using \`addIcons\`.`,
    );
  }
  return _cxGlobalIconsStore[name ?? ''];
};
