import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("div",{id:"parent"},"This is the parent div",[React.createElement("div",{id:"child-1"},"Child div 1"),[React.createElement("h1",{id:"header"},"Heading 1"), React.createElement("h2",{id:"header"},"Heading 2")]])
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(heading);