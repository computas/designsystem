import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cx-tab')
export class Tab extends LitElement {
  static styles = css`
    :host {
      display: block;
    }


  `;

  @property({ type: String, reflect: true })
  header = 'Tab title';

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab': Tab;
  }
}
