interface IconData {
  svg: string;
}
type IconRegistry = Record<string, IconData>;

let _cxGlobalIconsStore: IconRegistry = {};

/**
 * Add icons to the global icon store to make them available for use in the `<e-icon>/Icon` component.
 *
 * You can add multiple icons at once. The key of the input object is the icon name corresponding to the `name`
 * prop in the `<e-icon>/Icon` component. While this can be any string, it is recommended to use the icon name as the key.
 * Some selectors depend on the `filledColor` icons to keep `filledColor` in the icon name to work properly.
 * @param icons - An object of icon names and their corresponding SVG data.
 *
 * @example
 * ```ts
 * import { addIcons } from '@computas/designsystem/icon';
 *
 * // import the icon data (SVG string)
 * import download from '@computas/designsystem/icon/svg/download?raw';
 *
 * addIcons({
 *  download: { svg: download }
 * });
 * ```
 */
export const addIcons = (icons: IconRegistry) => {
  _cxGlobalIconsStore = { ..._cxGlobalIconsStore, ...icons };
};

export const getIcon = (name: string): IconData | undefined => {
  // Need to check `name` because it can be `undefined` on initial render depending on property vs attribute
  if (name && !_cxGlobalIconsStore[name]) {
    throw new Error(
      `Icon "${name}" not found. Ensure the icon name is correct and that it has been added to the global icon store using \`addIcons\`.`,
    );
  }
  return _cxGlobalIconsStore[name];
};
