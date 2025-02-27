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
        position-area: bottom span-right;
        position-try: --bottom-left, --top-right, --top-left, --center-right,
          --center-left;
        position: absolute;
        margin: var(--cx-spacing-2) 0 0 0;

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
      }

      @position-try --bottom-left {
        position-area: bottom span-left;
        margin: var(--cx-spacing-2) 0 0 0;
      }

      @position-try --top-right {
        position-area: top span-right;
        margin: 0 0 var(--cx-spacing-2) 0;
      }

      @position-try --top-left {
        position-area: top span-left;
        margin: 0 0 var(--cx-spacing-2) 0;
      }

      @position-try --center-right {
        position-area: span-bottom right;
        margin: 0 0 0 var(--cx-spacing-2);
      }

      @position-try --center-left {
        position-area: span-bottom left;
        margin: 0 var(--cx-spacing-2) 0 0;
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

      <div role="tooltip" id="tooltip-content" popover aria-live="polite">
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
