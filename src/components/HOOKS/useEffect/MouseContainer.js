import React, { useState } from "react";
import HookMouse from "./HookMouse";
import ClassMouse from "./ClassMouse";
function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {/* {display && <HookMouse />} */}
      {display && <ClassMouse />}
    </>
  );
}
export default MouseContainer;
