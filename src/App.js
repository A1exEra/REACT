import { useState } from "react";
import "./App.css";
import FormInput from "./components/Form/FormInput";
import Users from "./components/Users/Users";
function App() {
  const [registeredUsers, setRegisteredUsers] = useState([
    { id: "34", name: "Alex", age: 36 },
    { id: "15", name: "Bob", age: 18 },
    { id: "65", name: "Jessie", age: 22 },
    { id: "76", name: "Angela", age: 25 },
    { id: "18", name: "Sam", age: 50 },
    { id: "96", name: "Brittany", age: 28 },
  ]);
  const onAddUser = (user) => {
    console.log("New User was Added", user);
    setRegisteredUsers((prevState) => [user, ...prevState]);
  };
  console.log(registeredUsers);
  return (
    <div className="App">
      <h1>Jacked Up And Good To Go!</h1>
      <FormInput addUser={onAddUser} />
      <Users users={registeredUsers} />
    </div>
  );
}

export default App;
