import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function Context2() {
  const [user, setUser] = useState("Somu Venkatesh");

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Parent component</h1>
        <p>Hello {user}</p>
        <Child1 user={user} />
      </div>
    </UserContext.Provider>
  );
}

function Child1() {
  return (
    <>
      <h2>Child component 1</h2>
      {/* <p>User Name: {user}</p> */}
      <Child2 />
    </>
  );
}

function Child2() {
  return (
    <>
      <h3>Child component 2</h3>
      {/* <p>User Name: {user}</p> */}
      <Child3 />
    </>
  );
}

function Child3() {
  return (
    <>
      <h4>Child component 3</h4>
      {/* <p>User Name: {user}</p> */}
      <Child4 />
    </>
  );
}

function Child4() {
  return (
    <>
      <h5>Child component 4</h5>
      {/* <p>User Name: {user}</p> */}
      <Child5 />
    </>
  );
}

function Child5() {
  const user = useContext(UserContext);
  return (
    <>
      <h6>Child component 5</h6>
      <p>Hello again {user}</p>
    </>
  );
}
