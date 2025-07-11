import React, { useState, useEffect } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `You clicked ${count} times.`;
  //   }, [count]);

  useDocTitle(count);

  return (
    <>
      Doc title
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
export default DocTitleOne;
