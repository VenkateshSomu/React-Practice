import React, { useState } from "react";
import useCounter from "./useCounter";

function Counter2() {
  const [count, increment, decrement, reset] = useCounter(10, 20);
  return (
    <>
      Counter 2: {count}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}

export default Counter2;
