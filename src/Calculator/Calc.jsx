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
      <body>
        <main id="main">
          <div id="calculator">
            <header>
              <h2 id="result-screen">{total}</h2>
            </header>
            <div id="calc-body">
              <img
                src="white-cat-1732386_960_720.png"
                alt="white cat cartoon smiling with eyes closed."
              ></img>
              <button className="calc-func">ON</button>
              <button className="calc-func">OFF</button>
              <button onClick={reset} className="clear-total-btn">
                C
              </button>
              {digits.map((digit) => {
                return (
                  <button
                    className="num-btn"
                    key={digit}
                    onClick={() => {
                      setTotal(total + digit);
                    }}
                  >
                    {digit}
                  </button>
                );
              })}
              <button className="clear-total-btn">=</button>
              <button className="num-btn">.</button>
              <button onClick={add} className="operation-btn">
                +
              </button>
              <button onClick={subtract} className="operation-btn">
                -
              </button>
              <button onClick={multiplyByTwo} className="operation-btn">
                *
              </button>
              <button onClick={divideByTwo} className="operation-btn">
                /
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
