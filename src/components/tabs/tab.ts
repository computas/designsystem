import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('cx-tab')
export class Tab extends LitElement {
  static styles = css`
    :host {
      display: none;
    }
  `;

  /**
   * @description Provides the tab header
   */
  @property({ type: String, reflect: true })
  forContent = '';

  @state()
  headerContent = '';

  private onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this.headerContent = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent)
      .join(', ');
  }

  render() {
    return html`<slot @slotchange=${this.onSlotChange}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab': Tab;
  }
}
