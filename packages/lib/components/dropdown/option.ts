import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import a11yStyles from '../../global-css/a11y.css?inline';
import { valueContext } from './dropdown-context';

@customElement('cx-option')
export class Option extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    css`
     
    `,
  ];

  @consume({ context: valueContext, subscribe: true })
  selectedValue = '';

  render() {
    return html`

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-option': Option;
  }
}
