import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmouting ");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("logmouse fn called");
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <>
      Mouse X -{x} Y -{y}
    </>
  );
}
export default HookMouse;
