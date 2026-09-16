import { config } from './theme';

const LAST_FOCUS = 'ion-last-focus';
const moveFocus = (element: HTMLElement) => {
  element.tabIndex = -1;
  element.focus();
};
const isVisible = (element: HTMLElement) => element.offsetParent !== null;

export interface FocusController {
  saveViewFocus(referenceEl?: HTMLElement): void;
  setViewFocus(referenceEl: HTMLElement): void;
}

export const createFocusController = (): FocusController => ({
  saveViewFocus: (referenceEl) => {
    if (!config.get('focusManagerPriority', false)) return;
    const activeEl = document.activeElement;
    if (activeEl && referenceEl?.contains(activeEl)) activeEl.setAttribute(LAST_FOCUS, 'true');
  },
  setViewFocus: (referenceEl) => {
    const priorities = config.get<unknown>('focusManagerPriority', false);
    if (!Array.isArray(priorities) || referenceEl.contains(document.activeElement)) return;
    const lastFocus = referenceEl.querySelector<HTMLElement>(`[${LAST_FOCUS}]`);
    if (lastFocus && isVisible(lastFocus)) return moveFocus(lastFocus);
    const selectors: Record<string, string> = {
      content: 'main, [role="main"]',
      heading: 'h1, [role="heading"][aria-level="1"]',
      banner: 'header, [role="banner"]',
    };
    for (const priority of priorities) {
      const selector = selectors[String(priority)];
      const candidate = selector ? referenceEl.querySelector<HTMLElement>(selector) : null;
      if (candidate && isVisible(candidate)) return moveFocus(candidate);
    }
    moveFocus(referenceEl);
  },
});
