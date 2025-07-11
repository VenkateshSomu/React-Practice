import React, { useState } from "react";
import Sort1 from "./Sort1";

export default function Array5() {
  const initNumbers = [10, 7, 2, 5, 4, 9];
  const initWords = ["Venkatesh", "Anitha", "Kushvika"];

  const [numbers, setNumbers] = useState(initNumbers);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [words, setWords] = useState(initWords);

  const sortedNumbers = sortNumbers(numbers, sortOrder);

  function sortNumbers(numbers, order) {
    const n = [...numbers];
    if (order === "ascending") {
      n.sort((a, b) => a - b);
    } else {
      n.sort((a, b) => b - a);
    }
    return n;
  }

  /* function handleSort() {
      // const newN = [...numbers.sort()];
      // const assendingOrder = [...numbers].sort(); // if 10 is there it will treat it as 1

      const assendingOrder = [...numbers].sort((a, b) => a - b); // proper sorting 10 as 10
      console.log("assendingOrder = ", assendingOrder);

      const descendingOrder = [...numbers].sort((a, b) => b - a);
      console.log("descendingOrder = ", descendingOrder);

      if (sortOrder === "ascending") {
        setNumbers(descendingOrder);
        setSortOrder("descending");
      } else {
        setNumbers(assendingOrder);
        setSortOrder("ascending");
      }
    } */

  function handleToggleSort() {
    setSortOrder((prevSort) =>
      prevSort === "ascending" ? "descending" : "ascending"
    );
  }

  //
  function handleSortWords() {
    const n1 = [...words];
    n1.sort((a, b) => a.localeCompare(b));
    console.log("n1=", n1);
    setWords(n1);
  }
  return (
    <div>
      <h3>Sorting Numbers:</h3>
      {/* <button onClick={handleSort}>Sort</button> */}
      <button onClick={handleToggleSort}>Sort</button>
      <ul>
        {/* case 1 handleSort method code */}
        {/* {numbers.map((item, i) => ( 
          <li key={i}>{item}</li>
        ))} */}

        {sortedNumbers.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3>Sorting Words</h3>
      <button onClick={handleSortWords}>Sort Words</button>
      <ul>
        {words.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Sort1 />
    </div>
  );
}
