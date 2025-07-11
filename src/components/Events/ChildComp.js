import React from "react";

function ChildComp(props) {
  return (
    <>
      <button onClick={() => props.handleGreet("child")}>Wish parent</button>
    </>
  );
}
export default ChildComp;
