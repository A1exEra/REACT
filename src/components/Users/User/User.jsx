import "./User.css";

const User = (props) => {
  return (
    <li class="list-group-item">
      {props.user.name} - {props.user.age}
    </li>
  );
};
export default User;
