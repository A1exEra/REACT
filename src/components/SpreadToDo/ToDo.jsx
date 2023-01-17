import { useState } from "react";
import ListToDo from "./ListToDo";
import InputArea from "./InputArea";
import "./todo.css";
function ToDo() {
  const [toDos, setToDo] = useState({ toDo: "", items: [] });
  function addItems(inputToDos) {
    setToDo((prevTodos) => ({
      ...prevTodos,
      toDo: "",
      items: [...prevTodos.items, inputToDos],
    }));
  }
  function deleteItem(id) {
    console.log(id, "deleteItem method was called...");
    setToDo((prevValue) => ({
      ...prevValue,
      items: [...prevValue.items.filter((el, index) => index !== id)],
    }));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAddItems={addItems} />
      <div>
        <ul>
          {toDos.items.map((el, index) => (
            <ListToDo key={index} id={index} todo={el} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
