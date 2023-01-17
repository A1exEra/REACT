import { useState } from "react";
import ListToDo from "./ListToDo";
import "./todo.css";
function ToDo() {
  const [toDos, setToDo] = useState({ toDo: "", items: [] });
  function handleChange(event) {
    const { name, value } = event.target;
    setToDo((prevToDos) => ({ ...prevToDos, [name]: value }));
  }
  function addItems() {
    setToDo((prevTodos) => ({
      ...prevTodos,
      toDo: "",
      items: [...prevTodos.items, prevTodos.toDo],
    }));
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="toDo"
          value={toDos.toDo}
          placeholder="..."
          onChange={handleChange}
        />
        <button type="button" onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDos.items.map((el) => (
            <ListToDo todo={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
