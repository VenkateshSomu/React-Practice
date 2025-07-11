import React, { useState, useEffect } from "react";
import Example2 from "./Ex2";
import Example3 from "./Ex3";

export default function ExCounter1() {
  console.log("ExCounter fn rendered!");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // <- add empty brackets here

  return (
    <>
      <h2>Use Effect Example Counter!</h2>
      <p>Count: {count}</p>
      <hr />
      <Example2 />
      <hr />
      <Example3 />
    </>
  );
}
