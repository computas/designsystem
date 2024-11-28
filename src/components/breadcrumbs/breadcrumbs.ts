import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('cx-breadcrumbs')
export class Breadcrumbs extends LitElement {
  static styles = css``;

  /**
   * @description Controls the appearance of the button
   * @default "primary"
   */
  @property()
  variant: 'primary' | 'secondary' = 'primary';

  render() {
    return html`
      <button
        type="button"
        class=${classMap({ secondary: this.variant === 'secondary' })}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-breadcrumbs': Breadcrumbs;
  }
}
