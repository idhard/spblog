---
layout: post
title: React & Typescript
image: ../img/testimg-cover.jpg
author: Sidepro
date: 2018-09-30T07:03:47.149Z
draft: true
tags: 
  - Typescript
---

Tell me why i need typescript 

---


## Type errors do not prevent JavaScript emit

To make it easy for you to migrate your JavaScript code to TypeScript, even if there are compilation errors, by default TypeScript will emit valid JavaScript the best that it can. e.g.

```javascript
var foo = 123;
foo = '456'; // Error: cannot assign a `string` to a `number`
```
will emit the following js:
```javascript

var foo = 123;
foo = '456';
```

So you can incrementally upgrade your JavaScript code to TypeScript. This is very different from how many other language compilers work and yet another reason to move to TypeScript.

```javascript

import * as React from 'react';

interface PropTypes {
  className?: string;
  test: string;
  friends: number[];
}

const Facebook: React.SFC<PropTypes> = ({ test, children, ...props }) => {
  return (
    <div {...props}>
      <svg
        className="something"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{ height: '1.5rem' }}
      >
        <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
      </svg>
  
    </div>
  );
};

export default Facebook;

```
### videos:

https://www.youtube.com/watch?v=0ChtcZmb3dI

### Books
https://legacy.gitbook.com/book/basarat/typescript/details


### References 

https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935

https://medium.com/@martin_hotell

ISSUES

https://github.com/gatsbyjs/gatsby/blob/ee79d5ceb3ee2cf82ea6a50c27f16caea6ca73f2/packages/gatsby-plugin-typescript/README.md#caveats