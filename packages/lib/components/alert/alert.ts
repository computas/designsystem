import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { addIcons } from '../icon';
import { type IconName, checkCircle, errorCircle, infoCircle, warning } from '../icon/iconRegistry';

addIcons(errorCircle, infoCircle, warning, checkCircle);

type AlertPriorityType = 'info' | 'danger' | 'warning' | 'success';
@customElement('cx-alert')
export class Alert extends LitElement {
  static styles = css`
		.cx-alert {
			padding: var(--cx-spacing-6);
			border-radius: var(--cx-radius-medium);
			background-color: var(--cx-color-background-accent-5-soft);
			border: 1px solid var(--cx-color-signal-info);
			display: flex;
      flex-direction: row;
			align-items: flex-start;
			gap: var(--cx-spacing-6);

			color: var(--cx-color-text-primary);
			font-family: 'Open Sans', Arial, sans-serif;

			@media only screen and (max-width: 360px) {
				flex-direction: column;
				align-items: center;
				gap: var(--cx-spacing-3);
			}
		}
		.cx-alert--danger {
			background-color: var(--cx-color-background-accent-4-soft);
			border-color: var(--cx-color-signal-danger);
		}
		.cx-alert--warning {
			background-color: var(--cx-color-background-accent-3-soft);
			border-color: var(--cx-color-signal-warning);
		}
		.cx-alert--success {
			background-color: var(--cx-color-background-accent-2-soft);
			border-color: var(--cx-color-signal-success);
		}

		.cx-alert__content {
			display: flex;
			flex-direction: column;
      gap: 0;
		}

		.cx-alert__header {
			font-weight: 600;
			font-size: 1.125rem;
			line-height: 1.6;
		}
    
		.cx-alert__body {
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.6;
		}
	`;

  @property({ type: String, reflect: true })
  header = '';

  @property({ type: String, reflect: true })
  priority: AlertPriorityType = 'info';

  render() {
    let priorityIcon: IconName = 'info-circle';
    switch (this.priority) {
      case 'danger':
        priorityIcon = 'error-circle';
        break;
      case 'warning':
        priorityIcon = 'warning';
        break;
      case 'success':
        priorityIcon = 'check-circle';
        break;
      default:
        priorityIcon = 'info-circle';
        break;
    }

    const header = this.header ? html`<div class="cx-alert__header">${this.header}</div>` : nothing;
    return html`
			<div
				role="alert"
				class=${classMap({
          'cx-alert': true,
          'cx-alert--info': this.priority === 'info',
          'cx-alert--danger': this.priority === 'danger',
          'cx-alert--warning': this.priority === 'warning',
          'cx-alert--success': this.priority === 'success',
        })}
			>
				<cx-icon name=${priorityIcon} size="8"></cx-icon>
				<div class="cx-alert__content">
          ${header}
					<slot class="cx-alert__body"></slot>
				</div>
			</div>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-alert': Alert;
  }
}
