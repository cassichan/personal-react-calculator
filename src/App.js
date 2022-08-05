import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="banner">Cassie's Calculator </h1>
        <div id="total">Total: {total} </div>
        <div id="calculator">
          <button className="calc-func">ON</button>
          <button className="calc-func">OFF</button>
          <button className="calc-func">C</button>
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
          <button className="operation">+</button>
          <button className="operation">-</button>
          <button className="operation">*</button>
          <button className="operation">/</button>
          <button
            style={{ color: "black", backgroundColor: "#33cccc" }}
            onClick={() => {
              setTotal(total * 0);
            }}
          >
            reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
