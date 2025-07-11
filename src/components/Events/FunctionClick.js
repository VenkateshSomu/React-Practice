import React from "react";

const FunctionClick = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Func Click</button>
    </>
  );
};

export default FunctionClick;
