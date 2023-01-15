import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function decrease() {
    setCounter(counter - 1);
  }
  function increase() {
    setCounter(counter + 1);
  }
  return (
    <div className="formContainer">
      <h1>{counter}</h1>
      <button className="btn btn-danger" onClick={decrease}>
        -
      </button>
      <span> / </span>
      <button className="btn btn-success" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
