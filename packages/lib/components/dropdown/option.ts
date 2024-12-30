import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import a11yStyles from '../../global-css/a11y.css?inline';
import { valueContext } from './dropdown-context';

@customElement('cx-option')
export class Option extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    css`
      button {
        display: flex;
        gap: var(--cx-spacing-2);
        align-items: center;
        background: var(--cx-color-background-primary);
        color: var(--cx-color-text-primary);
        border: none;
        padding: var(--cx-spacing-6) var(--cx-spacing-6);
        line-height: 1rem;
        font-family: inherit;
        font-size: 0.875rem;
        font-weight: 400;
        width: 100%;

        &:not(:disabled) {
          cursor: pointer;
        }
      }
    `,
  ];

  @consume({ context: valueContext, subscribe: true })
  selectedValue = '';

  @property({ type: String, reflect: true })
  value: string | null = null;

  render() {
    const isSelected = !!this.selectedValue && this.selectedValue === this.value;
    return html`
      <button role="option" aria-selected=${isSelected} class=${classMap({ active: isSelected })}><slot></slot></button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-option': Option;
  }
}
