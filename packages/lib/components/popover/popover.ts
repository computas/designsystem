import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../icon';

import a11yStyles from '../../global-css/a11y.css?inline';

@customElement('cx-popover')
export class Popover extends LitElement {
  static styles = [
    unsafeCSS(a11yStyles),
    css`
      .trigger {
        anchor-name: --trigger;
        display: inline-flex;
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

  @query('[popover]')
  private popoverElement!: HTMLDivElement;

  @property({ type: String, reflect: true })
  invalidText = '';

  private onTriggerClick() {
    this.popoverElement.togglePopover();
  }

  render() {
    return html`
      <slot class="trigger" name="trigger" @click=${this.onTriggerClick}></slot>

      <div popover><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-popover': Popover;
  }
}
