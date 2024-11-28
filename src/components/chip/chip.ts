import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('cx-chip')
export class Chip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .cx-chip {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--cx-spacing-05) var(--cx-spacing-1);
      gap: var(--cx-spacing-1);
      border-radius: var(---cx-radius-mini);

      color: var(---cx-color-text-static-dark);
    }
  `;

  /**
   * @description Controls the variant of the chip
   * @default "display"
   */
  @property()
  variant: 'display' | 'display-soft' | 'removable' = 'display';

  /**
   * @description Controls the color of the chip
   * @default "purple"
   */
  @property()
  color: 'purple' | 'dark-blue' | 'blue' | 'yellow' | 'green' | 'red' = 'purple';

  private colorClasses = {
    purple: this.color === 'purple',
    'dark-blue': this.color === 'dark-blue',
    blue: this.color === 'blue',
    yellow: this.color === 'yellow',
    green: this.color === 'green',
    red: this.color === 'red',
  };

  render() {
    if (this.variant === 'removable') {
      return html`
        <button
          type="button"
          class=${classMap({ 'cx-chip': true, soft: true, interactive: true, ...this.colorClasses })}
        >
          <slot></slot>
        </button>
      `;
    }

    return html`
      <div
        class=${classMap({
          'cx-chip': true,
          regular: this.variant === 'display',
          soft: this.variant === 'display-soft',
          ...this.colorClasses,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-chip': Chip;
  }
}
