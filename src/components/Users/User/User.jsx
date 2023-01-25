// import classes from "./User.module.css";
import { useState } from "react";
import "./User.css";
import Button from "../../UI/Button";
import Modal from "../../Modal/Modal";
const User = (props) => {
  const [changeState, setChangeState] = useState({
    delete: false,
    edit: false,
  });
  const onHandleDelete = () => {
    setChangeState((prevState) => ({ ...prevState, delete: true }));
  };
  const confirmDelete = () => {
    props.onDelete(props.user.id);
    setChangeState((prevState) => ({ ...prevState, delete: false }));
  };

  const onHandleEdit = () => {
    console.log("Edit user");
    setChangeState((prevState) => ({ ...prevState, edit: true }));
  };
  return (
    <div>
      {changeState.delete && (
        <Modal
          title={`Delete ${props.user.name}?`}
          content={`ARE YOU SURE?`}
          onCloseModal={confirmDelete}
        />
      )}
      {changeState.edit && (
        <Modal title={`Edit ${props.user.name}?`} content={`ARE YOU SURE?`} />
      )}
      <li className="list-group-item">
        {props.user.name} - {props.user.age}
        <div>
          <Button className="button" onClick={onHandleEdit}>
            ...
          </Button>
          <span> </span>
          <Button className="button" onClick={onHandleDelete}>
            X
          </Button>
        </div>
      </li>
    </div>
  );
};
export default User;
