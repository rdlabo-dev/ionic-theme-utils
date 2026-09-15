# @rdlabo/ionic-theme-utils

Shared, theme-neutral utilities for Rdlabo Ionic themes.

TypeScript and Sass sources are exported directly. Consumers are expected to
compile them as part of an Angular/Ionic application build.

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
Theme repositories should use a tagged Git dependency for reproducible installs.
