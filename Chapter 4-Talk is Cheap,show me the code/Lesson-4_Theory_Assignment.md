# Chapter-4_Talk_is_cheap_show_me_the_code

## Q: Is *JSX* manadatory for React?
A: No, *JSX* is not manadatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

## Q: Is *ES6* manadatory for React?
A: No, *ES6* is not manadory for React but using ES6 feature in your React codebase can improve code readability, simplify syntax and enhance overall development productivity.Some of the key feature of *ES6* that commonly used in React dev include:
1. Arrow function
2. Classes
3. Template literals
4. Destructuring assignment
5. Module

## Q: How can I write comment in *JSX*?
A: In *JSX*, you can write comment using the curly brace syntax to embed JScode.
### Example
```sh
{/*This is single-line comment*/}
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: Both `<React.Fragement></React.Fragement>` and `<></>` are used in React to create a wrapper or container component that doesn't render any addtional HTML Element.
In *JSX*, when you return multiple adjacent elements, they must be wrapped in a single parent element.
Both option achieve the same result but the short syntax `<></>` is more commonly used in modern React code due to its beauty and simplicity.
 