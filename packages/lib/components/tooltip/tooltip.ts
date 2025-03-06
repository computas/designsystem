import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('cx-tooltip')
export class Tooltip extends LitElement {
  static styles = [
    css`
      .trigger {
        anchor-name: --trigger;
        display: inline-flex;
      }

      [popover] {
        position-anchor: --trigger;
        position-area: bottom center;
        position-try: --top-center, --center-left, --center-right;
        position: absolute;
        margin: var(--cx-spacing-2) 0 0 0;
        opacity: 0;

        transition: all 200ms ease-in-out allow-discrete;

        background-color: var(--cx-color-background-primary);
        color: var(--cx-color-text-primary);
        border-radius: var(--cx-radius-small);
        border: 1px solid var(--cx-color-border-primary);
        padding: var(--cx-spacing-4) var(--cx-spacing-6);
        max-width: 400px;

        //copied from typography cx-text-4 class
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.6;

        &:popover-open {
          transition-delay: 250ms;
          opacity: 1;

          @starting-style {
            opacity: 0;
          }
        }
      }

      @position-try --top-center {
        position-area: top center;
        margin: 0 0 var(--cx-spacing-2) 0;
      }

      @position-try --center-left {
        position-area: center left;
        margin: 0 var(--cx-spacing-2) 0 0;
      }

      @position-try --center-right {
        position-area: center right;
        margin: 0 0 0 var(--cx-spacing-2);
      }
    `,
  ];

  @query('[popover]')
  private popoverElement!: HTMLDivElement;

  private isTouchDevice() {
    return navigator.maxTouchPoints > 0;
  }

  private showTooltip() {
    if (this.isTouchDevice()) {
      return;
    }

    this.popoverElement.showPopover();
  }
  private hideTooltip() {
    if (this.isTouchDevice()) {
      return;
    }
    this.popoverElement.hidePopover();
  }

  render() {
    return html`
      <slot
        class="trigger"
        name="trigger"
        @mouseenter=${this.showTooltip}
        @focusin=${this.showTooltip}
        @focusout=${this.hideTooltip}
        @mouseleave=${this.hideTooltip}
      ></slot>

      <div role="tooltip" popover>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tooltip': Tooltip;
  }
}
