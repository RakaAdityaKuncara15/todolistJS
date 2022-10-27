import { useState } from "react";
import "./App.css";


function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "My To Do List.",
    },
  ]);

  return (
    <div className="container">
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        Add
      </button>

      <h1>To do List</h1>

      {todos.map((todo) => (
        <div className="todos-container">
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
