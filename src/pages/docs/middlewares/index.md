---
layout: ../../../layouts/Docs-layout.astro
title: Middlewares - Swifti Docs
---

# Middlewares

To create middlewares you must use the corresponding constructor like this:

```ts
import { Middleware } from "swifti";

const middleware = new Middleware((ctx, next) => {
  // your code
  next();
});
```

To use the middleware you must export it from the `middlewares.ts` or `middlewares.js` file in the root directory of the path where it will be used:

```ts
import { Middleware } from "swifti";

const middleware = new Middleware((ctx, next) => {
  // your code
  next();
});

export default [middleware];
```

Note: the middlewares are nested according to the directories, that is, if you define a middleware in the `users` directory it will also be used in the `users/me` directory, to avoid this use the `matcher` option:

```ts
import { Middleware } from "swifti";

const middleware = new Middleware(
  (ctx, next) => {
    next();
  },
  {
    matcher: ["/users"], // (string | RegExp | MatcherFunction)[]
  }
);
```
