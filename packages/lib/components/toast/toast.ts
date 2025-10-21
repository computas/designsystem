import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import './toast-item';
import type { ToastConfig, ToastWithId } from './types';

let CX_TOAST_ID = 1;

@customElement('cx-toast')
export class Toast extends LitElement {
  private abortController = new AbortController();

  static styles = css`
    .toast-list-container {
      position: fixed;
      display: grid;
      justify-items: flex-end;
      inset: 0 0 auto auto;

      margin: var(--cx-spacing-4);
      border: none;
      background: transparent;
      padding: 0;
      overflow: unset;

      @media only screen and (max-width: 360px) {
        inset: auto auto 88px auto;
        margin-inline: 40px;

        cx-toast-item {
          transform-origin: center bottom;
        }
      }
    }

    cx-toast-item {
      grid-area: 1 / 1; 
      position: relative;
      transform-origin: right bottom;
      transition: scale 200ms ease, top 200ms ease;
    }
  `;

  @state()
  toastQueue: ToastWithId[] = [];

  @query('[popover]')
  toastContainerElement!: HTMLDivElement;

  connectedCallback(): void {
    super.connectedCallback();

    document.addEventListener('cx-show-toast', (event) => this.addToastToQueue(event), {
      signal: this.abortController.signal,
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.abortController.abort();
  }

  private addToastToQueue(event: Event) {
    const listClone = this.toastQueue.slice();

    const payload = (event as CustomEvent).detail as Required<ToastConfig>;
    const newToastId = CX_TOAST_ID++;
    const toastWithId: ToastWithId = { ...payload, id: newToastId };
    listClone.push(toastWithId);
    this.toastQueue = listClone.slice();
    if (this.toastQueue.length === 1) {
      this.toastContainerElement.showPopover();
    }
  }

  private removeToast(toastId: ToastWithId['id']) {
    const listClone = [...this.toastQueue];
    const index = listClone.findIndex((toast) => toast.id === toastId);
    if (index !== -1) {
      listClone.splice(index, 1);
      this.toastQueue = listClone;
    }
    if (this.toastQueue.length === 0) {
      this.toastContainerElement.hidePopover();
    }
  }

  render() {
    return html`
			<div popover="manual" class="toast-list-container">
        ${repeat(
          this.toastQueue.slice(0, 4),
          (toast) => toast.id,
          (toast, index) => html`
          <cx-toast-item
            style="
              scale: ${1 - index * 0.05};
              z-index: ${this.toastQueue.length - index};
              top: calc(var(--cx-spacing-2) * ${index})"
            .toastConfig=${toast}
            active=${index === 0}
            @close=${() => this.removeToast(toast.id)}></cx-toast-item>
          `,
        )}
			</div>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-toast': Toast;
  }
}
