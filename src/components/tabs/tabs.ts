import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import a11yStyles from '../../global-css/a11y.css?inline';
import type { Tab } from './tab';
import tabStyles from './tab-link.css?inline';

@customElement('cx-tabs')
export class Tabs extends LitElement {
  static styles = [
    unsafeCSS(tabStyles),
    unsafeCSS(a11yStyles),
    css`
      :host {
        display: block;
      }
      
      header {
        display: flex;
        gap: var(---cx-spacing-1);
      }

      .cx-tab-link {
        border: none;
        cursor: pointer;
        background: transparent;
      }

      .content-container {
        display: grid;

        > * {
          grid-area: 1 / 1;
        }
      }

      .tab-content {
        transition: opacity 300ms ease, translate 700ms var(--ease-spring-5), visibility 300ms;
      }

      .tab-content.before {
        visibility: hidden;
        opacity: 0;
        translate: -10px 0;
      }
      
      .tab-content.after {
        visibility: hidden;
        opacity: 0;
        translate: 10px 0;
      }
    `,
  ];

  private readonly tabGroupId = crypto.randomUUID();

  /**
   * @description The index of the active tab
   * @default 0
   */
  @property({ type: Number, reflect: true })
  activeTabIndex = 0;

  @state()
  private tabs: Tab[] = [];

  private onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this.tabs = slot.assignedElements({ flatten: true }) as Tab[];
  }

  private setActiveTabIndex(newTabIndex: number) {
    this.activeTabIndex = newTabIndex;
  }

  render() {
    return html`
      <section class="tabs-container">
        <header role="tablist">
          ${this.tabs.map(
            (tab, index) => html`
            <label
              class=${classMap({ 'cx-tab-link': true, 'cx-tab-link--active': this.activeTabIndex === index })}
            >
              <input 
                class="cx-visually-hidden"
                role="tab"
                type="radio"
                name=${this.tabGroupId}
                id=${`tab-${index}`}
                aria-controls=${`tabpanel-${index}`}
                aria-selected=${this.activeTabIndex === index}
                @click=${() => this.setActiveTabIndex(index)}
                ?checked=${this.activeTabIndex === index} />
              ${tab.header}
            </label>
          `,
          )}
        </header>

        <div 
          class="content-container"
          role="tabpanel"
          id=${`tabpanel-${this.activeTabIndex}`}
          aria-labelledby=${`tab-${this.activeTabIndex}`}
        >
          ${this.tabs.map(
            (tab, index) => html`
              <div class=${classMap({
                'tab-content': true,
                active: this.activeTabIndex === index,
                before: index < this.activeTabIndex,
                after: index > this.activeTabIndex,
              })}>
                ${tab.content}
              </div>
          `,
          )}
        </div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tabs': Tabs;
  }
}
