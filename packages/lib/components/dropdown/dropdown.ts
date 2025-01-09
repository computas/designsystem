import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../icon';

import a11yStyles from '../../global-css/a11y.css?inline';
import formFieldStyles from '../form-field/form-field.css?inline';
import type { Option } from './option';
import type { OptionValue } from './types';
import { FormControl } from './formControl';

@customElement('cx-dropdown')
export class Dropdown extends FormControl(LitElement) {
  static styles = [
    unsafeCSS(a11yStyles),
    unsafeCSS(formFieldStyles),
    css`
      label {
        cursor: pointer;
        min-width: 200px;
        font: inherit;
      }

      .cx-form-field__input-container {
        anchor-name: --cx-trigger;
      }

      .trigger {
        border: none;
        background-color: transparent;
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--cx-spacing-2);
        cursor: inherit;
        width: 100%;
        color: var(--cx-color-text-primary);
        font: inherit;
        font-size: 1rem;
        font-weight: 400;

        &:focus {
          outline: none;
        }
      }

      cx-icon {
        transition: rotate 200ms ease;

        &.rotated {
          rotate: 180deg;
        }
      }

      .trigger-content {
        display: flex;
        align-items: center;
        gap: var(--cx-spacing-2);
        line-height: 1rem;
      }

      [popover] {
        --translate-curve: ease;
        --translate-duration: 200ms;
        
        position-anchor: --cx-trigger;
        position: absolute;
        opacity: 0;
        translate: 0px 6px;
        inset: unset;
        left: anchor(left);
        top: anchor(bottom);
        margin: var(--cx-spacing-2) 0 0 0;
        position-try-fallbacks: --top;
        width: anchor-size(width);
        transition:
          display 200ms allow-discrete,
          overlay 200ms allow-discrete,
          opacity 200ms ease,
          translate var(--translate-duration) var(--translate-curve);
        border: 1px solid var(--cx-color-border-primary);
        background: var(--cx-color-background-primary);
        border-radius: var(--cx-radius-medium);
        padding: 0;

        &:popover-open {
          --translate-curve: var(--ease-spring-3);
          --translate-duration: 500ms;
          opacity: 1;
          translate: 0px;

          @starting-style {
            opacity: 0;
            translate: 0px -6px;
          }
        }
      }

      @position-try --top {
        inset: unset;
        left: anchor(left);
        bottom: anchor(top);
        margin: 0 0 var(--cx-spacing-2) 0;
      }
  `,
  ];

  /**
   * @description The selected value. The selected value must be defined as a value for one of the options.
   * @default ''
   */
  @property({ type: String, reflect: true })
  value: OptionValue = '';

  /**
   * @description The dropdown label
   * @default ''
   */
  @property({ type: String, reflect: true })
  label = '';

  @state()
  private dropdownOptions: Option[] = [];

  @state()
  private isExpanded = false;

  connectedCallback(): void {
    /**
     * The options emit an "option-select" event. We listen for it
     * so that we can emit the selected value through the "change" event.
     */
    this.addEventListener('option-select', this.setNewValue);
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    this.removeEventListener('option-select', this.setNewValue);
    super.disconnectedCallback();
  }

  private onSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const tabContent = slot.assignedElements({ flatten: true }) as Option[];
    this.dropdownOptions = tabContent;
  }

  private onPopoverToggle(event: ToggleEvent) {
    if (event.newState === 'open') {
      this.isExpanded = true;

      this.addEventListener('keydown', this.onKeyDown);

      this.dropdownOptions.forEach((option) => {
        option.selectedValue = this.value;

        if (option.value === this.value && option.buttonElement) {
          option.buttonElement.focus();
          option.buttonElement.tabIndex = 0;
        } else if (option.buttonElement) {
          option.buttonElement.tabIndex = -1;
        }
      });
    } else {
      this.removeEventListener('keydown', this.onKeyDown);
      this.isExpanded = false;
      this.renderRoot.querySelector('button')?.focus();
    }
  }

  private onTriggerKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' && !this.isExpanded) {
      const buttonElement = event.target as HTMLButtonElement;
      buttonElement.click();
    }
  }

  private onKeyDown(event: KeyboardEvent) {
    const currentIndex = this.dropdownOptions.findIndex((option) => option.buttonElement?.tabIndex === 0);
    const currentFocusedButton = this.dropdownOptions.at(currentIndex)?.buttonElement;

    // Set the currently focused tabindex to -1
    if (currentFocusedButton) {
      currentFocusedButton.tabIndex = -1;
    }

    let newIndex = currentIndex;
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      newIndex = (currentIndex + 1) % this.dropdownOptions.length;
    } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      newIndex = (currentIndex - 1 + this.dropdownOptions.length) % this.dropdownOptions.length;
    } else if (event.code === `Key${event.key.toUpperCase()}`) {
      // Check if a key is pressed
      event.preventDefault();
      const firstMatchIndex = this.dropdownOptions.findIndex((opt) =>
        opt.innerText.toLowerCase().startsWith(event.key.toLowerCase()),
      );
      newIndex = firstMatchIndex === -1 ? currentIndex : firstMatchIndex;
    }

    const newFocusedButton = this.dropdownOptions.at(newIndex)?.buttonElement;
    if (newFocusedButton) {
      newFocusedButton.tabIndex = 0;
      newFocusedButton.focus();
    }
  }

  private setNewValue(newValueEvent: Event) {
    const newValue = (newValueEvent as CustomEvent).detail.value;
    const event = new CustomEvent('change', { bubbles: true, composed: true, detail: { value: newValue } });
    this.dispatchEvent(event);
    this.value = newValue;
    this.dropdownOptions.forEach((opt) => {
      opt.selectedValue = newValue;
    });

    const popoverElement = this.renderRoot.querySelector('[popover]') as HTMLElement;
    popoverElement.hidePopover();
  }

  render() {
    const selectedOption = this.dropdownOptions.find((option) => option.value === this.value);

    return html`
      <label class=${classMap({ 'cx-form-field': true, 'cx-form-field--focused': this.isExpanded })}>
        <div class="cx-form-field__label">${this.label}</div>
        <div class="cx-form-field__input-container">
          <button 
            class="trigger" 
            popovertarget="popover"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded=${this.isExpanded}
            aria-controls="popover"
            type="button"
            @keydown=${this.onTriggerKeyDown}
          >
            <span class="trigger-content" .innerHTML=${selectedOption?.innerHTML ?? ''}></span>
            <cx-icon name="down" class=${classMap({ rotated: this.isExpanded })}></cx-icon>
          </button>
        </div>
      </label>

      <div
        role="listbox"
        popover
        @toggle=${this.onPopoverToggle}
        id="popover"
        aria-multiselectable="false"
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-dropdown': Dropdown;
  }
}
