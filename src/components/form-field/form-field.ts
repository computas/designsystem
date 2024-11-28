import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { formFieldStyles } from './styles';

let FORM_FIELD_UNIQUE_ID = 1;

@customElement('cx-form-field')
export class FormField extends LitElement {
  private uniqueId = `cx-form-field-${FORM_FIELD_UNIQUE_ID++}`;

  static styles = [formFieldStyles];

  /**
   * @description Controls the appearance of the button
   * @default "primary"
   */
  @property()
  state: 'invalid' | null = null;

  @property()
  placeholder = '';

  @property()
  label = '';

  private setUniqueId(event: Event) {
    const slotElement = event.target as HTMLSlotElement | null;

    if (slotElement) {
      const childElements = slotElement.assignedElements({ flatten: true });
      childElements.forEach((element) => element.setAttribute('id', this.uniqueId));
    }
  }

  render() {
    return html`
      <label for=${this.uniqueId}>
        <div class="label">${this.label}</div>
        <div class="placeholder">${this.placeholder}</div>
        <div class=${classMap({ invalid: this.state === 'invalid', 'input-container': true })}>
          <slot @slotchange=${this.setUniqueId}></slot>
        </div>
        <div class="subscript">
          <slot name="error"></slot>
        </div>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-form-field': FormField;
  }
}
