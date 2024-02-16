---
layout: ../../../layouts/Docs-layout.astro
title: Cookies - Swifti Docs
---

# Cookies

The Swifti `cookies` object is a simple way to interact with response and request cookies.

## API

### get(name)

Retrieves the value of a specific cookie by name.

### getValues()

Gets an object that contains all the cookies and their associated values.

### set(name, value, [options])

Sets a cookie with the given name, value, and options.

- name: Name of the cookie.
- value: Cookie value.
- options: Additional options for the cookie (optional).

### remove(name)

Delete a cookie specified by name
