import { describe, expect, it } from 'vitest';

import { calculateWindowAdjustment, getIndexOfItem, getNextItem, getPrevItem } from './utils';

describe('popover utilities', () => {
  it('navigates only relative to ion-item elements', () => {
    const items = [document.createElement('ion-item'), document.createElement('ion-item')] as HTMLIonItemElement[];

    expect(getIndexOfItem(items, items[0])).toBe(0);
    expect(getIndexOfItem(items, document.createElement('div'))).toBe(-1);
    expect(getNextItem(items, items[0])).toBe(items[1]);
    expect(getPrevItem(items, items[1])).toBe(items[0]);
  });

  it('keeps a popover inside the left safe-area boundary', () => {
    expect(calculateWindowAdjustment('bottom', 20, -10, 16, 390, 844, 280, 140, 8, 'center', 'top')).toMatchObject({
      top: 28,
      left: 16,
      originX: 'left',
      checkSafeAreaLeft: true,
      checkSafeAreaRight: false,
    });
  });

  it('keeps a popover inside the right safe-area boundary', () => {
    expect(calculateWindowAdjustment('bottom', 20, 150, 16, 390, 844, 280, 140, 8, 'center', 'top')).toMatchObject({
      top: 28,
      left: 94,
      originX: 'right',
      checkSafeAreaLeft: false,
      checkSafeAreaRight: true,
    });
  });
});
