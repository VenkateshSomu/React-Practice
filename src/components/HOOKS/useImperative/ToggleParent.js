import React, { useRef } from "react";
import ToggleBtn from "./ToggleBtn";

function ToggleParent() {
  const buttonRef = useRef(null);
  return (
    <>
      <button onClick={() => buttonRef.current.handleToggle()}>
        parent btn
      </button>
      <ToggleBtn ref={buttonRef} />
    </>
  );
}
export default ToggleParent;
