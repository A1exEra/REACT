/* eslint-disable no-restricted-globals */
import { useState } from "react";
import Input from "./Input";

let headingText = "Welcome!";
function Form(props) {
  const [state, setState] = useState(headingText);
  function handleclick() {
    console.log("Button was clicked!");
    setState("Submitted!");
  }
  let color = "white";
  const [stateColor, setColor] = useState(color);
  function OnMouseOver() {
    setColor("black");
  }
  function OnMouseOut() {
    setColor(color);
  }
  return (
    <form className="form">
      <h1>{state}</h1>
      <Input type="text" placeholder="User Name:" />
      <Input type="password" placeholder="Password:" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password:" />
      )}
      <button
        className="button"
        style={{ backgroundColor: stateColor }}
        type="button"
        onClick={handleclick}
        onMouseOver={OnMouseOver}
        onMouseOut={OnMouseOut}
      >
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}
export default Form;
