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
      padding: 0;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .card-image {
      width: 100%;
      height: 50%;
      position: relative;
    }

    .card-image img,
    .card-image ::slotted(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s ease;
    }

    .card-image::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      background: var(--cx-color-background-accent-5, #4a90e2);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .card-info-wrapper {
      position: absolute;
      width: 100%;
      bottom: -74px;
      padding: var(--cx-spacing-6, 24px);
      color: var(--cx-color-text-primary, #333);
      transition: bottom 0.3s ease;
      background-color: var(--cx-color-background-accent-1-soft, rgba(255, 255, 255, 0.9));
    }

    .card-info {
      display: flex;
      flex-direction: column;
    }

    .card-metadata {
      display: flex;
      flex-wrap: wrap;
      color: var(--cx-color-text-less-important, #666);
      gap: var(--cx-spacing-2, 8px);
      margin-bottom: var(--cx-spacing-4, 16px);
    }

    .card-metadata-section {
      display: inline-flex;
      flex: 1 1 100%;
      align-items: center;
      gap: var(--cx-spacing-2, 8px);
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
      margin: 0;
      line-height: 2rem;
      align-content: center;
      color: var(--cx-color-text-primary, #333);
    }

    .card:hover .card-image img,
    .card:hover .card-image ::slotted(img) {
      filter: grayscale(1);
    }

    .card:hover .card-image::after {
      opacity: 1;
    }

    .card:hover .card-info-wrapper {
      bottom: 0;
    }

    @media (max-width: 750px) {
      .card {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        max-width: 343px;
        height: auto;
        min-height: unset;
        max-height: unset;
      }

      .card-image {
        flex: 0 0 35%;
        height: auto;
      }

      .card-info-wrapper {
        position: relative;
        width: 65%;
        bottom: unset;
        align-self: flex-end;
        padding: var(--cx-spacing-4, 16px);
      }

      .card-info {
        flex-direction: column-reverse;
        gap: var(--cx-spacing-2, 8px);
      }

      .card-metadata-section {
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
  subtitle1 = '';

  @property({ type: String, reflect: true })
  subtitle2 = '';

  @property({ type: String, reflect: true })
  image = '';

  @property({ type: String, reflect: true })
  imageAlt = 'Card image';

  render() {
    return html`
      <div class="card">
        <div class="card-image">
          ${this.image ? html`
            <img src="${this.image}" alt="${this.imageAlt}" />
          ` : html`
            <slot name="image"></slot>
          `}
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <div class="card-metadata">
              ${this.subtitle1 ? html`
                <div class="card-metadata-section">
                  ${this.subtitle1}
                </div>
              ` : ''}
              ${this.subtitle2 ? html`
                <div class="card-metadata-section">
                  ${this.subtitle2}
                </div>
              ` : ''}
            </div>
            ${this.title ? html`<h3 class="card-title">${this.title}</h3>` : ''}
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