import { useState } from "react";
import Card from "../UI/Card";
import "./Users.css";
import User from "./User/User";
const Users = (props) => {
  console.log(props.users);
  //   const [users, setUsers] = useState(props.users);
  return (
    <Card>
      <ul className="list-group">
        {props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Users;
