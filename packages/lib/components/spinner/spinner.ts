import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type SpinnerSize =
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

@customElement('cx-spinner')
export class Spinner extends LitElement {
  static readonly styles = css`
    :host {
      --_spinner-size: 1.5rem;
      display: inline-block;
      width: var(--_spinner-size);
      height: var(--_spinner-size);
    }

    svg {
      width: 100%;
      height: 100%;
      animation: spin 3s linear infinite;
      transform-origin: center;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    :host([size='1']) { --_spinner-size: 0.25rem; }
    :host([size='2']) { --_spinner-size: 0.5rem; }
    :host([size='3']) { --_spinner-size: 0.75rem; }
    :host([size='4']) { --_spinner-size: 1rem; }
    :host([size='5']) { --_spinner-size: 1.25rem; }
    :host([size='6']) { --_spinner-size: 1.5rem; }
    :host([size='7']) { --_spinner-size: 1.75rem; }
    :host([size='8']) { --_spinner-size: 2rem; }
    :host([size='9']) { --_spinner-size: 2.25rem; }
    :host([size='10']) { --_spinner-size: 2.5rem; }
    :host([size='11']) { --_spinner-size: 2.75rem; }
    :host([size='12']) { --_spinner-size: 3rem; }
    :host([size='13']) { --_spinner-size: 3.25rem; }
    :host([size='14']) { --_spinner-size: 3.5rem; }
    :host([size='15']) { --_spinner-size: 3.75rem; }
    :host([size='16']) { --_spinner-size: 4rem; }
    :host([size='17']) { --_spinner-size: 4.25rem; }
    :host([size='18']) { --_spinner-size: 4.5rem; }
    :host([size='19']) { --_spinner-size: 4.75rem; }
    :host([size='20']) { --_spinner-size: 5rem; }
  `;

  @property({ type: String, reflect: true })
  size: SpinnerSize | undefined = undefined;

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.646 6.979A10 10 0 1 0 22 11.999c0-.272 0-.542-.034-.808a9.9 9.9 0 0 0-1.32-4.212m-.126 6.053a8.537 8.537 0 1 1-.017-2.195.315.315 0 0 1-.313.356h-3.653a.315.315 0 0 1-.305-.244 4.31 4.31 0 1 0 .03 1.976.31.31 0 0 1 .307-.244h3.646a.315.315 0 0 1 .305.351"/>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cx-spinner': Spinner;
  }
}
