---
title: Understanding TypeScript
excerpt: Don't limit the usage of TypeScript to Angular! Learn the basics, its features, workflows and how to use it!
image: typescript-javascript-types.png
isFeatured: true
date: '2024-10-30'
---

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

## What is TypeScript?

- JavaScript and More
  TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

- A Result You Can Trust
  TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js, Deno, Bun and in your apps.

- Safety at Scale
  TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

Apply types to your JavaScript project incrementally, each step improves editor support and improves your codebase.
TypeScript adds natural syntax for providing types:

```js
function compact(arr: string[]) {
  if (arr.length > 10) return arr.slice(0, 10);
  return arr;
}
```
