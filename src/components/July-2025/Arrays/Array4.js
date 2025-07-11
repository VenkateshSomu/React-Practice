import React, { useState } from "react";

const initialList = [
  { id: 0, title: "Lunar Landscape" },
  { id: 1, title: "Big Bellies" },
  { id: 2, title: "Terracotta Army" },
];

export default function Array4() {
  const [list, setList] = useState(initialList);

  function handleReverse() {
    const newList = [...list];
    newList.reverse();
    setList(newList);
  }

  function handleSort() {
    const newList2 = [...list];
    newList2.sort((a, b) => a.title.localeCompare(b.title));
    setList(newList2);
  }
  return (
    <div>
      <h3>Reverse order ex:</h3>
      <button onClick={handleReverse}>Reverse</button>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {list.map((item, i) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
