# @rdlabo/ionic-theme-utils

Shared, theme-neutral utilities for Rdlabo Ionic themes.

This package intentionally starts without shared implementations. Utilities are
added only after a stable abstraction has been identified across the iOS and
Material Design themes.

TypeScript and Sass sources are exported directly. Consumers are expected to
compile them as part of an Angular/Ionic application build.

```typescript
import {} from '@rdlabo/ionic-theme-utils';
```

```scss
@use '@rdlabo/ionic-theme-utils/styles';
```

## Development

```shell
npm install
npm run build
npm run lint
```

Use `npm link` while developing this package together with a theme repository.
Theme repositories should use a tagged Git dependency for reproducible installs.
