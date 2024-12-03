import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
  @property()
  header = '';

  // @state()
  content: Element[] = [];

  private onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this.content = slot.assignedElements({ flatten: true }).map((e) => e.cloneNode(true) as Element);
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
