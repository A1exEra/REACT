import { useState } from "react";
function Input(props) {
  const [toDos, setToDo] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(value);
    setToDo((prevValue) => ({ ...prevValue, [name]: value }));
  }
  return (
    <form className="col g-3">
      <h2>Add new todo</h2>
      <div className="col-md-6 mb-3 mt-3">
        <input
          type="text"
          placeholder="Title..."
          className="form-control"
          id="title"
          name="title"
          value={toDos.title}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <input
          type="text"
          placeholder="Content..."
          className="form-control"
          id="content"
          name="content"
          value={toDos.content}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-1 mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.onAddToDo(toDos);
            setToDo({ title: "", content: "" });
            console.log("Add todo");
          }}
        >
          ADD
        </button>
      </div>
    </form>
  );
}
export default Input;
