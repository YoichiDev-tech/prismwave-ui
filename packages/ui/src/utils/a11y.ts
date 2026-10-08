export function getSafeId(id: string | undefined, fallback: string) {
  return id ?? fallback;
}

export function getDescribedBy(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(' ') || undefined;
}

/**
 * Keeps keyboard focus inside an element while it is being used
 * as a modal/dialog.
 *
 * Returns a cleanup function that removes the focus trap and
 * restores focus to the element that was focused before activation.
 */
export function trapFocus(container: HTMLElement): () => void {
  const previouslyFocused = document.activeElement as HTMLElement | null;

  const getFocusableElements = (): HTMLElement[] => {
    const elements = container.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'area[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'iframe',
        'object',
        'embed',
        '[contenteditable="true"]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    );

    return Array.from(elements).filter(
      (element) =>
        !element.hasAttribute('aria-hidden') &&
        element.getAttribute('aria-disabled') !== 'true' &&
        element.offsetParent !== null,
    );
  };

  const focusableElements = getFocusableElements();

  if (focusableElements.length > 0) {
    const firstElement = focusableElements[0];

    if (firstElement) {
      firstElement.focus();
    }
  } else {
    container.setAttribute('tabindex', '-1');
    container.focus();
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const elements = getFocusableElements();

    if (elements.length === 0) {
      event.preventDefault();
      container.focus();
      return;
    }

    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      return;
    }

    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  return () => {
    container.removeEventListener('keydown', handleKeyDown);

    if (previouslyFocused && document.contains(previouslyFocused)) {
      previouslyFocused.focus();
    }
  };
}