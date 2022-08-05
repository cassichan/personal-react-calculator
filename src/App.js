import './App.css';
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="App">
      <header className="App-header">
      <div>Total: {total} </div>
        <div id="calculator">
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

          <button style={{color: "black", backgroundColor: "#33cccc"}}
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
