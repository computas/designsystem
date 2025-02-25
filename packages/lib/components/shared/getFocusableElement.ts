const focusableItemMatcher =
  'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

export const getFocusableElements = (slot: HTMLSlotElement) => {
  const focusableElements: Element[] = [
    ...slot.assignedElements().filter((slotChild) => slotChild.matches(focusableItemMatcher)),
    ...slot.assignedElements().flatMap((slotChild) => [...slotChild.querySelectorAll(focusableItemMatcher)]),
  ];

  return focusableElements.filter(
    (element) => !element.hasAttribute('disabled') && !element.hasAttribute('aria-hidden'),
  );
};
