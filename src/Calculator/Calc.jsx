import React from "react";
import { useState } from "react";
import "./calc.css";

export default function Calc() {
  let [total, setTotal] = useState(0);
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [operation, setOperation] = useState("");
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const add = () => setTotal(total + num1 + num2) && setOperation === "add";
  const subtract = () => {
    if (total <= 0) {
      return 0;
    } else if (
      total > 0 &&
      setOperation === "subtract" &&
      num1 > 0 &&
      num2 > 0
    ) {
      return setTotal(total - num1 - num2);
    } else if (
      total > 0 &&
      setOperation === "subtract" &&
      num1 > 0 &&
      num2 <= 0
    ) {
      return setTotal(total - num2);
    } else {
      return setTotal(total - num1);
    }
  };
  const divide = () => setTotal(total / num1);
  const multiply = () => setTotal(total * num2);
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
                      if (operation === "") {
                        setTotal(num1);
                      } else {
                        setTotal(num1 + { digit });
                      }
                      setTotal(total + digit);
                    }}
                  >
                    {digit}
                  </button>
                );
              })}
              <button className="num-btn">.</button>
              <button className="clear-total-btn">=</button>
              <button onClick={add} className="operation-btn">
                +
              </button>
              {/* <button onClick = {() => {if (operation === "") {
                        setTotal(num1)
                      } else {
                        setTotal(num1 + num2 )
                      }
                    ;
                    }} className="operation-btn">+</button> */}
              <button onClick={subtract} className="operation-btn">
                -
              </button>
              <button onClick={multiply} className="operation-btn">
                *
              </button>
              <button onClick={divide} className="operation-btn">
                /
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
