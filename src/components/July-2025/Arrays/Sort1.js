import React, { useState } from "react";

export default function Sort1() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", quantity: "1000ml", price: 70 },
    { id: 2, name: "Milk", quantity: "500ml", price: 35 },
    { id: 3, name: "Sugar", quantity: "1KG", price: 50 },
  ]);

  function handleSortByPrice() {
    const newList = [...items];
    newList.sort((a, b) => a.price - b.price);
    setItems(newList);
  }
  return (
    <>
      <h3>Shop Items</h3>
      <button onClick={handleSortByPrice}>Sort by price</button>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={item.id}>
              {item.quantity + " of " + item.name + " is " + item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}
