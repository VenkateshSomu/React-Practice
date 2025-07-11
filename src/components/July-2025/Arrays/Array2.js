// incrementing the count of an array
import React, { useState } from "react";

export default function Array2() {
  const initialCounts = [0, 0, 0];
  const [counts, setCounts] = useState(initialCounts);

  function handleIncrement(index) {
    const newCount = counts.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounts(newCount);
  }
  return (
    <>
      <h2>Counters</h2>
      <ul>
        {counts.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => handleIncrement(index)}>+1</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
