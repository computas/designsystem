import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import a11yStyles from '../../global-css/a11y.css?inline';
import animationStyles from '../../global-css/animations.css?inline';
import type { Tab } from './tab';
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
      }

      ::slotted(cx-tab) {
        --x-offset: 10px;
        grid-area: 1 / 1;
        opacity: 0;
        display: none;
        translate: var(--x-offset) 0;
        transition:
          opacity 300ms ease,
          translate 500ms var(--ease-spring-3),
          display 300ms allow-discrete;
      }

      ::slotted(.tab-content-active) {
        display: unset;
        opacity: 1;
        translate: 0 0;

        @starting-style {
          opacity: 0;
          translate: var(--x-offset) 0;
        }
      }
    `,
  ];

  /**
   * @description The index of the active tab
   * @default 0
   */
  private _activeTabIndex = 0;
  @property({ type: Number, reflect: true })
  set activeTabIndex(newIndex: number) {
    this._activeTabIndex = newIndex;
    this.updateTabContentVisibility();
  }
  get activeTabIndex() {
    return this._activeTabIndex;
  }

  @state()
  private tabHeaders: string[] = [];

  @query('[role="tabpanel"]')
  tabsContentContainer!: HTMLSlotElement;

  private updateTabContentVisibility() {
    const tabContent = this.tabsContentContainer.assignedElements({ flatten: true }) as Tab[];
    tabContent.forEach((tabElement, index) => {
      if (index < this.activeTabIndex) {
        tabElement.classList.remove('tab-content-active');
        tabElement.style.setProperty('--x-offset', '-10px');
      } else if (index > this.activeTabIndex) {
        tabElement.classList.remove('tab-content-active');
        tabElement.style.setProperty('--x-offset', '10px');
      } else {
        tabElement.classList.add('tab-content-active');
      }
    });

    this.tabHeaders = tabContent.map((tab) => tab.header);
  }

  private setActiveTabIndex(newTabIndex: number) {
    this.activeTabIndex = newTabIndex;
    this.dispatchEvent(
      new CustomEvent('activeTabIndexChange', {
        bubbles: true,
        composed: true,
        detail: { newIndex: newTabIndex },
      }),
    );
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

      <slot
        role="tabpanel"
        id=${`tabpanel-${this.activeTabIndex}`}
        aria-labelledby=${`tab-${this.activeTabIndex}`}
        tabindex="0"
        class="content-container"
        @slotchange=${this.updateTabContentVisibility}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-tab-group': TabGroup;
  }
}
