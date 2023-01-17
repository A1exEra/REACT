import { useState } from "react";
function Note(params) {
  const [content, setContent] = useState({
    content: params.content,
    isCompleted: false,
  });
  function onComplete() {
    setContent((prevValue) => ({
      isCompleted: !prevValue.isCompleted,
    }));
  }
  return (
    <div className="note">
      <h1>{params.title}</h1>
      <p
        style={{
          textDecoration: content.isCompleted ? "line-through" : "none",
        }}
      >
        {params.content}
      </p>
      <div>
        <button
          className="btn btn-danger me-1"
          onClick={() => {
            params.onDelete(params.id);
            console.log(`Item whit an id:${params.id} was deleted...`);
          }}
        >
          DELETE
        </button>
        <button
          className="btn btn-warning me-1"
          onClick={() => {
            params.onDelete(params.id);
            console.log(`Item whit an id:${params.id} was deleted...`);
          }}
        >
          EDIT
        </button>
        <button className="btn btn-success me-1" onClick={onComplete}>
          DONE
        </button>
      </div>
    </div>
  );
}
export default Note;
