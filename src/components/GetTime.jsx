import React from "react";
const date = new Date();
const greetStyle = {
  color: "green",
};
let greeting = "";
function getTime() {
  const currentHour = date.getHours();
  if (currentHour > 12 && currentHour <= 18) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18 && currentHour <= 24) {
    greeting = "Good Evening";
    greetStyle.color = "blue";
  } else {
    greeting = "Good Morning";
    greetStyle.color = "red";
  }
}
getTime();
function GetTime() {
  return (
    <div className="getHour">
      <h1 className="time" style={greetStyle}>
        {greeting}. The time is {`${date.getHours()}`} o'clock
      </h1>
    </div>
  );
}
export default GetTime;
