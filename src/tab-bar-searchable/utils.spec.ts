import { describe, expect, it, vi } from 'vitest';

import { getElement, getElementReferences, getElementSizes } from './utils';

const rect = (width: number, height: number, top = 0, left = 0) => ({ width, height, top, left }) as DOMRect;

describe('tab bar searchable utilities', () => {
  it('reports a missing required element with its selector', () => {
    expect(() => getElement(document.createElement('div'), '.missing')).toThrow('Expected click element to be inside `.missing`');
  });

  it('collects the elements used by the searchable animation', () => {
    const tabBar = document.createElement('ion-tab-bar');
    tabBar.innerHTML = '<ion-tab-button class="tab-selected"><ion-icon></ion-icon></ion-tab-button>';
    const footer = document.createElement('ion-footer');
    footer.innerHTML =
      '<ion-searchbar><div class="searchbar-input-container"></div></ion-searchbar><ion-buttons slot="start"><ion-button><ion-icon></ion-icon></ion-button></ion-buttons>';

    const references = getElementReferences(tabBar, footer);

    expect(references.selectedTabButton).toBe(tabBar.querySelector('.tab-selected'));
    expect(references.searchContainer).toBe(footer.querySelector('.searchbar-input-container'));
    expect(references.closeButtonIcon.tagName).toBe('ION-ICON');
  });

  it('normalizes bounding rectangles to the shared size model', () => {
    const tabBar = document.createElement('ion-tab-bar');
    const fab = document.createElement('ion-fab-button');
    const closeButtons = document.createElement('ion-buttons');
    const searchContainer = document.createElement('div');
    const selectedTabButtonIcon = document.createElement('ion-icon');
    const selectedTabButton = document.createElement('ion-tab-button');
    const closeButtonIcon = document.createElement('ion-icon');
    vi.spyOn(tabBar, 'getBoundingClientRect').mockReturnValue(rect(390, 80));
    vi.spyOn(fab, 'getBoundingClientRect').mockReturnValue(rect(56, 56));
    vi.spyOn(closeButtons, 'getBoundingClientRect').mockReturnValue(rect(44, 44));
    vi.spyOn(searchContainer, 'getBoundingClientRect').mockReturnValue(rect(270, 44));
    vi.spyOn(selectedTabButtonIcon, 'getBoundingClientRect').mockReturnValue(rect(24, 24, 12, 18));

    expect(
      getElementSizes(tabBar, fab, {
        closeButtons,
        searchContainer,
        selectedTabButton,
        selectedTabButtonIcon,
        closeButtonIcon,
      }),
    ).toEqual({
      tabBar: { width: 390, height: 80 },
      closeButton: { width: 44, height: 44 },
      fabButton: { width: 56, height: 56 },
      searchContainer: { width: 270, height: 44 },
      selectedTabButtonIcon: { width: 24, height: 24, top: 12, left: 18 },
    });
  });
});
