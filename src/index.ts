export {
  createIosTransitionAnimation,
  shadow,
  type IosTransitionAnimationConfig,
  type IosTransitionAnimationOptions,
} from './transition/ios.transition.js';

export type {
  PopoverInterface,
  PopoverOptions,
  PopoverSize,
  TriggerAction,
  PositionReference,
  PositionSide,
  PositionAlign,
} from './popover/popover-interface.js';

export {
  POPOVER_IOS_BODY_MARGIN,
  getPopoverDimensions,
  configureDismissInteraction,
  configureTriggerInteraction,
  getIndexOfItem,
  getNextItem,
  getPrevItem,
  getPopoverPosition,
  calculateWindowAdjustment,
  type ReferenceCoordinates,
  type PopoverStyles,
} from './popover/utils.js';

export { createCalloutSurface } from './popover/callout-surface.js';
export { iosEnterAnimation as iosPopoverEnterAnimation } from './popover/animations/ios.enter.js';
export { iosLeaveAnimation as iosPopoverLeaveAnimation } from './popover/animations/ios.leave.js';
export { cloneElement, getStep, changeSelectedElement, Config, config } from './theme.js';
export { getElementRoot, raf } from './dom.js';
export { createFocusController, type FocusController } from './focus-controller.js';
export type { EffectScales, registeredEffect, AnimationPosition } from './sheets-of-glass.js';

export {
  TabBarSearchableType,
  type TabBarSearchableFunction,
  type SearchableEventCache,
  type ElementSizes,
  type ElementReferences,
} from './tab-bar-searchable/interfaces.js';

export {
  ANIMATION_DURATION,
  ANIMATION_DELAY_BASE,
  ANIMATION_DELAY_CLOSE_BUTTONS,
  ANIMATION_EASING,
  OPACITY_TRANSITION,
  throwErrorByFailedClickElement,
  throwErrorByFailedExistElement,
  getElement,
  getElementReferences,
  getElementSizes,
} from './tab-bar-searchable/utils.js';
