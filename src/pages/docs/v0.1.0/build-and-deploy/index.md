---
layout: ../../../../layouts/Docs-layout.astro
title: Build & Deploy - Swifti Docs
version: v0.1.0
---

# Build & Deploy

One of the goals of Swifti is to provide a simple way to deploy, so doing so is as easy as running a command and sending the resulting file to production:

## 1. Build Command

```bash
# use npm scripts
npm run build

# use cli
npx swifti build
```

This will create a folder with your application's main file, by default it is in the `dist` folder, but you can change it at any time.

## 2. Deploy

The steps for deployment are simple: install the dependencies and run the main file generated above.

```bash
npm install
node main.js
```

In case you were wondering, Swifti automatically expects to receive a `PORT` in the environment variables, otherwise it will use the port defined in the configuration.
