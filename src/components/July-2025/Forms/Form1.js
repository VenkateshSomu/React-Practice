import React, { useState } from "react";

export default function Form1() {
  const [inputs, setInputs] = useState({});

  function handleFormSubmit(e) {
    e.preventDefault();
    alert("User name is " + inputs.username + " and his age is " + inputs.age);
    setInputs({ ...inputs, username: "", age: "" });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // setInputs({ ...inputs, [name]: value });
    setInputs((values) => ({ ...values, [name]: value }));
  }

  return (
    <>
      <h2>My Form</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          placeholder="User Name"
        />
        <br />
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
          placeholder="Age s"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
