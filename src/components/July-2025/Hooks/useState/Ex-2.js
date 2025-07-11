import React, { useState, memo } from "react";

function Ex2() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustage",
    color: "red",
    year: 2026,
  });

  function handleChange(color) {
    setCar((prevState) => {
      return { ...prevState, color: color };
    });
  }
  const { model, year } = car; // destructuring

  return (
    <>
      <h2>My {car.brand}</h2>
      <p>
        It is a {model} will buy it in the year {year}, it will be in
        {car.color}
      </p>
      <button onClick={() => handleChange("blue")}>Blue</button>
    </>
  );
}

export default Ex2;
