import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('cx-button')
export class Button extends LitElement {
  static styles = css`
    button {
      border: none;
      background-color: var(--c-color-secondary);
      color: var(--c-color-text-static-dark);
      padding: var(--c-spacing-sm) var(--c-spacing-xl);
      border-radius: 10rem;
      letter-spacing: 0.03em;
      display: grid;
      place-content: center;
      gap: var(--c-spacing-sm);
    }

    .secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
    }
  `;

  @property({ type: Boolean, reflect: true })
  primary = false;

  render() {
    return html`
    <button
      type="button"
      class=${classMap({ 'storybook-button--primary': this.primary, 'storybook-button--secondary': !this.primary })}
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
