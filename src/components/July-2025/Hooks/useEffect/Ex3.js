import React, { useEffect, useState } from "react";

export default function Example3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        <h3>Timer: {count}</h3>
      </div>
    </>
  );
}
