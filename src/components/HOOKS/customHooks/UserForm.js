import React, { useState } from "react";
import useInput from "./useInput";
function UserForm() {
  //   const [firstName, setFirstName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name </label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UserForm;
