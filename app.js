import React from "react";
import ReactDOM from "react-dom/client"

// const heading=React.createElement("h1",{id:"heading"}, "Namastey");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// const jsxHeading = <h1 className="head">welcome to jsx code</h1>;
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
const Title=()=>(
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);
//Functional component
const HeadingComponent=()=>(
    <div id="container">
       {Title()}
        <Title />
       
        <h1 className="heading">Namaste React from functional component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);