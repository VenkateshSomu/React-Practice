import React, { useEffect, useState } from "react";

export default function Example2() {
  console.log("Example2 fn rendered");

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Calculation: {calculation}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
