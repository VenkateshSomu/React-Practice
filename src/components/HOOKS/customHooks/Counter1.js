import React, { useState } from "react";
import useCounter from "./useCounter";
function Counter1() {
  const [count, increment, decrement, reset] = useCounter(0, 10);
  return (
    <>
      Counter 1: {count}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}

export default Counter1;
