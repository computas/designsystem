import { consume, provide } from '@lit/context';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { valueContext } from './dropdown-context';

import formFieldStyles from '../form-field/form-field.css?inline';
import a11yStyles from '../../global-css/a11y.css?inline';

@customElement('cx-dropdown')
export class Dropdown extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    unsafeCSS(formFieldStyles),
    css`
    
  `,
  ];

  /**
   * @description The selected value
   * @default 0
   */
  @property({ type: String, reflect: true })
  @provide({ context: valueContext })
  value = '';

  render() {
    return html`
      <div class=${classMap({
        'tab-content-before': true,
      })}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-dropdown': Dropdown;
  }
}
