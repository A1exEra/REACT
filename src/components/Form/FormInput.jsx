import { useState } from "react";
import "./FormInput.css";
import Card from "../UI/Card";
const FormInput = (props) => {
  const [userData, setUserData] = useState({
    userName: "",
    userAge: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserData((prevState) => ({ ...prevState, [name]: value }));
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
            name="userName"
            value={userData.userName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="age (years)"
            name="userAge"
            min="18"
            max="99"
            value={userData.userAge}
          />
        </div>
        <button type="button" className="btn btn-primary">
          ADD
        </button>
      </form>
    </Card>
  );
};
export default FormInput;
