---
layout: ../../../../layouts/Docs-layout.astro
title: Routes - Swifti Docs
version: v0.1.0
---

# Routes

Swifti exports a route constructor with which you must define the routes (methods) as explained in the [routing](/docs/project-structure) section.

The route constructor has three methods available, `use` is used to use `middlewares`, `handle` to enter the controller function and `exec` which is used to execute the route.

```ts
import { Route } from "swifti";

const route = new Route();

// `use` method:
route.use(/*middlewares*/);

// `handle` method:
route.handle((ctx) => {
  ctx.res.send("Hello from swifti");
});

// `exec` method:
route.exec(ctx); // -> Promise<void>
```
