import React from "react";

function MemoComp(props) {
  console.log("MEMO comp rendering");
  return (
    <>
      <div>Memo Comp : Name is {props.name}</div>
    </>
  );
}

export default React.memo(MemoComp);
