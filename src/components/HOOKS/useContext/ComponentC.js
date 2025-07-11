import React, { useContext } from "react";
import { UserContext, SampleContext } from "../../../App";
function ComponentC() {
  const user = useContext(UserContext);
  const hello = useContext(SampleContext);
  return (
    <>
      <h1>{`useContext: ${hello} ${user}`}</h1>
    </>
  );
  // below is the old format code to render the context value

  /* return (
    <UserContext.Consumer>
      {(name) => {
        return (
          <SampleContext.Consumer>
            {(hello) => {
              return (
                <h2>
                  {hello} {name}
                </h2>
              );
            }}
          </SampleContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  ); */
}
export default ComponentC;
