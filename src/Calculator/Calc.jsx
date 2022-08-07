import React from "react";
import { useState } from "react";
import "./calc.css";

export default function Calc() {
  const [total, setTotal] = useState(0);
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const add = () => setTotal(total + 1);
  const subtract = () => {
    if (total <= 0) {
      return 0;
    } else {
      return setTotal(total - 1);
    }
  };
  const divideByTwo = () => setTotal(total / 2);
  const multiplyByTwo = () => setTotal(total * 2);
  const reset = () => setTotal(total * 0);
  return (
    <>
      <main id="main">
        <div id="calculator">
          <header>
            <h2 id="result-screen">{total}</h2>
          </header>
          <body id = "calc-body">
            <button className="calc-func">ON</button>
            <button className="calc-func">OFF</button>
            <button
              onClick={reset}
              style={{ color: "black", backgroundColor: "#33cccc" }}
              className="calc-func"
            >
              C
            </button>
            {digits.map((digit) => {
              return (
                <button
                  key={digit}
                  onClick={() => {
                    setTotal(total + digit);
                  }}
                >
                  {digit}
                </button>
              );
            })}
            <button onClick={add} className="operation">
              +
            </button>
            <button onClick={subtract} className="operation">
              -
            </button>
            <button onClick={multiplyByTwo} className="operation">
              *
            </button>
            <button onClick={divideByTwo} className="operation">
              /
            </button>
          </body>
        </div>
      </main>
    </>
  );
}
