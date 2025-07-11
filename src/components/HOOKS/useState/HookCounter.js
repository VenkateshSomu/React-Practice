import React, { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={() => incrementByFive()}>increment by 5</button>
    </>
  );
}

export default HookCounter;
