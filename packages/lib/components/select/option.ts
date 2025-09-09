import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { InputModeDetector } from '../shared/inputModeDetector';
import type { OptionValue } from './types';

@customElement('cx-option')
export class Option extends LitElement {
  static styles = [
    css`
      button {
        --cx-gradient-highlight: var(--cx-color-background-primary);
        --cx-gradient-background: var(--cx-color-background-primary);

        display: flex;
        gap: var(--cx-spacing-2);
        align-items: center;
        color: var(--cx-color-text-primary);
        border: none;
        padding: var(--cx-spacing-5) var(--cx-spacing-6);
        line-height: 1rem;
        font-family: inherit;
        font-size: 0.875rem;
        font-weight: 400;
        width: 100%;
        background-image: linear-gradient(62deg, var(--cx-gradient-highlight) 28.33%, var(--cx-gradient-background) 127.11%);
        transition: 200ms ease;
        transition-property: color, --cx-gradient-highlight, --cx-gradient-background;

        &:where(:focus, :hover) {
          outline: none;
        }

        &:not(:disabled) {
          cursor: pointer;

          &:is(:not(.input-mode-mouse):focus, .input-mode-mouse:hover) {
            --cx-gradient-highlight: var(--cx-color-grey-700);
            --cx-gradient-background: var(--cx-color-blue);
            color: var(--cx-color-text-static-light);
          }
        }

        &.active {
          --cx-gradient-highlight: var(--cx-color-background-accent-5);
          --cx-gradient-background: var(--cx-color-background-accent-5);
        }
      }
    `,
  ];

  @state()
  selectedValue: OptionValue = '';

  @property({ type: String, reflect: true })
  value: OptionValue | null = null;

  @query('button')
  buttonElement!: HTMLButtonElement;

  private inputModeDetector = new InputModeDetector(this);

  private onSelect() {
    const event = new CustomEvent('option-select', {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    });

    this.dispatchEvent(event);
  }

  render() {
    const isSelected = !!this.selectedValue && this.selectedValue === this.value;

    return html`
      <button
        role="option"
        @click=${this.onSelect}
        aria-selected=${isSelected}
        class=${classMap({ active: isSelected, 'input-mode-mouse': this.inputModeDetector.inputMode === 'mouse' })}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-option': Option;
  }
}
