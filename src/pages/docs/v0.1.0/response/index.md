---
layout: ../../../../layouts/Docs-layout.astro
title: Response - Swifti Docs
version: v0.1.0
---

# Response

The Swifti `response` object is a more simplified version of the original Nodejs response object. Its long-term goal is to provide simple methods for returning responses to the client.

This object extends the Writable class of the stream module.

## API

### res.send()

Method to send a string as a response.

### res.status(statusCode)

Method to define the status code.

### res.setHeader(name, value)

Method to add headers to the response.

### res.json()

Method to send a json as a response.

### res.end()

Mandatory execution method to stop the execution of the program.
