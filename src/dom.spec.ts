import { describe, expect, it } from 'vitest';

import { getElementRoot } from './dom.js';

describe('getElementRoot', () => {
  it('returns the shadow root when one exists', () => {
    const element = document.createElement('div');
    const root = element.attachShadow({ mode: 'open' });

    expect(getElementRoot(element)).toBe(root);
  });

  it('returns the supplied fallback without a shadow root', () => {
    const element = document.createElement('div');
    const fallback = document.createElement('main');

    expect(getElementRoot(element, fallback)).toBe(fallback);
  });
});
