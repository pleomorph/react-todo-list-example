import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTask(newValue);
  }

  function addTask() {
    setItems(prevValues => {
      return [...prevValues, task];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="taskInput"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button onClick={addTask}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
