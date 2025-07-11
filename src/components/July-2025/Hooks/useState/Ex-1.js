import React, { useState, memo } from "react";
import Ex2 from "./Ex-2";

const initialColors = ["red", "green", "blue", "yellow"];

// export default function FavouriteColor() {
function FavouriteColor() {
  console.log("FavouriteColor fn called");
  const [color, setColor] = useState("blue");
  const [colors, setColors] = useState(initialColors);

  function handleChange(color) {
    setColor(color);
  }

  return (
    <>
      <h3>
        My Favourite color is : <span style={{ color: color }}>{color}</span>
      </h3>
      {colors.map((item, i) => {
        return <Button key={i} value={item} changeValue={handleChange} />;
      })}
      {/* <Button value="Yellow" changeValue={handleChange} />
      <Button value="red" changeValue={handleChange} />
      <Button value="green" changeValue={handleChange} /> */}

      {/* <button onClick={() => setColor("red")}>Red</button> */}
      {/* <button onClick={() => setColor("green")}>Green</button> */}
      <hr />
      <Ex2 />
    </>
  );
}

function Button({ value, changeValue }) {
  return <button onClick={() => changeValue(value)}>{value}</button>;
}

export default memo(FavouriteColor);
