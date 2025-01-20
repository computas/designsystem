import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class InputModeDetector implements ReactiveController {
  private abortMouseListener = new AbortController();
  private abortKeydownListener = new AbortController();

  /** We start by assuming keyboard is main input mode */
  inputMode: 'mouse' | 'keyboard' = 'keyboard';

  constructor(private host: ReactiveControllerHost) {
    this.host.addController(this);
  }

  hostConnected() {
    /** We have to use arrow functions when we create the event listeners.
     * This is because the methods refer to `this.inputMode`, and we need `this`
     * to be a reference to the class, not the function itself.
     *
     * In order to stop the event listeners, we use abort controllers, since
     * we're unable to remove the event listeners since we rely on arrow function.
     */
    document.addEventListener('mousemove', () => this.setMouseInputMode(), {
      signal: this.abortMouseListener.signal,
    });
  }

  hostDisconnected() {
    this.abortMouseListener.abort();
    this.abortKeydownListener.abort();
  }

  private setMouseInputMode() {
    if (this.inputMode !== 'mouse') {
      this.inputMode = 'mouse';
      this.host.requestUpdate();

      /** Switch to listening for keyboard events */
      this.abortMouseListener.abort();
      this.abortKeydownListener = new AbortController();
      document.addEventListener('keydown', () => this.setKeyboardInputMode(), {
        signal: this.abortKeydownListener.signal,
      });
    }
  }

  private setKeyboardInputMode() {
    if (this.inputMode !== 'keyboard') {
      this.inputMode = 'keyboard';
      this.host.requestUpdate();

      /** Switch to listening for mouse events */
      this.abortKeydownListener.abort();
      this.abortMouseListener = new AbortController();
      document.addEventListener('mousemove', () => this.setMouseInputMode(), {
        signal: this.abortMouseListener.signal,
      });
    }
  }
}
