// import classes from "./User.module.css";
import "./User.css";
import Button from "../../UI/Button";
const User = (props) => {
  const onHandleDelete = () => props.onDelete(props.user.id);
  return (
    <li className="list-group-item">
      {props.user.name} - {props.user.age}
      <Button className="button" onClick={onHandleDelete}>
        X
      </Button>
    </li>
  );
};
export default User;
