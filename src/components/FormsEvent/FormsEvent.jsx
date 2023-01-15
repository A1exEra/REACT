import { useState } from "react";
function FormEvent() {
  const [stateInput, setState] = useState("");
  let userInput = "";

  function handleChange(event) {
    console.log(event.target.value);
    userInput = event.target.value;
  }
  function handleClick(event) {
    console.log("CLICKED");
    setState(userInput);
    event.preventDefault();
  }
  return (
    <div className="formContainer">
      <h1>Hello {stateInput}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          class="form-control"
          id="userName"
          placeholder="What's your name?"
          onChange={handleChange}
          style={{ width: "300px" }}
        />
        <button
          type="submit"
          class="btn btn-primary mx-auto"
          //   onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormEvent;
