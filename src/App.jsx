import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [edit,SetEdit] = useState("")

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
    console.log(todos);
  };

  const deleteTodo = (index) => {
    const input = todos.filter((_, i) => i !== index);
    setTodos(input);
  };
   const editTodo = (index) => {
    const input = todos.filter((_, i) => i !== index);
    setTodos(input);
   };

  return (
    <div className="main">
      <h1>Todo List App</h1>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos">
        <ul>
          <h3>All Tasks</h3>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <div>
                <button
                  onClick={() => editTodo(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
