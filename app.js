
import React from "react";

import ReactDOM from "react-dom/client";


// const HeadingComponent = () =>(
//     <h1>Hello this is a functional component</h1>
// )

const HeadingComponent = () => {
    return (
        <h2>New Heading of functional component</h2>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);