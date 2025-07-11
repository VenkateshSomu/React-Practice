import React, { useState, useEffect } from "react";

function HookIntervalCounter() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    console.log("use effect called");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("clear interval");
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    console.log("tick called");
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      Count: {count}
      <button onClick={() => setDisplay(!display)}>Toggle</button>{" "}
    </>
  );
}
export default HookIntervalCounter;
