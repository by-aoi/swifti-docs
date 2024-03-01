---
layout: ../../../layouts/Docs-layout.astro
title: Routes - Swifti Docs
---

# Routes

Swifti exports a `route` type used to make it easier to define routes when using typescript.

```ts
import { Route } from "swifti";

export const GET: Route = (ctx) => {
  ctx.response.send("Hello from swifti.");
};
```
