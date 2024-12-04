import { consume } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { activeIndexContext } from './tab-context';

@customElement('cx-tab-content')
export class TabContent extends LitElement {
  static styles = css`
    div {
      transition: opacity 300ms ease, translate 700ms var(--ease-spring-5), visibility 300ms;
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
    'cx-tab-content': TabContent;
  }
}
