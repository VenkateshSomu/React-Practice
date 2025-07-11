import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

const ToggleBtn = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  //   useImperativeHandle(ref, () => ({
  //     handleToggle() {
  //       setToggle(!toggle);
  //     },
  //   }));

  useImperativeHandle(ref, () => ({
    handleToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      button
      <button onClick={() => setToggle(!toggle)}>Toggle Child</button>
      {toggle && <p>Show content</p>}
    </div>
  );
});
export default ToggleBtn;
