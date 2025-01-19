import { LitElement, css, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { addIcons } from '../icon';
import { close } from '../icon/iconRegistry';
addIcons(close);

import a11yStyles from '../../global-css/a11y.css?inline';
import buttonStyles from '../button/button.css?inline';

@customElement('cx-popover')
export class Popover extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    unsafeCSS(buttonStyles),
    css`
      .trigger {
        anchor-name: --trigger;
        display: inline-flex;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--cx-spacing-2);
        margin-bottom: var(--cx-spacing-4);
      }

      h1 {
        /** From typography */
        margin: 0;
        font-family: inherit;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1rem;
        color: var(--cx-color-text-primary);
      }

      button {
        background: transparent;
        border: none;
      }

      [hidden] {
        visibility: hidden;
      }

      [popover] {
        --translate-curve: ease;
        --translate-duration: 200ms;
        
        position-anchor: --trigger;
        position: absolute;
        opacity: 0;
        translate: 0px 6px;
        inset: unset;
        left: anchor(left);
        top: anchor(bottom);
        margin: var(--cx-spacing-2) 0 0 0;
        position-try-fallbacks: --top;
        transition:
          display 200ms allow-discrete,
          overlay 200ms allow-discrete,
          opacity 200ms ease,
          translate var(--translate-duration) var(--translate-curve);
        background: var(--cx-color-background-primary);
        border: 1px solid var(--cx-color-border-primary);
        border-radius: var(--cx-radius-medium);
        max-height: 500px;
        padding: var(--cx-spacing-6) var(--cx-spacing-8);

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

  @property({ type: String, reflect: true })
  header = '';

  @property({ type: Boolean, reflect: true })
  withCloseBtn = false;

  @query('[popover]')
  private popoverElement!: HTMLDivElement;

  @query('slot[name="trigger"]')
  private triggerWrapper!: HTMLSlotElement;

  private isOpen = false;

  private onTriggerClick() {
    if (this.isOpen) {
      this.popoverElement.hidePopover();
    } else {
      this.popoverElement.showPopover();
    }
  }

  private popoverToggle(event: ToggleEvent) {
    if (event.newState === 'open') {
      this.isOpen = true;
      this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
    } else {
      (this.triggerWrapper.assignedElements()[0] as HTMLElement).focus();
      this.isOpen = false;
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
  }

  render() {
    const closeBtn = html`
      <button ?hidden=${!this.withCloseBtn} class="cx-btn__tertiary cx-btn__icon" @click=${() => this.popoverElement.hidePopover()}>
        <cx-icon name="close"></cx-icon>
      </button>`;

    const header = this.header
      ? html`
      <header>
        <h1>${this.header}</h1>
        ${closeBtn}
      </header>`
      : nothing;

    return html`
      <slot class="trigger" name="trigger" @click=${this.onTriggerClick}></slot>

      <div popover @toggle=${this.popoverToggle}>
        ${header}
        
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-popover': Popover;
  }
}
