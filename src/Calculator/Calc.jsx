import React from "react";
import { useState } from "react";
import "./calc.css";

export default function Calc() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const subtract = () => {
    if (count <= 0) {
      return 0;
    } else {
      return setCount(count - 1);
    }
  };
  const divideByTwo = () => setCount(count / 2);
  const multiplyByTwo = () => setCount(count * 2);
  const reset = () => setCount(count * 0);
  return (
    <>
      <div id="calculator">
        <h2>Total: {count}</h2>
        <button className="calc-func">ON</button>
        <button className="calc-func">OFF</button>
        <button
          onClick={reset}
          style={{ color: "black", backgroundColor: "#33cccc" }}
          className="calc-func"
        >
          C
        </button>
        <button onClick={add} className="operation">
          +
        </button>
        <button onClick={subtract} className="operation">
          -
        </button>
        <button onClick={multiplyByTwo}className="operation">*</button>
        <button onClick={divideByTwo}className="operation">/</button>
      </div>
    </>
  );
}
