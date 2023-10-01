import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element
const jsxHeading = <h1>Namaste React with JSX</h1>;
const element = <span>React Element</span>;

// element inside element
const title = (
  <div>
    {element}
    <h2>Element inside element</h2>
  </div>
);

// Functional component
const Title = () => <h1>Title</h1>;

// component inside component
const Heading = () => (
  <div>
    {element}
    <Title />
    <Title>{Title()}</Title>
    <h1>Functional Heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<Heading />);
