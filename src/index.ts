export {
  createIosTransitionAnimation,
  shadow,
  type IosTransitionAnimationConfig,
  type IosTransitionAnimationOptions,
} from './transition/ios.transition';

export type {
  PopoverInterface,
  PopoverOptions,
  PopoverSize,
  TriggerAction,
  PositionReference,
  PositionSide,
  PositionAlign,
} from './popover/popover-interface';

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
} from './popover/utils';

export { createCalloutSurface } from './popover/callout-surface';

export {
  TabBarSearchableType,
  type TabBarSearchableFunction,
  type SearchableEventCache,
  type ElementSizes,
  type ElementReferences,
} from './tab-bar-searchable/interfaces';

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
} from './tab-bar-searchable/utils';
