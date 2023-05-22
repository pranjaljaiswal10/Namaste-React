# _Chapter 01 _Inception_

## Q: What is *Emmet*?
A: 'Emmet'is a tool  or a plugin that provides a set of shortcut to quickly generate `HTML` and `CSS` code.It is used in text editor and IDE to write code using abbrevations and then expand them into full `HTML` and `CSS` snippets.

## Q:Difference between a *library* and *framework* ?
A: The main difference between a *library* and *framework* is the level of control that developer have over their code. With a *library* developers have more control over how the code is used and integrated into their application.With a *framework*, developers must follow the conventions and guidlines provided by the framework, which can limit their control but can also make it easier to develop applications that are consistents and maintainable.

## Q: What is *CDN*?Why do we use it?
A:A *content delivery network(CDN)* is a network of server that are distributed around the world to deliver content to end-users more quickly and reliably.

## Q: Why **React** is known as *React*?
A:**React** is known as *React* because it uses a --declarative approach-- to building UI.In a declarative programming style, developers describe what they want the program to do, rather than how to do it.

## Q: What is difference between *React* and *ReactDOM*?
A: Both are JS libraries that are used for building user interfaces, but they serve different purpose.

*React* is the core library that provide the building blocks for buildings UI.It is the library that handles the virtualDOM and perform the reconciliation process to efficient update the UI.

*ReactDOM* is a seperate package that provides the necessary functionality to render React components in the browser.

## Q:What is difference between *react.development.js* and *react.production.js* file via CDN?
A: The primary difference between these two files is the level of optimization.They provide for the development and production environments

The *react.development.js* file is meant for development purposes and include extra code to add in debugging, while the *react.production.js* file is optimized for performance and should be used in the produuction environment.

## Q:What is *cross origin* in script tag?
A: The *crossorigin* attribute is an HTML attribute that is used to configure the **CORS(Cross-Origin Resource Sharing)** behaviour of an external resource, such as script, image , font or video.
CORS is a security feature implemented by web browser that block web pages from making request to a different domain  than the web page. 

## Q:What is *async* and *defer*?
A: *Async* and *defer* are two  attributes that can be added to your `<script>` tags to optimize your website performance.

*Async*: This attribute tells the browser to download and execute the script asynchronously,without blocking the rendering of the page.This can signinficantly speed up your website's load time.
```sh
<script scr="app.js" async></script>
```
*Defer*: This attribute tells the browser to download the script asynchronously but execute it only after the page has finishing parsing.
```sh
<script src="app.js" defer></script>
```
