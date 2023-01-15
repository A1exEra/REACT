import { useState } from "react";

function GetTime() {
  const [hookTime, setTime] = useState("What is the time?");
  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
    const interval = setInterval(getTime, 1000);
    return interval;
  }
  //   function stopTime() {
  //     clearInterval(interval);
  //     console.log("stop");
  //     setTime("Stopped");
  //   }
  return (
    <div className="container ">
      <h1>{hookTime}</h1>
      <button className="btn btn-primary mx-auto" onClick={getTime}>
        Get Time
      </button>
      {/* <button className="btn btn-secondary mx-auto" onClick={stopTime}>
        Stop Time
      </button> */}
    </div>
  );
}

export default GetTime;
