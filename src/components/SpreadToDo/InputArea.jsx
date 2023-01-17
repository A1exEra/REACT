import { useState } from "react";
function InputArea(props) {
  const [toDos, setTodo] = useState({ toDo: "" });
  function handleChange(event) {
    const { value } = event.target;
    setTodo(() => ({ toDo: value }));
  }
  return (
    <div className="form">
      <input
        type="text"
        name="toDo"
        value={toDos.toDo}
        placeholder="..."
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => {
          props.onAddItems(toDos.toDo);
          setTodo(() => ({ toDo: "" }));
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
