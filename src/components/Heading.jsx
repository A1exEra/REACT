function Heading() {
  const name = "Alex";
  const style = {
    color: "white",
    fontSize: "3rem",
  };
  let isStyleOn = false;
  function switchStyles() {
    isStyleOn = !isStyleOn;
    console.log("clicked");
  }
  return (
    <div className="container">
      <button className="btn btn-primary m-3" onClick={switchStyles}>
        Jacked up and good to go!
      </button>
      <h1 style={isStyleOn ? style : {}}>{name} is GOD OF CODE!</h1>
    </div>
  );
}
export default Heading;
