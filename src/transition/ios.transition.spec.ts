import { describe, expect, it } from 'vitest';

import { createIosTransitionAnimation } from './ios.transition';

const createPage = (translucent = false) => {
  const page = document.createElement('div');
  const header = document.createElement('ion-header');
  if (translucent) {
    header.classList.add('header-translucent');
  }
  page.append(header, document.createElement('ion-content'));
  return page;
};

const createTransition = (radius?: number) => {
  const nav = document.createElement('ion-router-outlet');
  const enteringEl = createPage(true);
  const leavingEl = createPage();
  nav.append(leavingEl, enteringEl);
  document.body.append(nav);

  const animation = createIosTransitionAnimation({
    offLeftPercent: 30,
    radius,
    getIonPageElement: (element) => element,
  })(nav, { enteringEl, leavingEl });

  return { animation, enteringEl, nav };
};

describe('createIosTransitionAnimation radius', () => {
  it('does not apply a page clip when radius is omitted', () => {
    const { animation, enteringEl, nav } = createTransition();

    animation.progressStart(true);

    expect(enteringEl.style.clipPath).toBe('');
    animation.destroy();
    nav.remove();
  });

  it('applies the configured radius', () => {
    const { animation, enteringEl, nav } = createTransition(48);
    enteringEl.style.clipPath = 'inset(1px)';

    animation.progressStart(true);

    expect(enteringEl.style.clipPath).toBe('inset(0 round 48px)');
    animation.destroy();
    nav.remove();
  });
});
