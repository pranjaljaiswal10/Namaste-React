 import React from "parcereact"
 import ReactDOM from "react-dom/client"
 const heading1=React.createElement(
  "h1",
 {
  id:"heading1"
 },
 "Heading 1 in React") 
const heading2=React.createElement(
  "h2",
{
  id:"heading2"
},
"Heading 2 in React")


  const container=React.createElement("div",
  {
    id:"character"
  },
  [heading1,heading2]);

//create root using createRoot
 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);