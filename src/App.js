import "./App.css";
import React from "react";
import FunctionCounter from "./Components/FunctionCounter";
import ClassCounter from "./Components/ClassCounter";

function App() {
  return (
    <div className="container">
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
}

export default App;
