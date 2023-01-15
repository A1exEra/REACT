import { useState } from "react";
let isCompleted = false;
const lineThrough = { textDecoration: "line-through" };
function Note() {
  const [state, setState] = useState(isCompleted);
  function complete() {
    console.log("button clicked");
    console.log(state);
    setState((isCompleted = !isCompleted));
  }
  return (
    <div className="note">
      <h1>This is the title of the note</h1>
      <p style={state ? lineThrough : null}>
        This is the content of the note component
      </p>
      <button className="btn btn-secondary" onClick={complete}>
        Done
      </button>
    </div>
  );
}
export default Note;
