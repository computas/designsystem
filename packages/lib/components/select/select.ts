import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../icon';

import { FormControl } from '../../shared/formControl';
import type { Option } from './option';
import type { OptionValue } from './types';

@customElement('cx-select')
export class Select extends FormControl(LitElement) {
  // `delegateFocus` allows focus to be passed to the select trigger when placed inside a `<label>` element.
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static styles = css`
    .trigger {
      anchor-name: --cx-trigger;

      border: none;
      background-color: transparent;
      padding: var(--cx-form-field__block-padding) var(--cx-form-field__inline-padding);
      width: 100%;
      min-width: 200px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--cx-spacing-2);
      cursor: inherit;
      
      color: var(--cx-color-text-primary);
      font: inherit;
      font-size: 1rem;
      font-weight: 400;
      outline: none;
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
      margin-block: var(--cx-spacing-2);
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
      top: unset;
      bottom: anchor(top);
    }
  `;

  /**
   * @description The selected value. The selected value must be defined as a value for one of the options.
   * @default ''
   */
  @property({ type: String, reflect: true })
  value: OptionValue = '';

  /**
   * @description Whether the select is required or not
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: String, reflect: true })
  'aria-describedby' = '';

  @state()
  private selectOptions: Option[] = [];

  @state()
  private isExpanded = false;

  @query('button')
  private selectTrigger!: HTMLButtonElement;

  @query('[popover]')
  private popoverElement!: HTMLDivElement;

  connectedCallback(): void {
    super.connectedCallback();

    /**
     * The options emit an "option-select" event. We listen for it
     * so that we can emit the selected value through the "change" event.
     */
    this.addEventListener('option-select', this.setNewValue);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('option-select', this.setNewValue);
  }

  private onSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const tabContent = slot.assignedElements({ flatten: true }) as Option[];
    this.selectOptions = tabContent;
  }

  private onPopoverToggle(event: ToggleEvent) {
    if (event.newState === 'open') {
      this.isExpanded = true;

      this.addEventListener('keydown', this.onKeyDown);

      if (this.value) {
        this.selectOptions.forEach((option) => {
          option.selectedValue = this.value;

          if (option.value === this.value) {
            option.buttonElement.focus();
            option.buttonElement.tabIndex = 0;
          } else {
            option.buttonElement.tabIndex = -1;
          }
        });
      } else {
        // Focus the first option on open, if no value is selected
        this.selectOptions.forEach((option, index) => {
          if (index === 0) {
            option.buttonElement.focus();
            option.buttonElement.tabIndex = 0;
          } else {
            option.buttonElement.tabIndex = -1;
          }
        });
      }
    } else {
      this.removeEventListener('keydown', this.onKeyDown);
      this.isExpanded = false;
      this.updateValidState();
    }
  }

  private onTriggerKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' && !this.isExpanded) {
      event.preventDefault();
      this.popoverElement.showPopover();
    }
  }

  private updateValidState() {
    if (!this.isExpanded && this.required && !this.value) {
      this.selectTrigger.setCustomValidity('A value is required');
      this.elementInternals.setValidity({ valueMissing: true }, 'A value is required');
    } else {
      this.selectTrigger.setCustomValidity('');
      this.elementInternals.setValidity({});
    }
  }

  private onKeyDown(event: KeyboardEvent) {
    const currentIndex = this.selectOptions.findIndex((option) => option.buttonElement.tabIndex === 0);
    const currentFocusedButton = this.selectOptions.at(currentIndex)?.buttonElement;

    // Set the currently focused tabindex to -1
    if (currentFocusedButton) {
      currentFocusedButton.tabIndex = -1;
    }

    let newIndex = currentIndex;
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      newIndex = (currentIndex + 1) % this.selectOptions.length;
    } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      newIndex = (currentIndex - 1 + this.selectOptions.length) % this.selectOptions.length;
    } else if (event.code === `Key${event.key.toUpperCase()}`) {
      // Focus on the first option that starts with the pressed letter
      event.preventDefault();
      const firstMatchIndex = this.selectOptions.findIndex((opt) =>
        opt.innerText.toLowerCase().startsWith(event.key.toLowerCase()),
      );
      newIndex = firstMatchIndex === -1 ? currentIndex : firstMatchIndex;
    } else if (event.key === 'Tab') {
      // Close the select if the user tabs out
      this.popoverElement.hidePopover();
    } else if (event.key === 'Escape') {
      // Close select and focus the trigger
      this.popoverElement.hidePopover();
      this.selectTrigger.focus();
    }

    const newFocusedButton = this.selectOptions.at(newIndex)?.buttonElement;
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
    this.selectOptions.forEach((opt) => {
      opt.selectedValue = newValue;
    });

    /** Updates form validity, and sets the value on a form, if it exists. */
    this.updateValidState();
    this.elementInternals.setFormValue(newValue);

    this.popoverElement.hidePopover();
    this.selectTrigger.focus();
  }

  /**
   * We need to stop click events on the popover, since they will bubble to the
   * label element that wraps the select-component and trigger an "showPopover" event.
   */
  private stopOptionClickEventPropagation(event: PointerEvent) {
    event.stopPropagation();
  }

  render() {
    const selectedOption = this.selectOptions.find((option) => option.value === this.value);

    return html`
      <button 
        class="trigger" 
        popovertarget="popover"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this.isExpanded}
        aria-controls="popover"
        aria-describedby=${this['aria-describedby']}
        id=${this.id}
        required=${this.required}
        value=${this.value}
        @keydown=${this.onTriggerKeyDown}
        @blur=${this.updateValidState}
      >
        <span class="trigger-content" .innerHTML=${selectedOption?.innerHTML ?? ''}></span>
        <cx-icon name="down" class=${classMap({ rotated: this.isExpanded })}></cx-icon>
      </button>

      <div
        role="listbox"
        popover="manual"
        @toggle=${this.onPopoverToggle}
        id="popover"
        aria-multiselectable="false"
        @click=${this.stopOptionClickEventPropagation}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-select': Select;
  }
}
