import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import animationStyles from '../../global-css/animations.css?inline';
import a11yStyles from '../../global-css/a11y.css?inline';
import buttonStyles from '../button/button.css?inline';
import { addIcons } from '../icon';
import { close } from '../icon/iconRegistry';
import type { ToastWithId } from './types';
import '../alert/alert';
import { classMap } from 'lit/directives/class-map.js';

addIcons(close);

@customElement('cx-toast-item')
export class ToastItem extends LitElement {
  private toastTimeoutId = 0;

  static styles = [
    unsafeCSS(buttonStyles),
    unsafeCSS(a11yStyles),
    unsafeCSS(animationStyles),
    css`
      cx-alert {
        display: block;
        opacity: 1;
        translate: 0;

        transition: opacity 100ms ease, translate 300ms var(--ease-spring-2);

        @starting-style {
          opacity: 0;
          translate: 0 -10px;
        }
      }

      .fade-out {
        animation: fade-out 150ms var(--ease-in-2) forwards;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      @keyframes fade-out {
        to {
          opacity: 0;
          translate: 0 30px;
        }
      }
	  `,
  ];

  @property({ type: Object })
  toastConfig!: ToastWithId;

  @property({ type: Boolean })
  active = false;

  @state()
  startFadeOutAnimation = false;

  attributeChangedCallback(propName: string, _oldVal: string | null, newVal: string | null): void {
    /** Start toast countdown when the toast is the currently active toast */
    console.log(newVal, typeof newVal, propName, _oldVal, this.active);
    if (propName === 'active' && newVal === 'true') {
      this.toastTimeoutId = window.setTimeout(() => this.closeToast(), this.toastConfig.duration);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearTimeout(this.toastTimeoutId);
  }

  private closeToast() {
    this.startFadeOutAnimation = true;
  }

  private onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'fade-out') {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
  }

  render() {
    return html`
      <cx-alert priority=${this.toastConfig.severity} class=${classMap({ 'fade-out': this.startFadeOutAnimation })} @animationend=${this.onAnimationEnd}>
        ${this.toastConfig.body}
        <button slot="close-btn" class="cx-btn__tertiary cx-btn__icon cx-btn__sm" @click=${this.closeToast}>
          <cx-icon name="close"></cx-icon>
        </button>
      </cx-alert>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-toast-item': ToastItem;
  }
}
