import React, { useState } from "react";
import Todos from "./Todos";
export default function Memo1() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

  function handleIncrement() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <h2>Memo Example</h2>
      <Todos todos={todos} />
      <hr />
      <h4>Counter: {count}</h4>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}
