import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cx-card')
export class Card extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      position: relative;
      height: 440px;
      width: 100%;
      max-width: 500px;
      border-radius: 24px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .card-image {
      width: 100%;
      height: 50%;
      position: relative;
      flex-shrink: 0;
    }

    .card-image img,
    .card-image ::slotted(img),
    .card-image ::slotted(video),
    .card-image ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s ease;
    }

    /* Blue filter on img for hover */
    .card-image::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      background: var(--cx-color-background-accent-5);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card-info-wrapper {
      flex: 1;
      padding: var(--cx-spacing-6);
      color: var(--cx-color-text-primary);
      background-color: var(--cx-color-background-accent-1-soft);
    }

    .card-info {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-subtitle {
      display: flex;
      flex-wrap: wrap;
      color: var(--cx-color-text-less-important);
      gap: var(--cx-spacing-2);
      margin-bottom: var(--cx-spacing-4);
    }

    .card-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      max-height: 65px;
      min-height: 65px;
      overflow: hidden;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: var(--cx-spacing-2);
      line-height: 2rem;
      align-content: center;
    }

    .card-other {
      display: flex;
      gap: var(--cx-spacing-2);
      flex-wrap: wrap;
      margin-top: auto;
    }

    /* Hover effects - only on image */
    .card:hover .card-image img,
    .card:hover .card-image ::slotted(img),
    .card:hover .card-image ::slotted(video),
    .card:hover .card-image ::slotted(*) {
      filter: grayscale(1);
    }

    .card:hover .card-image::after {
      opacity: 1;
    }

    @media (max-width: 750px) {
      .card {
        flex-direction: column;
        height: auto;
        max-width: 343px;
      }

      .card-image {
        width: 100%;
        height: 242px;
      }

      .card-info-wrapper {
        width: 100%;
        padding: var(--cx-spacing-4);
      }

      .card-info {
        flex-direction: column-reverse;
        gap: var(--cx-spacing-2);
      }

      .card-subtitle {
        font-size: 12px;
      }

      .card-title {
        margin-top: unset;
        min-height: unset;
        font-size: 18px;
      }
    }
  `;

  @property({ type: String, reflect: true })
  title = '';

  @property({ type: String, reflect: true })
  image = '';

  render() {
    return html`
      <div class="card">
        <div class="card-image">
          ${this.image ? html`
            <img src="${this.image}" alt="" />
          ` : html`
            <slot name="image"></slot>
          `}
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <div class="card-subtitle">
              <slot name="subtitle"></slot>
            </div>
            ${this.title ? html`
              <div class="card-title">${this.title}</div>
            ` : html`
              <div class="card-title">
                <slot name="title"></slot>
              </div>
            `}
            <div class="card-other">
              <slot name="other"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-card': Card;
  }
}