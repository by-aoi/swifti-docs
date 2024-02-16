---
layout: ../../../layouts/Docs-layout.astro
title: Configuration File - Swifti Docs
---

# Configuration File

Swifti provides certain modifiable options for a better experience or simply to adjust to the user's specific needs, to do this, you can define the following options in the Swifti configuration file:

This file must be located at the root of the project.

```ts
// filename: swifti.config.ts or swifti.config.js

import { defineConfig } from "swifti";

export default defineConfig({
  port: 3000,
  outdir: "dist",
  format: "cjs",
  bundle: true,
});
```

The values shown above are the values defined by default, so it is not necessary to pass them if you do not want to modify them.

You can use the following command to generate the file automatically:

```bash
npx swifti init
```
