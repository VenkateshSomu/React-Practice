// inserting new array item at some custom position or order
import React, { useState } from "react";
let nextId = 3;
const initialSculptors = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
export default function Array3() {
  const [artists, setArtists] = useState(initialSculptors);
  const [name, setName] = useState("");

  function handleInsert() {
    if (name.length === 0) {
      alert("Please enter your artist name");
    } else {
      //   const newArtist = [...artists, { id: nextId++, name: name }];
      //   setArtists(newArtist);
      //   setName("");

      const insertAt = 2; //could be any index
      const nextArtist = [
        ...artists.slice(0, insertAt), //item before the insertion point
        { id: nextId++, name: name }, // new item
        ...artists.slice(insertAt), // item after insertion point
      ];
      setArtists(nextArtist);
      setName("");
    }
  }

  function handleName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h3>Inspiring sculptors:</h3>
      <label>
        <input type="text" value={name} onChange={handleName} />
      </label>
      <button onClick={() => handleInsert()}>Insert</button>
      <ul>
        {artists.map((item, i) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
