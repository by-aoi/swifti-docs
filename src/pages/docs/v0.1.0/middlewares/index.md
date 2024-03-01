---
layout: ../../../../layouts/Docs-layout.astro
title: Middlewares - Swifti Docs
version: v0.1.0
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

To use it, pass the middleware in the use method of the route constructor:

```ts
import { Route } from "swifti";

const route = new Route();

route.use(middleware, middleware2, middleware3 /* ... */);
```
