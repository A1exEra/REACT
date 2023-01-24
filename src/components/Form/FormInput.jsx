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
  const submitHandler = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100 + 1);
    const submittedData = { id: `${id}`, ...userData, age: +userData.age };
    setUserData({ name: "", age: "" });
    props.addUser(submittedData);
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className="form-input">
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            placeholder="John"
            name="name"
            value={userData.name}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            User Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="age (years)"
            name="age"
            min="18"
            max="99"
            value={userData.age}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </Card>
  );
};
export default FormInput;
