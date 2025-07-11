import React, { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];
export default function Array6() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleCheckBox(item, checked) {
    /* const newL = [...myList].map((list, i) => {
      if (list.id === item.id) {
        return { ...list, seen: !list.seen };
      } else {
        return list;
      }
    });
    setMyList(newL); */
    setMyList(
      myList.map((list, i) => {
        if (list.id === item.id) {
          return { ...list, seen: checked };
        } else {
          return list;
        }
      })
    );
  }

  return (
    <>
      <h2>Bucket List</h2>
      <p>My Lists to see:</p>
      <ItemList
        artworks={myList}
        handleCheckBox={(e, item) => handleCheckBox(e.target.checked, item)}
      />
      <ItemList
        artworks={yourList}
        handleCheckBox={(e, item) => handleCheckBox(e.target.checked, item)}
      />
    </>
  );
}

function ItemList({ artworks, handleCheckBox }) {
  return (
    <ul>
      {artworks.map((item, i) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.seen}
              onChange={(e) => handleCheckBox(e.target.checked, item)}
            />
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
