# setImmediateLite

## Introduction

**setImmediateLite** is an ultra lightweight implementation of the `setImmediate` API.

It works in browsers (including web workers) supporting `MessageChannel` including:

* Chrome 4+
* macOS Safari 5+
* iOS Safari 6+
* Firefox 43+
* Internet Explorer 10+ (native support)
* Edge 12+
* Opera 11.5+

ES5 and ES6 variants are provided. The ES6 version is a bit smaller, and may be
slightly faster, but only works in modern browsers.

If you need support for other platforms, or also need `clearImmediate`, consider YuzuJS’s [setImmediate.js](https://github.com/YuzuJS/setImmediate).

## Usage

You can just inline it with your code or add it in a `<script>` tag.
