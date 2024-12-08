import { consume } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { activeIndexContext } from './tab-context';

@customElement('cx-tab')
export class Tab extends LitElement {
  static styles = css`
    div {
      transition: opacity 300ms ease, translate 500ms var(--ease-spring-3), visibility 300ms;
    }

    .tab-content-before {
      visibility: hidden;
      opacity: 0;
      translate: -10px 0;
    }
      
    .tab-content-after {
      visibility: hidden;
      opacity: 0;
      translate: 10px 0;
    }
  `;

  @property({ type: String, reflect: true })
  header = 'Tab title';

  @consume({ context: activeIndexContext, subscribe: true })
  activeTabIndex!: number;

  @state()
  index = -1;

  render() {
    return html`
      <div class=${classMap({
        'tab-content-before': this.index < this.activeTabIndex,
        'tab-content-after': this.index > this.activeTabIndex,
      })}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab': Tab;
  }
}
