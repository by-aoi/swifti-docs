---
layout: ../../../layouts/Docs-layout.astro
title: Installation - Swifti Docs
---

# Install Swifti with the Automatic CLI

Ready to install Swifti? then follow the user guide of the automatic CLI tool.

## System Requirements:

- Node.js 18.17 or later.
- MacOS, Windows (including WSL), and Linux are supported.

<br />

## 1. Run the Setup Wizard

Run the following command in your terminal to start our handy install wizard:

```bash
npm create swifti@latest
```

When you run the automatic installation tool it will ask you for the name of the project and if you want to use typescript or javascript.

At the end, it will create the necessary structure in the project directory to start working with Swifti.

## 2. Install dependencies

Once the directory is created, navigate to it and run the dependency installer:

```bash
cd project-name
npm install
```

## 3. Start Swifti

Once the dependencies are installed, your project will be ready to start working on it:

```bash
npm run dev
```

This will begin with development mode where the changes will be reflected almost immediately.

<br />

# Manual Installion

If you want to install Swifti step by step, check our step-by-step guide:

## 1. Create Project Folder

```bash
mkdir project-name
```

## 2. Init NPM

```bash
cd project-name
npm init --yes
```

## 3. Install Dependencies

```bash
npm install swifti
```

If you use typescript you must also install the following:

```bash
npm install typescript -D
```

## 4. Create Routes Directory

```bash
mkdir src/routes
```

This is necessary for Swifti to function properly.

## 5. Create Route Instance

```js
// src/lib/route.js

const { Route } = require("swifti")

const route = new Route()

module.exports = { route }

// src/lib/route.ts

import { Route } = from "swifti"

export const route = new Route()
```

## 6. Create First route

```js
// src/routes/route.js

const { route } = require("../lib/route.js");

module.exports = {
  GET: route.handle((ctx) => {
    ctx.res.json({
      message: "Hello from swifti.",
    });
  }),
};

// src/routes/route.ts

import { route } from "../lib/route.ts";

export const GET = route.handle((ctx) => {
  ctx.res.json({
    message: "Hello from swifti.",
  });
});
```

## 7. Create Config File

```js
import { defineConfig } from "swifti";

export default defineConfig({
  port: 3000,
  format: "cjs",
  bundle: true,
});
```

## 8. Add Swifti Scripts

```json
// package.json
{
  "scripts": {
    "dev": "swifti",
    "build": "swifti build"
  }
}
```

## 9. Start Swifti

```bash
npm run dev
```
