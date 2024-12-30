import { provide } from '@lit/context';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { valueContext } from './dropdown-context';

import '../icon';

import formFieldStyles from '../form-field/form-field.css?inline';
import a11yStyles from '../../global-css/a11y.css?inline';
import type { Option } from './option';

@customElement('cx-dropdown')
export class Dropdown extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    unsafeCSS(formFieldStyles),
    css`
      label {
        cursor: pointer;
        min-width: 200px;
      }

      .trigger {
        anchor-name: --cx-trigger;
        border: none;
        display: flex;
        gap: var(--cx-spacing-2);
        justify-content: space-between;
        cursor: inherit;
        width: 100%;
        color: var(--cx-color-text-primary)
      }

      .trigger-content {
        display: flex;
        align-items: center;
        gap: var(--cx-spacing-2);
        line-height: 1rem;
      }

      [popover] {
        position-anchor: --cx-trigger;
        inset: unset;
        border: none;
        position: absolute;
        flex-direction: column;
        opacity: 0;
        translate: 0px 6px;
        top: anchor(bottom);
        left: anchor(left);
        width: anchor-size(width);
        transition: display 200ms allow-discrete, opacity 200ms ease, translate 200ms ease;
        border: 1px solid var(--cx-color-border-primary);
        background: var(--cx-color-background-primary);
        border-radius: var(--cx-radius-medium);
        padding: 0;
        margin-block: var(--cx-spacing-2);

        &:popover-open {
          display: flex;
          opacity: 1;
          translate: 0px;

          @starting-style {
            opacity: 0;
            translate: 0px -6px;
          }
        }
      }
  `,
  ];

  /**
   * @description The selected value
   * @default 0
   */
  @property({ type: String, reflect: true })
  @provide({ context: valueContext })
  value = '';

  @property({ type: String, reflect: true })
  label = '';

  @state()
  dropdownOptions: Option[] = [];

  private onSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const tabContent = slot.assignedElements({ flatten: true }) as Option[];
    this.dropdownOptions = tabContent;
  }

  render() {
    const selectedOption = this.dropdownOptions.find((option) => option.value === this.value);

    return html`
      <label class="cx-form-field">
        <div class="cx-form-field__label">${this.label}</div>
        <button class="cx-form-field__input-container trigger" popovertarget="cx-popover">
          <span class="trigger-content" .innerHTML=${selectedOption?.innerHTML ?? ''}></span>
          <cx-icon name="down"></cx-icon>
        </button>
        
        <div popover id="cx-popover">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
    </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-dropdown': Dropdown;
  }
}
