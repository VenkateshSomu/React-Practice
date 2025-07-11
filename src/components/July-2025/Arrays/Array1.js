// Create a todo item with checkbox and delete
import React, { useState } from "react";

export default function Array1() {
  const initialList = [
    { id: 1, task: "Visit Hyderabad", status: true },
    { id: 2, task: "Visit Australia", status: false },
    { id: 3, task: "Visit Bangalore", status: true },
  ];
  const [todos, setTodos] = useState(initialList);
  const [message, setMessage] = useState("");
  function handleCheckBox(e, item) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, status: !todo.status };
        } else {
          return todo;
        }
      })
    );
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function handleSubmit() {
    if (message.length === 0) {
      alert("Please enter your message!");
    } else {
      const newList = { id: todos.length + 1, task: message, status: false };
      setTodos([...todos, newList]);
      console.log(todos);
    }
  }
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }
  return (
    <>
      <h2>My Todos</h2>
      <label>
        <input
          type="text"
          placeholder="New Todo"
          value={message}
          onChange={(e) => handleMessage(e)}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.status}
              checked={item.status}
              onChange={(e) => handleCheckBox(e, item)}
            />{" "}
            {item.id + " " + item.task}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
