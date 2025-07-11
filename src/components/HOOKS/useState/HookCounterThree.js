import React, { useState } from "react";

function HookCounterThree() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <>
      Items List
      <button onClick={() => addItems()}>Add Value</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            key: {item.id} value: {item.value}
          </li>
        ))}
      </ul>
    </>
  );
}
export default HookCounterThree;
