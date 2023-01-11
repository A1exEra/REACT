import React from "react";

const name = "Alex";
const lname = "Eramisant";
const date = new Date();
function Footer() {
  return (
    <div className="footer">
      <p>Created by {`${name} ${lname}`}</p>
      <p>&copy;{date.getFullYear()}</p>
    </div>
  );
}
export default Footer;
