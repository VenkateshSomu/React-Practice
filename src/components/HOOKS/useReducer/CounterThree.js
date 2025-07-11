// Multiple reducers in a single useReducer
import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Counter1 :{count.firstCounter}</h2>
      <h2>Counter 2 : {countTwo.firstCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset", value: 1 })}>
          Reset
        </button>
        <div>
          <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
            Increment
          </button>
          <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
            Decrement
          </button>
          <button onClick={() => dispatchTwo({ type: "reset", value: 1 })}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default CounterThree;
