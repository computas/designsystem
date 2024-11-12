import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('cx-button')
export class Button extends LitElement {
  static styles = css`
    button {
      border: none;
      background-color: var(--cx-color-background-accent-5);
      color: var(--cx-color-text-static-dark);
      padding: var(--cx-spacing-1) var(--cx-spacing-4);
      border-radius: 10rem;
      letter-spacing: 0.03em;
      display: grid;
      place-content: center;
      gap: var(--cx-spacing-1);
    }

    .secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
    }
  `;

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
    'cx-button': Button;
  }
}
