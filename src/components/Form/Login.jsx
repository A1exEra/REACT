import Form from "./Form";

let isLoggedIn = false;
const isUserRegistered = true;
const currentTime = new Date().getHours();

function Login() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={isUserRegistered} />}
      {currentTime > 12 && <h1>It's Chilling Time!</h1>}
    </div>
  );
}

export default Login;
