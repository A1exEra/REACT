import React from "react";
import "../index.css";
function List() {
  return (
    <div className="container">
      <ul className="list-group" style={{ width: "auto" }}>
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      <div className="images">
        <img src="https://picsum.photos/200/300" alt="..." />
        <img src="https://picsum.photos/200/300" alt="..." />
        <img src="https://picsum.photos/200/300" alt="..." />
      </div>
    </div>
  );
}

export default List;
