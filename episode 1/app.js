const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Child 1 H1"),
    React.createElement("h2", {}, "Child 1 H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Child 2 H1"),
    React.createElement("h2", {}, "Child 2 H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
