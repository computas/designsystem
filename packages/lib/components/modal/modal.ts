import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('cx-modal')
export class Modal extends LitElement {
	render() {
		return html`<h1>I am HTML modal</h1> `;
	}
}
