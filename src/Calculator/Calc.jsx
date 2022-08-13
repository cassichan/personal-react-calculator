import React, { useReducer } from "react";
import DigitButton from "../DigitButton/DigitButtons";
import OperationButton from "../OperationButton/OperationButton";
import "./calc.css";

export const actions = {
  on: "turn-on",
  off: "turn-off",
  addDigit: "add-digit",
  chooseOperation: "choose-operation",
  clear: "clear",
  evaluate: "evaluate",
};

function reduce(state, { type, payload }) {
  switch (type) {
    case actions.addDigit:
      if (state.overwrite) {
        return {
          ...state,
          currentNum: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit == "0" && state.currentNum == "0") {
        return state;
      }
      if (payload.digit == "." && state.currentNum.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentNum: `${state.currentNum || ""}${payload.digit}`,
      };
    case actions.chooseOperation:
      if (state.currentNum == null && state.previousNum == null) {
        return state;
      }
      if (state.currentNum == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousNum == null) {
        return {
          ...state,
          operation: payload.operation,
          previousNum: state.currentNum,
          currentNum: null,
        };
      }
      return {
        ...state,
        previousNum: evaluate(state),
        operation: payload.operation,
        currentNum: null,
      };
    case actions.clear:
      return {};
    case actions.on:
      return {
        ...state,
        previousNum: null,
        currentNum: "0",
        operation: null,
      };
    case actions.off:
      return {};

    case actions.evaluate:
      if (
        state.operation == null ||
        state.currentNum == null ||
        state.previousNum == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousNum: null,
        operation: null,
        currentNum: evaluate(state),
      };
  }
}

function evaluate({ currentNum, previousNum, operation }) {
  const prev = parseFloat(previousNum);
  const current = parseFloat(currentNum);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
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
            <div className="previous-num">
              {formatOperand(previousNum)}
              {operation}
            </div>
            <div className="current-num">{formatOperand(currentNum)}</div>

            <div id="calc-body">
              <img
                src="white-cat-1732386_960_720.png"
                alt="white cat cartoon smiling with eyes closed."
              ></img>
              <button
                onClick={() => dispatch({ type: actions.on })}
                className="calc-func"
              >
                ON
              </button>
              <button
                onClick={() => dispatch({ type: actions.off })}
                className="calc-func"
              >
                OFF
              </button>
              <OperationButton operation="+" dispatch={dispatch} />

              <DigitButton digit="7" dispatch={dispatch} />
              <DigitButton digit="8" dispatch={dispatch} />
              <DigitButton digit="9" dispatch={dispatch} />
              <OperationButton operation="-" dispatch={dispatch} />

              <DigitButton digit="4" dispatch={dispatch} />
              <DigitButton digit="5" dispatch={dispatch} />
              <DigitButton digit="6" dispatch={dispatch} />
              <OperationButton operation="*" dispatch={dispatch} />

              <DigitButton digit="1" dispatch={dispatch} />
              <DigitButton digit="2" dispatch={dispatch} />
              <DigitButton digit="3" dispatch={dispatch} />
              <OperationButton operation="÷" dispatch={dispatch} />

              <DigitButton digit="0" dispatch={dispatch} />
              <DigitButton digit="." dispatch={dispatch} />
              <button
                onClick={() => dispatch({ type: actions.clear })}
                className="clear-result-btn"
              >
                C
              </button>
              <button
                onClick={() => dispatch({ type: actions.evaluate })}
                className="clear-result-btn"
                id="equal-btn"
              >
                =
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
