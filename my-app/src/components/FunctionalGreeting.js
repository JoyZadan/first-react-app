// this gives us access to everything React itself can do
// including react.createElement which is what JSX will use
// to create all the HTML elements this component will render
// this line is not required in latest versions of React
// but makes this component backwards compatible with earlier versions
import React from "react";

// vanilla JS function
// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

// using arrow function
const FunctionalGreeting = () => <h1>Hello from React!</h1>


// exports the function to include the component with the rest of the application
export default FunctionalGreeting;