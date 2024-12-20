import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import type { IconName } from './iconRegistry';
import { getIcon } from './store';

type IconSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20';

@customElement('cx-icon')
export class Icon extends LitElement {
  static readonly styles = css`
    :host {
      --_icon-size: 1.5rem;

      display: inline-block;
      width: var(--_icon-size);
      height: var(--_icon-size);
			flex: none;
      line-height: 0;
    }

    :host([size='1']) { --_icon-size: 0.25rem; }
    :host([size='2']) { --_icon-size: 0.5rem; }
    :host([size='3']) { --_icon-size: 0.75rem; }
    :host([size='4']) { --_icon-size: 1rem; }
    :host([size='5']) { --_icon-size: 1.25rem; }
    :host([size='6']) { --_icon-size: 1.5rem; }
    :host([size='7']) { --_icon-size: 1.75rem; }
    :host([size='8']) { --_icon-size: 2rem; }
    :host([size='9']) { --_icon-size: 2.25rem; }
    :host([size='10']) { --_icon-size: 2.5rem; }
    :host([size='11']) { --_icon-size: 2.75rem; }
    :host([size='12']) { --_icon-size: 3rem; }
    :host([size='13']) { --_icon-size: 3.25rem; }
    :host([size='14']) { --_icon-size: 3.5rem; }
    :host([size='15']) { --_icon-size: 3.75rem; }
    :host([size='16']) { --_icon-size: 4rem; }
    :host([size='17']) { --_icon-size: 4.25rem; }
    :host([size='18']) { --_icon-size: 4.5rem; }
    :host([size='19']) { --_icon-size: 4.75rem; }
    :host([size='20']) { --_icon-size: 5rem; }

    svg {
      width: 100%;
      height: 100%;
    }
  `;

  @property({ type: String, reflect: true })
  name: IconName | null = null;

  // Setting this to reflect: true will make the size attribute reflect to the DOM, which makes the current
  // CSS-selector-based approach for sizing work in React. If another approach is used, this whole property may be removed.
  @property({ type: String, reflect: true })
  size: IconSize | undefined = undefined;

  render() {
    return html`${unsafeHTML(getIcon(this.name)?.data ?? '')}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-icon': Icon;
  }
}
