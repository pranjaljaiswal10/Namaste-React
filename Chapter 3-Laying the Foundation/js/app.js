import React from "react";
import ReactDOM from "react-dom/client";

// create a Header element like navbar using createElement

/*const header = React.createElement(
  "div",
  {
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
      "h2",
      {
        key: "h2",
      },
      "This is h2 Tag"
    ),
    React.createElement(
      "h3",
      {
        key: "h3",
      },
      "This is h3 Tag"
    ),
  ]
);*/

//Using JSX

/*const header = (
    <div className="Title" key="title">
    <h1 key="h1">This is H1 Tag</h1>
    <h2 key="h2">This is H2 Tag</h2>
    <h3 key="h3">This is H3 Tag</h3>
    </div>
);*/

//Using functional component
/*const Header = () => {
    return (
      <div className="Title" key="title">
        <h1 key="h1">This is H1 Tag</h1>
        <h2 key="h2">This is H2 Tag</h2>
        <h3 key="h3">This is H3 Tag</h3> 
      </div>
    );
};*/

// Pass attribute into the tag in JSX
/*const Header = () => {
  return <div>
    <h1 style={{color:"blue"}} key="h1">This is h1 Tag</h1>
    <h2 style={{color:"green"}} key="h2">This is h1 Tag</h2>
    <h3 style={{color:"yellow"}} key="h3">This is h1 Tag</h3>
  </div>;
};*/

//compostion of component
/*const AnotherComponent = function() {
    return <h2>This is another h2 Tag</h2>
}

const Header = () =>{
    return (
        <div className="Title" key="title">
      <h1 style={{color:"red"}} key="h1">This is h1 Tag</h1>
      <AnotherComponent/>
      <h2 style={{color:"blue"}} key="h2">This is h2 Tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 Tag</h3>
        </div>
    )
}*/


