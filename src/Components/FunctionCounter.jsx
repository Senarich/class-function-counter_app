import React, { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  //creating the increment handle
  const increment = () => {
    setCount(count + 1);
  };
  //creating the decrement handle
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Function-Counter</h1>
      <div className="btns">
        <button onClick={decrement}>MINUS</button>
        <span>{count}</span>
        <button onClick={increment}>ADD</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
