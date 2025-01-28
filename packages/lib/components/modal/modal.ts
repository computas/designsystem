import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('cx-modal')
export class Modal extends LitElement {
	render() {
		return html`<div
			class=${classMap({
				'cx-modal': true,
			})}
		>
			<h1>I am HTML modal</h1>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'cx-modal': Modal;
	}
}
