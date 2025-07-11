import React, { useState, useEffect } from "react";

function HookCouterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updating document.title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count:{count}
      </button>
      <button>Sample</button>
    </>
  );
}

export default HookCouterOne;
