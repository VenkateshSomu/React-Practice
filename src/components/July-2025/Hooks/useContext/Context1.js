// without using context passing the state to each child, "props drilling";

import React, { useState } from "react";

export default function Context1() {
  const [user, setUser] = useState("Venkatesh Somu");

  return (
    <div>
      <h1>Parent component</h1>
      <p>Hello {user}</p>
      <Child1 user={user} />
    </div>
  );
}

function Child1({ user }) {
  return (
    <>
      <h2>Child component 1</h2>
      {/* <p>User Name: {user}</p> */}
      <Child2 user={user} />
    </>
  );
}

function Child2({ user }) {
  return (
    <>
      <h3>Child component 2</h3>
      {/* <p>User Name: {user}</p> */}
      <Child3 user={user} />
    </>
  );
}

function Child3({ user }) {
  return (
    <>
      <h4>Child component 3</h4>
      {/* <p>User Name: {user}</p> */}
      <Child4 user={user} />
    </>
  );
}

function Child4({ user }) {
  return (
    <>
      <h5>Child component 4</h5>
      {/* <p>User Name: {user}</p> */}
      <Child5 user={user} />
    </>
  );
}

function Child5({ user }) {
  return (
    <>
      <h6>Child component 5</h6>
      <p>Hello again {user}</p>
    </>
  );
}
