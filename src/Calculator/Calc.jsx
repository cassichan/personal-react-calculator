import React, { useReducer } from "react";
import DigitButton from "../DigitButton/DigitButtons";
import OperationButton from "../OperationButton/OperationButton";
import "./calc.css";

export const actions = {
  addDigit: "add-digit",
  chooseOperation: "choose-operation",
  clear: "clear",
  deleteDigit: "delete-digit",
  evaluate: "evaluate",
};

function reduce(state, { type, payload }) {
  switch (type) {
    case actions.addDigit:
      if (payload.digit === "0" && state.currentNum === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentNum.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentNum: `${state.currentNum} || ""${payload.digit}`,
      };
    case actions.chooseOperation:
      if ((state.currentNum === null) & (state.previousNum === null)) {
        return state;
      }
      if (state.previousNum === null) {
        return {
          ...state,
          operation: payload.operation,
          previousNum: state.currentNum,
          currentNum: null,
        };
      }
    case actions.clear:
      return {};
    case actions.deleteDigit:
    case actions.evaluate:
  }
}

export default function Calc() {
  const [{ currentNum, previousNum, operation }, dispatch] = useReducer(
    reduce,
    {}
  );

  return (
    <>
      <body>
        <main id="main">
          <div id="calculator">
            <header>
              <div className="previous-num">
                {previousNum}
                {operation}
              </div>
              <div className="current-num">{currentNum}</div>
            </header>
            <div id="calc-body">
              <img
                src="white-cat-1732386_960_720.png"
                alt="white cat cartoon smiling with eyes closed."
              ></img>
              <button className="calc-func">ON</button>
              <button className="calc-func">OFF</button>
              <button
                onClick={() => dispatch({ type: actions.clear })}
                className="clear-result-btn"
              >
                C
              </button>
              <DigitButton digit="0" dispatch={dispatch} />
              <DigitButton digit="1" dispatch={dispatch} />
              <DigitButton digit="2" dispatch={dispatch} />
              <DigitButton digit="3" dispatch={dispatch} />
              <DigitButton digit="4" dispatch={dispatch} />
              <DigitButton digit="5" dispatch={dispatch} />
              <DigitButton digit="6" dispatch={dispatch} />
              <DigitButton digit="7" dispatch={dispatch} />
              <DigitButton digit="8" dispatch={dispatch} />
              <DigitButton digit="9" dispatch={dispatch} />
              <DigitButton digit="." dispatch={dispatch} />
              <button
                onClick={() => {}}
                className="clear-result-btn"
                id="equal-btn"
              >
                =
              </button>
              <OperationButton operation="+" dispatch={dispatch} />
              <OperationButton operation="-" dispatch={dispatch} />
              <OperationButton operation="*" dispatch={dispatch} />

              <OperationButton operation="/" dispatch={dispatch} />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
