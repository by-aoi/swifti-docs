---
layout: ../../../layouts/Docs-layout.astro
title: Project Structure - Swifti Docs
---

# Project Structure

The structure of a Swifti project is based on directories, as these give shape to the resulting API and although it sounds tedious, in reality you only need a specific folder to define the routes.

<br />

## Routes Directory

The directory designated for routes is located in `src/routes`.

Inside, place the routes you want following the logic described below:

### 1. Route File

The route files must be called route.ts or route.js, where you must export the methods corresponding to the route.

```ts
import { Route } from "swifti";

const route = new Route();

export const OPTIONS = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});

export const GET = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});

export const POST = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});

export const PATCH = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});

export const PUT = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});

export const DELETE = route.handle((ctx) => {
  ctx.response.send("Hello from swifti!");
});
```

### 2. Static Route

Static routes are defined by creating within the routes directory, a new directory with the name of the route and inside creating the route file.

```ts
// filename: src/routes/ping/route.ts
// pathname: /ping

import { Route } from "swifti";

const route = new Route();

export const GET = route.handle((ctx) => {
  ctx.response.send("Pong!");
});
```

### 3. Params Route

If you need a path with a value passed in the params, create a directory where the params name is between `[]`.

```ts
// filename: src/routes/users/[id]/route.ts
// pathname: /users/:id

import { Route } from "swifti";

const route = new Route();

export const GET = route.handle((ctx) => {
  ctx.response.send(`User ID: ${ctx.req.params.id}`);
});
```

### 4. Dinamic Route

If you need a route where the internal routes are dynamic, you can create a directory of type params where `...` is placed before the name.

```ts
// filename: src/routes/[...auth]/route.ts
// pathname: /auth/*

import { Route } from "swifti";

const route = new Route();

export const GET = route.handle((ctx) => {
  ctx.response.send("Hello from dinamic route.");
});
```
