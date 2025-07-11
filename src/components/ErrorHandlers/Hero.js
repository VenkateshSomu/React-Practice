import React from "react";

function Hero(props) {
  if (props.name === "Joker") {
    throw new Error("Joker is not a hero");
  } else
    return (
      <>
        <div>
          <h1>Hero name is {props.name}</h1>
        </div>
      </>
    );
}
export default Hero;
