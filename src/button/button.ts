import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('computas-button')
export class Button extends LitElement {
  static styles = css`
    .storybook-button {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: 3em;
      font-weight: 700;
      line-height: 1;
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .storybook-button--primary {
      background-color: #1ea7fd;
      color: white;
    }

    .storybook-button--secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
    }
  `;

  @property({ type: Boolean, reflect: true })
  primary = false;

  render() {
    return html`
    <button
      type="button"
      class=${classMap({ 'storybook-button': true, 'visually-hidden': true, 'storybook-button--primary': this.primary, 'storybook-button--secondary': !this.primary })}
    >
      <slot></slot>
    </button>
  `;
  }
}
