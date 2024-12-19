import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('cx-checkbox-container')
export class CheckboxContainer extends LitElement {
  render() {
    return html`
      <style>

      </style>
      <label class="cx-checkbox-container" id="checkbox-container-render-root">
        <div class="cx-checkbox-container__checkmark-container"></div>
      </label>
    `;
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    const inputContainer = this.getElementsByTagName('label').item(0);
    return inputContainer ?? this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-checkbox-container': CheckboxContainer;
  }
}
