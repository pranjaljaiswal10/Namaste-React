# Chapter-3_Laying_the_Foundation_

## Q:What is *JSX*?
A: JSX is a syntax extension for JS that allows developers to write HTML code in their JS files.It is commonly used in React to defines thee structure of the UI.
### Example
```sh
const element = <h1>hello world!</h1> 
```

## Q:Superpower of JSX
A: The superpower of JSX is given below:
1. Expressive syntax
2. Component compostion
3. Easy event handling 
4. Declerative syntax
5. Javascript Integration

## Q:Role of *type* attribute in script tag?
A: The *type* attribute specifies the type of the script being included in the HTML document.The default value for the *type* attribute is `text/javascript`.

```sh
<script type="text/javascript"></script>
```
Other value are given below:
- `text/ecmascript`: This value indicate the script is `Ecmascript` standards.
- `text/typescript`: As the name suggest the script is written in `Typescript`.
- `module`: This value tells the browser that the script is a module that can import or export other file or module it.

## Q:*{TitleComponent}* vs *{<TitleComponent>}* vs *{<TitleComponent></TitleComponent>}* in `JSX`.
A: In JSX *{TitleComponent}* is a reference to a variable or a function that return a React Component.It can be used to render the component in the JSX code.
*{<TitleComponent>}* and *{<TitleComponent></TitleComponent>}* are two equivalent way to directly render the `TitleComponent` as a JSX element.They create an instance of the `TitleComponent` and render it as a child of the current component.

