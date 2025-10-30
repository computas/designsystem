import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cx-card')
export class Card extends LitElement {
  static styles = css`
  .card {
    position: relative;
    height: 440px;
    width: 100%;
    max-width: 500px;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }

  .card.clickable {
    cursor: pointer;
  }

  .card-image {
    width: 100%;
    height: 50%;
    position: relative;
    flex-shrink: 0;
  }

  .card-image img {
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

  .card-info {
    flex: 1;
    padding: var(--cx-spacing-6);
    color: var(--cx-color-text-primary);
    background-color: var(--cx-color-background-accent-1-soft);
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
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
    line-height: 2rem;
    margin-bottom: var(--cx-spacing-2);
    align-content: center;
  }

  .card-other {
    display: flex;
    gap: var(--cx-spacing-2);
    flex-wrap: wrap;
    margin-top: auto;
  }

  /* Hover effects - only on image */
  .card:hover .card-image img {
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

    .card-info {
      width: 100%;
      padding: var(--cx-spacing-4);
      flex-direction: column-reverse;
      gap: var(--cx-spacing-2);
      box-sizing: border-box;
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

  @property({ type: String, reflect: true })
  href = '';

  render() {
    const cardContent = html`
      <div class="card-image">
        ${
          this.image
            ? html`
          <img src="${this.image}" alt="" />
        `
            : html`
          <slot name="image"></slot>
        `
        }
      </div>
      <div class="card-info">
        <div class="card-subtitle">
          <slot name="subtitle"></slot>
        </div>
        ${
          this.title
            ? html`
          <div class="card-title">${this.title}</div>
        `
            : html`
          <div class="card-title">
            <slot name="title"></slot>
          </div>
        `
        }
        <div class="card-other">
          <slot name="other"></slot>
        </div>
      </div>
    `;

    return this.href
      ? html`
      <a href="${this.href}" class="card clickable">
        ${cardContent}
      </a>
    `
      : html`
      <div class="card">
        ${cardContent}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-card': Card;
  }
}
