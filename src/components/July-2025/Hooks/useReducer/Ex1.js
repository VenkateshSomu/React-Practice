import React, { useState } from "react";

const initialTodos = [
  { id: 1, task: "Todo 1", done: false },
  { id: 2, task: "Todo 2", done: true },
  { id: 3, task: "Todo 3", done: false },
];

export default function ExReducer1() {
  const [todos, setTodos] = useState(initialTodos);
  const [message, setMessage] = useState("");

  function handleTodoChange(e, id) {
    const newTodo = todos.map((todo, i) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
  }

  function addMessage(e) {
    setMessage(e.target.value);
  }

  function deleteTodo(id) {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  }

  function handleAddTodo() {
    const todo = [...todos, { id: new Date(), task: message, done: false }];
    setTodos(todo);
    setMessage("");
  }

  function handleEdit(id) {
    const todoItem = todos.find((todo) => todo.id === id);
    setMessage(todoItem?.task);
  }
  return (
    <>
      <div>
        <h2>Todos</h2>
        <TodoList
          todos={todos}
          handleTodoChange={handleTodoChange}
          handleEdit={(id) => handleEdit(id)}
          deleteTodo={(id) => deleteTodo(id)}
        />
        <AddTodo
          message={message}
          addMessage={addMessage}
          handleAddTodo={handleAddTodo}
        />
      </div>
    </>
  );
}

function AddTodo({ message, addMessage, handleAddTodo }) {
  return (
    <>
      <input type="text" value={message} onChange={(e) => addMessage(e)} />
      <button type="button" onClick={() => handleAddTodo()}>
        Add
      </button>
    </>
  );
}
function TodoList({ todos, handleTodoChange, handleEdit, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => handleTodoChange(e, todo.id)}
              />
              {todo.task}
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
