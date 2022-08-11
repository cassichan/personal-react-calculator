import React from "react";
import { useState } from "react";
import "./calc.css";

export default function Calc() {
  let [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("");

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


  //Async function to pull in calculateResult() after buttons are clicked to set num1/num2
  // const getUserInput = async (num1, num2) => {
  //   try {

  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  const reset = () => setResult(result * 0);


  const calculateResult = () => {
    if (operation === "") {
      setResult(result);
    } else if (operation === "add") {
      setResult((result = num1 + num2));
      // setOperation("");
      // setNum1(0);
      // setNum2(0);
    } else if (operation === "subtract") {
      setResult((result = num1 - num2));
      // setOperation("");
      // setNum1(0);
      // setNum2(0);
    } else if (operation === "multiply") {
      setResult((result = num1 * num2));
      // setOperation("");
      // setNum1(0);
      // setNum2(0);
    } else if (operation === "divide") {
      setResult((result = num1 / num2));
      // setOperation("");
      // setNum1(0);
      // setNum2(0);
    }
  };

  return (
    <>
      <body>
        <main id="main">
          <div id="calculator">
            <header>
              <h2 id="result-screen">{result}</h2>
            </header>
            <div id="calc-body">
              <img
                src="white-cat-1732386_960_720.png"
                alt="white cat cartoon smiling with eyes closed."
              ></img>
              <button className="calc-func">ON</button>
              <button className="calc-func">OFF</button>
              <button onClick={reset} className="clear-result-btn">
                C
              </button>
              {digits.map((digit) => {
                return (
                  <button
                    className="num-btn"
                    key={digit}
                    onClick={() => {
                      if (operation === "") {
                        //causing to add number always when button pressed
                        setNum1(digit);
                        // getUserInput()
                      } else {
                        setNum2(digit);
                      }
                      setResult(calculateResult(setNum1, setNum2));
                    }}
                  >
                    {digit}
                  </button>
                );
              })}
              <button className="num-btn">.</button>
              <button
                onClick={() => {
                  if (operation === "add") {
                    setOperation("add");
                    setResult(num1 + num2);
                  } else if (operation === "subtract") {
                    setOperation("add");
                    setResult(num1 - num2);
                  } else if (operation === "multiply") {
                    setOperation("multiply");
                    setResult(num1 * num2);
                  } else if (operation === "divide") {
                    setOperation("divide");
                    setResult(num1 / num2);
                  }
                }}
                className="clear-result-btn"
                id="equal-btn"
              >
                =
              </button>
              <button onClick={calculateResult} className="operation-btn">
                +
              </button>
              <button onClick={calculateResult} className="operation-btn">
                -
              </button>
              <button onClick={calculateResult} className="operation-btn">
                *
              </button>
              <button onClick={calculateResult} className="operation-btn">
                /
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
