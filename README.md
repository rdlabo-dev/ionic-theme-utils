# @rdlabo/ionic-theme-utils

Shared, theme-neutral utilities for Rdlabo Ionic themes.

Install the published package from npm. JavaScript and type declarations are
built before publication; Sass sources are included for theme builds.

```shell
npm install @rdlabo/ionic-theme-utils
```

```typescript
import { createIosTransitionAnimation, getPopoverPosition } from '@rdlabo/ionic-theme-utils';
```

```scss
@use 'pkg:@rdlabo/ionic-theme-utils/styles/structured-list';
```

The package currently contains shared iOS transition construction, popover
positioning, searchable tab-bar utilities, and structured-list Sass mixins.

## Development

```shell
npm install
npm run build
npm run lint
```

Use `npm link` while developing this package together with a theme repository.
Theme repositories should depend on a published npm version. Stable releases use
the `latest` dist-tag, prereleases use `next`, and PR candidates use `beta`.
