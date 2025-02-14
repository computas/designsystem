import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { provide } from '@lit/context';
import a11yStyles from '../../global-css/a11y.css?inline';
import animationStyles from '../../global-css/animations.css?inline';
import type { Tab } from './tab';
import { activeIndexContext } from './tab-context';
import tabStyles from './tab.css?inline';

@customElement('cx-tab-group')
export class TabGroup extends LitElement {
  static styles = [
    unsafeCSS(tabStyles),
    unsafeCSS(a11yStyles),
    unsafeCSS(animationStyles),
    css`
      :host {
        display: flex;
        flex-direction: column;
      }
      
      .cx-tab {
        cursor: pointer;
      }

      .content-container {
        display: grid;
        padding-top: var(--cx-spacing-4);

        &::slotted(*) {
          grid-area: 1 / 1;
        }
      }
    `,
  ];

  /**
   * @description The index of the active tab
   * @default 0
   */
  @property({ type: Number, reflect: true })
  @provide({ context: activeIndexContext })
  activeTabIndex = 0;

  @state()
  private tabHeaders: string[] = [];

  private setTabContentIndexes(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const tabContent = slot.assignedElements({ flatten: true }) as Tab[];
    tabContent.forEach((tabContent, index) => {
      tabContent.index = index;
    });

    this.tabHeaders = tabContent.map((tab) => tab.header);
  }

  private setActiveTabIndex(newTabIndex: number) {
    this.activeTabIndex = newTabIndex;
    this.dispatchEvent(new Event('activeTabIndexChange', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header role="tablist">
        ${this.tabHeaders.map(
          (tabHeader, index) => html`
          <label
            class=${classMap({ 'cx-tab': true, 'cx-outline-on-focus-within': true, 'cx-tab--active': this.activeTabIndex === index })}
            role="none"
          >
            <input 
              class="cx-visually-hidden"
              role="tab"
              type="radio"
              name="cx-tab-group"
              id=${`tab-${index}`}
              aria-controls=${`tabpanel-${index}`}
              aria-selected=${this.activeTabIndex === index}
              @click=${() => this.setActiveTabIndex(index)}
              ?checked=${this.activeTabIndex === index} />
              ${tabHeader}
            </label>
            `,
        )}
      </header>

      <div
        role="tabpanel"
        id=${`tabpanel-${this.activeTabIndex}`}
        aria-labelledby=${`tab-${this.activeTabIndex}`}
        tabindex="0"
        >
        <slot class="content-container" @slotchange=${this.setTabContentIndexes}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab-group': TabGroup;
  }
}
