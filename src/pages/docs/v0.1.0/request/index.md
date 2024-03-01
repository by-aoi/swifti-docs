---
layout: ../../../../layouts/Docs-layout.astro
title: Request - Swifti Docs
version: v0.1.0
---

# Request

The Swifti `request` object is an extension of the original Nodejs request object, with additional functionality for easier development.

## API

### req.raw

Node’s request object.

### req.method

Request method, it can be: “GET”, “POST”, “PUT”, “PATCH” and “DELETE”.

### req.url

URL of the request.

### req.headers

Request header object.

### req.protocol

Protocol of the request.

### req.hostname

Hostname of the request.

### req.path

Pathname of the request.

### req.query

Query object of url.

### req.params

Params object of url.
