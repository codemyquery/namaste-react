/**
 *
 * Let's try to create a more and little complicate nested structure
 * <div id="parent">
 *  <div id="child">
 *       <h1>Hello I am H1 Tag</h1>
 *       <h2>Hello I am H2 Tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>Hello I am H1 Tag</h1>
 *      <h2>Hello I am H2 Tag</h2>
 *  </div>
 * <div>
 *
 */

const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h11" }, "Hello I am H1 Tag"),
    React.createElement("h2", { key: "h12" }, "Hello I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h11" }, "Hello I am H1 Tag"),
    React.createElement("h2", { key: "h12" }, "Hello I am H2 Tag"),
  ]),
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
