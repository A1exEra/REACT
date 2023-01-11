import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// const listArray = [
//   "Learn React",
//   "Have lunch",
//   "Continue Study",
//   "Go To Gym",
//   "Have Dinner",
//   "Have Fun",
//   "Go To Bed",
// ];
const name = "Alex";
const lname = "Eramisant";
// function listItems(items) {
//   items.forEach((item) => {
//     <li class="list-group-item">{item}</li>;
//   });
// }
const date = new Date();
const style = {
  color: "white",
  fontSize: "3rem",
};
let isStyleOn = false;
function switchStyles() {
  isStyleOn = !isStyleOn;
  console.log("clicked");
}
const greetStyle = {
  color: "green",
};
let greeting = "";
let amPm = "";
function getTime() {
  const currentHour = date.getHours();
  if (currentHour > 12 && currentHour <= 18) {
    greeting = "Good Afternoon";
    amPm = "PM";
  } else if (currentHour >= 18 && currentHour <= 24) {
    greeting = "Good Evening";
    greetStyle.color = "blue";
    amPm = "PM";
  } else {
    greeting = "Good Morning";
    greetStyle.color = "red";
    amPm = "AM";
  }
}
getTime();
/////////////////////////////////////////////////////////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="container">
      <button className="btn btn-primary m-3" onClick={switchStyles}>
        Jacked up and good to go!
      </button>
      <h1
        contentEditable="true"
        spellCheck="false"
        style={isStyleOn ? style : {}}
      >
        {name} is GOD OF CODE!
      </h1>
    </div>
    <ul className="list-group" style={{ width: "300px" }}>
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    <div className="images">
      <img src="https://picsum.photos/200/300" alt="..." />
      <img src="https://picsum.photos/200/300" alt="..." />
      <img src="https://picsum.photos/200/300" alt="..." />
    </div>
    <div className="getHour">
      <h1 className="time" style={greetStyle}>
        {greeting}. The time is {`${date.getHours()}`} o'clock
      </h1>
    </div>
    <div className="footer">
      <p>Created by {`${name} ${lname}`}</p>
      <p>&copy;{date.getFullYear()}</p>
    </div>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
