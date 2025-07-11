import React, { useState, useMemo } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEven fn called");
    // setIsLoading(true);

    let i = 0;
    while (i < 2000000000) {
      i++;
      //   setIsLoading(false);
    }

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <button onClick={() => incrementOne()}>
        Counter One: {counterOne}
        <span>{isEven ? " Even" : " Odd"}</span>
      </button>
      <button onClick={() => incrementTwo()}>Counter Two: {counterTwo}</button>
      <div> {isLoading ? "Loading" : "not "}</div>
    </>
  );
}
export default MemoCounter;
