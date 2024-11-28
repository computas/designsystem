import { css } from 'lit';

export const formFieldStyles = css`
  :host {
    display: inline-block;  
  }

  label {
    display: inline-grid;
    grid-template-areas:
      "label"
      "input";
  }

  .label {
    grid-area: label;
    margin-bottom: var(--cx-spacing-1);
    color: var(--cx-color-text-primary);
    font-size: 0.875rem;
    line-height: 1.71;
    font-weight: 500;
  }

  .input-container {
    grid-area: input;
    --border-color: transparent;
    display: flex;
    align-items: center;
    border-radius: var(--cx-radius-medium);
    background-color: var(--cx-color-background-accent-1-soft);
    gap: var(--cx-spacing-1);
    padding: calc(var(--cx-spacing-1) + var(--cx-spacing-05)) var(--cx-spacing-3);
    box-shadow: inset 0 0 0 1px var(--border-color);
    transition: background-color 200ms ease, box-shadow 200ms ease;

    &:has(::slotted(textarea)) {
      padding: var(--cx-spacing-2) var(--cx-spacing-2) var(--cx-spacing-2) var(--cx-spacing-3);
    }

    &:hover {
      --border-color: var(--cx-color-border-primary);
    }

    &:has(::slotted(:focus)) {
      background-color: transparent;
      --border-color: var(--cx-color-border-primary);
    }


    &.invalid,
    &:has(::slotted(input)) {
      background-color: var(--cx-color-background-accent-4-soft);
      --border-color: var(--cx-color-signal-danger);

      &:hover {
        --border-color: var(--cx-color-border-primary);
      }

      &:has(::slotted(:focus)) {
        background-color: transparent;
        --border-color: var(--cx-color-border-primary);
      }
    }
  }

  .subscript {
    grid-area: input;
    align-self: flex-end;
    margin-bottom: calc(var(--cx-spacing-3) * -1);
    display: flex;
    gap: var(--cx-spacing-1);
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.8;
    font-weight: 400;
  }
`;
