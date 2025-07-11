import React, { memo } from "react";

function Todos({ todos }) {
  console.log("Todos fn called");
  return (
    <>
      <h5>My Todos!</h5>
      <ul>
        {todos.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default memo(Todos);
