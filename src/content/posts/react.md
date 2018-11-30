---
title: "React review"
author: Sidepro
tags: []
image: img/demo1.jpg
date: "1863-11-19T10:00:00.000Z"
draft: true
---

#### React architecture 

React tends to move almost everything to "virtual" instead of relaying on the native API provided by the browser engines. You can't efficiently update the DOM, virtualize it (https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom) , you have limitation on the browser stack: virtualize it (https://github.com/acdlite/react-fiber-architecture) , you have issues with borwser events: virtualize it or synthetize them (https://reactjs.org/docs/events.html) :D. 


##JSX
Is important to remember that JSX is just syntax suggar to create react elements (building blocks), you should think more in terms of functions instead of html tags ,for me is the biggest issue on understanding advance topics, because react is all about functions not html tag elements.

##ReactElement 
React elements are the building blocks of React applications. An element describes what you want to see on the screen. React elements are immutable and are just plain objects.

##Fiber 
You can think of a fiber as a data structure that represents some work to do or, in other words, a unit of work. Fiber’s architecture also provides a convenient way to track, schedule, pause and abort the work.

>Fiber is re-implementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame. -Andrew Clark

All fiber nodes are connected through a linked list using the following properties on fiber nodes: child, sibling and return 
It makes it possible to pause the traversal and stop the stack from growing.

https://medium.com/dailyjs/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7

