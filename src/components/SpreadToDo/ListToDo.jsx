// import { useState } from "react";
function ListToDo(props) {
  //   const [item, setItem] = useState({ todo: props.todo, isCompleted: false });
  //   function handleClick() {
  //     setItem((prevVal) => ({
  //       ...prevVal,
  //       isCompleted: !prevVal.isCompleted,
  //       todo: props.todo,
  //     }));
  //   }
  return (
    // <li
    //   onClick={handleClick}
    //   style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
    // >
    //   {item.todo}
    // </li>
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todo}
    </li>
  );
}
export default ListToDo;
