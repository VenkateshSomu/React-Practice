import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Comments = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const findLongestName = () => {
    let longestName = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].body.length > longestName.length) {
        longestName = data[i].body;
      }
    }
    console.log("Computed findLongestName");
    return longestName;
  };

  const getLongName = useMemo(() => findLongestName(), [data]);
  return (
    <>
      Comments:
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {getLongName}
    </>
  );
};
export default Comments;
