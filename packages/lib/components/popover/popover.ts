import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { getFocusableElements } from '../../shared/getFocusableElement';
import { SwipeAway } from '../../shared/swipeAway';

@customElement('cx-popover')
export class Popover extends LitElement {
  private swipeEventsAbortSignal: AbortController | null = null;
  private swiper = new SwipeAway(this);

  static styles = [
    css`
      .trigger {
        anchor-name: --trigger;
        display: inline-flex;
      }

      header {
        margin-bottom: var(--cx-spacing-4);
      }

      h1 {
        /** From typography */
        margin: 0;
        font-family: inherit;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.6rem;
        color: var(--cx-color-text-primary);
      }

      [popover] {
        --translate-curve: ease;
        --translate-duration: 200ms;
        --bottom-transition-duration: 400ms;
        
        position-anchor: --trigger;
        box-sizing: border-box;
        position: absolute;
        opacity: 0;
        translate: 0px 6px;
        inset: unset;
        margin: var(--cx-spacing-2) 0 0 0;
        position-area: bottom span-right;
        position-try: --bottom-left, --top-right, --top-left, --center-right, --center-left;
        transition:
          display 200ms allow-discrete,
          overlay 200ms allow-discrete,
          opacity 200ms ease,
          translate var(--translate-duration) var(--translate-curve),
          bottom var(--bottom-transition-duration) ease;
        background: var(--cx-color-background-primary);
        border: 1px solid var(--cx-color-border-primary);
        border-radius: var(--cx-radius-medium);
        max-height: 500px;
        padding: var(--cx-spacing-6) var(--cx-spacing-8);

        &::backdrop {
          opacity: 0;

          transition:
            display 300ms allow-discrete,
            overlay 300ms allow-discrete,
            opacity 300ms ease;
        }

        &:popover-open {
          --translate-curve: var(--ease-spring-3);
          --translate-duration: 500ms;
          opacity: 1;
          translate: 0px;

          &::backdrop {
            opacity: 1;
          }

          @starting-style {
            opacity: 0;
            translate: 0px -6px;

            &::backdrop {
              opacity: 0;
            }
          }
        }

        @media (pointer: coarse) {
          position: fixed;
          inset: auto 0 0 0;
          border-bottom-width: 0px;
          translate: 0px 100%;
          position-anchor: unset;
          margin: 0;
          width: 100vw;
          border-radius: var(--cx-radius-medium) var(--cx-radius-medium) 0 0;

          &::backdrop {
            background-color: var(--cx-color-background-backdrop);
          }

          &:popover-open {
            --translate-curve: var(--ease-out-5);

            @starting-style {
              opacity: 0.5;
              translate: 0px 100%;
            }
          }

          .drag-handle {
            display: flex;
          }
        }

        &.dragging {
					--bottom-transition-duration: 0ms;
				}
      }


      .drag-handle {
        display: none;
        justify-content: center;
        padding-block: 16px;
        margin-top: -16px;
        
        .pill {
          height: var(--cx-spacing-1);
          width: var(--cx-spacing-10);
          border-radius: var(--cx-radius-pill);
          background: var(--cx-color-border-soft);
        }
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

  @property({ type: String, reflect: true })
  header = '';

  @property({ type: Boolean, reflect: true })
  autofocus = false;

  @query('[popover]')
  private popoverElement!: HTMLDivElement;

  @query('#dialog-content')
  private dialogContent!: HTMLSlotElement;

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
      this.swipeEventsAbortSignal = new AbortController();
      this.isOpen = true;
      this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));

      if (this.autofocus) {
        this.focusFirstElement();
      }

      this.swiper.startSwipeAwayListener(
        this.popoverElement,
        () => {
          this.popoverElement.hidePopover();
        },
        { signal: this.swipeEventsAbortSignal.signal },
      );
    } else {
      this.swipeEventsAbortSignal?.abort();
      (this.triggerWrapper.assignedElements()[0] as HTMLElement).focus();
      this.isOpen = false;
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
  }

  private focusFirstElement() {
    const focusableElements = getFocusableElements(this.dialogContent);
    if (focusableElements.length) {
      (focusableElements.at(0) as HTMLElement).focus();
    }
  }

  render() {
    const header = this.header
      ? html`
      <header>
        <h1>${this.header}</h1>
      </header>`
      : nothing;

    return html`
      <slot class="trigger" name="trigger" @click=${this.onTriggerClick}></slot>

      <div role="dialog" popover @toggle=${this.popoverToggle}>
        <div class="drag-handle" data-drag-handle>
          <div class="pill"></div>
        </div>

        ${header}
        <slot id="dialog-content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-popover': Popover;
  }
}
