import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import a11yStyles from '../../global-css/a11y.css?inline';
import animationStyles from '../../global-css/animations.css?inline';
import { BreakpointObserver } from '../../shared/breakpointObserver';
import buttonStyles from '../button/button.css?inline';
import { addIcons } from '../icon';
import { type IconName, checkCircle, close, errorCircle, infoCircle, warning } from '../icon/iconRegistry';
import type { ToastWithId } from './types';

addIcons(errorCircle, infoCircle, warning, checkCircle, close);

@customElement('cx-toast-item')
export class ToastItem extends LitElement {
  private toastTimeoutId = 0;
  private isMobile = new BreakpointObserver(this, 'mobile');

  static styles = [
    unsafeCSS(buttonStyles),
    unsafeCSS(a11yStyles),
    unsafeCSS(animationStyles),
    css`
      output {
        display: flex;
        align-items: center;
        gap: var(--cx-spacing-4);
        background-color: var(--cx-color-background-accent-5-soft);
        border: 1px solid var(--cx-color-border-strong);
        border-radius: var(--cx-radius-medium);
        padding: var(--cx-spacing-4);
        
        color: var(--cx-color-text-primary);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        
        transition: opacity 100ms ease, translate 300ms var(--ease-spring-2);
        opacity: 1;
        translate: 0;

        @starting-style {
          opacity: 0;
          translate: 0 -10px;
        }

        @media only screen and (max-width: 360px) {
          gap: var(--cx-spacing-3);
        }
      }

      .success {
        background-color: var(--cx-color-background-accent-2-soft);
      }

      .fade-out {
        animation: fade-out 150ms var(--ease-in-2) forwards;
      }

      .close-btn {
        cursor: pointer;
        margin-left: auto;
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
    const iconName: IconName = this.toastConfig.severity === 'success' ? 'check-circle' : 'info-circle';

    return html`
      <output
        role="status"
        class=${classMap({
          'fade-out': this.startFadeOutAnimation,
          success: this.toastConfig.severity === 'success',
        })}
        @animationend=${this.onAnimationEnd}
      >
        <cx-icon name=${iconName} size=${this.isMobile.matches ? 6 : 8}></cx-icon>

        ${this.toastConfig.body}
      
        <button class=${classMap({ 'close-btn cx-btn__tertiary cx-btn__icon': true, 'cx-btn__sm': this.isMobile.matches })} @click=${this.closeToast}>
          <cx-icon name="close"></cx-icon>
        </button>
      </output>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-toast-item': ToastItem;
  }
}
