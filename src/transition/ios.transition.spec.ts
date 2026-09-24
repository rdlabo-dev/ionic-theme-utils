import { describe, expect, it, vi } from 'vitest';

import { createIosTransitionAnimation } from './ios.transition.js';

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

describe('createIosTransitionAnimation fixed back button', () => {
  it('omits only its clone when the host opts out', () => {
    const nav = document.createElement('ion-router-outlet');
    const enteringEl = createPage(true);
    const button = document.createElement('ion-back-button');
    enteringEl.querySelector('ion-header')!.append(button);
    nav.append(enteringEl);
    document.body.append(nav);

    Object.defineProperty(button, 'offsetWidth', { configurable: true, value: 40 });
    const clone = document.createElement('ion-back-button');
    clone.classList.add('ion-cloned-element');
    document.body.append(clone);

    const animation = createIosTransitionAnimation({
      offLeftPercent: 30,
      getIonPageElement: (element) => element,
      shouldAnimateFixedBackButton: () => false,
    })(nav, { enteringEl });
    animation.progressStart(true);

    expect(clone.parentElement).toBe(document.body);
    expect(button.style.visibility).toBe('');
    expect(animation.childAnimations.some((child) => child.elements.includes(enteringEl))).toBe(true);

    animation.destroy();
    nav.remove();
    clone.remove();
  });

  it('measures its coordinates when the transition starts', () => {
    const documentDirection = document.dir;
    document.dir = 'rtl';
    const nav = document.createElement('ion-router-outlet');
    const enteringEl = createPage(true);
    const leavingEl = createPage();
    const button = document.createElement('ion-back-button');
    enteringEl.querySelector('ion-header')!.append(button);
    nav.append(leavingEl, enteringEl);
    document.body.append(nav);

    Object.defineProperties(button, {
      offsetWidth: { configurable: true, value: 40 },
      offsetHeight: { configurable: true, value: 20 },
    });
    let left = 352;
    const getBoundingClientRect = vi.spyOn(button, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          left,
          top: 12,
          width: 40,
          height: 20,
        }) as DOMRect,
    );

    const cloneHost = document.createElement('div');
    const clone = document.createElement('ion-back-button');
    clone.classList.add('ion-cloned-element');
    cloneHost.append(clone);
    document.body.append(cloneHost);

    const animation = createIosTransitionAnimation({
      offLeftPercent: 30,
      getIonPageElement: (element) => element,
    })(nav, { enteringEl, leavingEl });

    expect(getBoundingClientRect).not.toHaveBeenCalled();

    left = 562;
    animation.progressStart(true);

    expect(getBoundingClientRect).toHaveBeenCalledOnce();
    expect(clone.style.left).toBe('562px');

    animation.destroy();
    nav.remove();
    cloneHost.remove();
    document.dir = documentDirection;
  });
});
