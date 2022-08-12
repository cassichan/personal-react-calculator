import { actions } from "../Calculator/Calc.jsx";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className="operation-btn"
      onClick={() => dispatch({ type: actions.chooseOperation, payload: { operation } })}
    >
      {operation}
    </button>
  );
}