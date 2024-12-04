<h1 align="center">Computas design system</h1>

<p align="center" style="max-width: 70ch; margin-inline: auto">The Computas design system contains building blocks and patterns for creating beautiful and consistent UI's that complies with the Computas design language.</p>

<div align="center">
  <a href="https://badge.fury.io/js/@computas%2Fdesignsystem"><img src="https://badge.fury.io/js/@computas%2Fdesignsystem.svg" alt="npm version" height="18"></a>
</div>
<br>

## How to get started

1. Install Bun to manage dependencies and run scripts: https://bun.sh
2. Install all dependencies:

```shell
bun install
```

3. Start the dev server by running

```shell
bun run dev
```

## Project structure

The assets provided by the designsystem can roughly be divided into two groups:

- Global CSS that consists of tokens, CSS utility classes and components composed of pure CSS
- Web components that are imported separately. These are more "complex" since they usually have a larger DOM and may possibly contain state

The global CSS is located in the `src/global-css` folder, in addition to the CSS components that are located in the `src/components` folder. The web components are also located in the `src/components` folder, since we do not wish to distinguish components based on implementation details. The workflow for contributing is different for these two groups, and are described below:

### Global CSS file structure

Global CSS is located in the `src/global-css` folder, or the CSS components in the `src/components` folder. If you added or removed files, please update the imports in the `global-styles.css` file. This file works as the entry point for the global CSS. Remember that the order of imports matter in CSS.

### Web component file structure

The web components are located in the `src/components` folder, where each component have its own folder. In general, a web component has the following files:

- `<component-name>.stories.ts`: Contains the documentation for the component. We use Storybook for documenting our components.
- `<component-name>.ts`: Contains the implementation of the component. If your component is composed of multiple smaller components, they should each have their own file.
- `index.ts`: The entry point for the component. This file should import all of the files that together establish our component. In most cases, this is a single import.
- `package.json`: We provide a `package.json` file for each component. This enables each component to have control of their own build system. We use Bun Workspaces to build all components in parallell from root, assuming that the component has a `build` script.
- `react.ts`: Serves as the entry point for the React component

## How to add new features

1. Create a branch from the `main` branch and start development. Follow the file structure described above to write your implementation in the correct fashion.
2. Try to add your submissions through small, focused and well described commits. This makes it easier to do QA. Use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) syntax if you feel like doing so.
3. When you're done implementing your feature, create a pull request for your branch to be merged into the `main` branch. This will automatically run linting, and will create a preview URL of your feature branch. At least one approval is required to merge the pull request.
4. When a reviewer has approved your pull request; merge your branch and delete it.

## How to add new icons

1. Add the new or changed SVG icon to the folder `/src/components/icon/svg`.
2. Ensure that the icon has a width and height of 24px, and that fill and/or stroke is defined as `currentColor`.
3. Run the script `bun run create-icon-registry`.
