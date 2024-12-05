import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { provide } from '@lit/context';
import a11yStyles from '../../global-css/a11y.css?inline';
import type { Tab } from './tab';
import { activeIndexContext } from './tab-context';
import tabStyles from './tab-link.css?inline';

@customElement('cx-tab-group')
export class TabGroup extends LitElement {
  static styles = [
    unsafeCSS(tabStyles),
    unsafeCSS(a11yStyles),
    css`
      :host {
        display: block;
      }
      
      .cx-tab-link {
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
  }

  render() {
    return html`
      <section class="tabs-container">
        <header role="tablist">
          ${this.tabHeaders.map(
            (tabHeader, index) => html`
            <label
              class=${classMap({ 'cx-tab-link': true, 'cx-outline-on-focus-within': true, 'cx-tab-link--active': this.activeTabIndex === index })}
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
          >
          <slot class="content-container" @slotchange=${this.setTabContentIndexes}></slot>
        </div>
      </section>

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab-group': TabGroup;
  }
}
