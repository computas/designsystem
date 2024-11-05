<h1 align="center">Computas design system</h1>

<p align="center" style="max-width: 70ch; margin-inline: auto">The Computas design system contains building blocks and patterns for creating beautiful and consistent UI's that complies with the Computas design language.
<br>
[![npm version](https://badge.fury.io/js/@computas%2Fdesignsystem.svg)](https://badge.fury.io/js/@computas%2Fdesignsystem)

## Getting started

Install the library in your application using your preferred package manager.

```
npm install @computas/designsystem
```

Import the global styles at the top of your application.

```css
@import "@computas/designsystem/global-styles.css";
```

This style sheet adds an opinionated CSS reset to your page, adds all CSS variables to the root of your stylesheet, and provides the code for the CSS-based components.

Import the components that you need for your application.

```ts
// React
import { CxDropdown } from "@computas/designsystem/dropdown/react";
```

```ts
// Web Component (Angular, Vue etc.)
import "@computas/designsystem/dropdown";
```

Finally, use your component in your template.

```tsx
// React
<CxDropdown>...</CxDropdown>
```

```html
<!-- Web Component (Angular, Vue etc.) -->
<cx-dropdown> ... </cx-dropdown>
```
