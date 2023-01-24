import { useState } from "react";
import "./FormInput.css";
import Card from "../UI/Card";
const FormInput = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitHandler = () => {
    const id = Math.floor(Math.random() * 100 + 1);
    const submittedData = { id: `${id}`, ...userData, age: +userData.age };
    setUserData({ name: "", age: "" });
    props.addUser(submittedData);
  };
  return (
    <Card>
      <form onChange={changeHandler} className="form-input">
        <div className="mb-3 ">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="user"
            placeholder="John"
            name="name"
            value={userData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="age (years)"
            name="age"
            min="18"
            max="99"
            value={userData.age}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          ADD
        </button>
      </form>
    </Card>
  );
};
export default FormInput;
