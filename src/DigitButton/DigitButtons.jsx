import { actions } from "../Calculator/Calc.jsx";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button className="num-btn"
      onClick={() => dispatch({ type: actions.addDigit, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
