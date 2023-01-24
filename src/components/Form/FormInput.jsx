import { useState } from "react";
// import "./FormInput.css";
import classes from "./FormInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";
const FormInput = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
  });
  const [isError, setIsValid] = useState({
    title: "",
    content: "",
    isValid: true,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
    setIsValid((prevState) => ({ ...prevState, isValid: true }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //check if inputs are valid
    if (userData.name.trim().length < 1 || userData.age.trim().length < 1) {
      console.log("Invalid input!");
      setIsValid({
        title: "Invalid input",
        content: "Please, enter a valid name and age (non-empty inputs) ",
        isValid: false,
      });
      return;
    }
    //check if the age is within limits
    if (+userData.age < 18 || +userData.age > 69) {
      setIsValid({
        title: "Invalid age!",
        content: "Please, enter a valid age (between 18 and 69)",
        isValid: false,
      });
    }
    //
    const id = Math.floor(Math.random() * 100 + 1);
    const submittedData = { id: id, ...userData, age: +userData.age };
    setUserData({ name: "", age: "" });
    props.addUser(submittedData);
  };
  //reset the errormodal
  const handleError = () => {
    setIsValid((prevState) => ({ ...prevState, isValid: true }));
    console.log("MODAL CLOSED");
  };
  return (
    <div>
      {!isError.isValid && (
        <Modal
          title={isError.title}
          content={isError.content}
          onCloseModal={handleError}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={`mb-3 ${!isError.isValid && classes.invalid}`}>
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
          <div className={`mb-3 ${!isError.isValid && classes.invalid}`}>
            <label htmlFor="age" className="form-label">
              User Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="age (years)"
              name="age"
              value={userData.age}
              onChange={changeHandler}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
          ADD
        </button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default FormInput;
