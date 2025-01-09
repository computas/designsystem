import type { LitElement } from 'lit';

// biome-ignore lint/complexity/noBannedTypes: <explanation>
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Constructor<T = {}> = new (...args: any[]) => T;

export const FormControl = <T extends Constructor<LitElement>>(superClass: T) => {
  class FormControlClass extends superClass {
    /**
     * This is a magic prop that identifies the element
     * as a form-associated custom element.
     **/
    static formAssociated = true;

    public elementInternals: ElementInternals;

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    constructor(...args: any[]) {
      super(...args);
      this.elementInternals = this.attachInternals();
    }

    formAssociatedCallback(form: HTMLFormElement) {
      console.log('Connected! Form: ', form);
    }
  }

  return FormControlClass as T;
};
