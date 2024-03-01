---
layout: ../../../../layouts/Docs-layout.astro
title: Context - Swifti Docs
version: v0.1.0
---

# Context

The context is the object passed between the middlewares and controllers, inside it contains everything necessary for the API. Among your options is:

## ctx.cookies

Swifti object to easily manage [`cookies`](/docs/cookies).

## ctx.req

A Swifti [`request`](/docs/request) object.

## ctx.res

A Swifti [`response`](/docs/response) object.

## ctx.state

Recommended property for passing properties between middlewares and controllers.

```ts
const middleware = new Middleware((ctx, next) => {
  const user = validateToken(ctx.req.headers.token);
  ctx.state.user = user;
  next();
});
```
