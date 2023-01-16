import React, { useState } from "react";

function FormStateChallenge() {
  //get the ract state
  const [contacts, setContacts] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  //create a method to change the inputs and state ofthe react app
  function handleChange(event) {
    // get the holdof the event
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    //use react state to to chenge the state and display input values dynamically
    // setContacts(() => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: contacts.lName,
    //       email: contacts.email,
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: contacts.fName,
    //       lName: value,
    //       email: contacts.email,
    //     };
    //   } else {
    //     return {
    //       fName: contacts.fName,
    //       lName: contacts.lName,
    //       email: value,
    //     };
    //   }
    // });
    setContacts((prevValue) => ({ ...prevValue, [name]: value }));
  }
  return (
    <div className="formContainer">
      <h1>
        Hello, {contacts.fName} {contacts.lName}!
      </h1>
      <p>{contacts.email}</p>
      <form>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Name"
          style={{ width: "300px" }}
          name="fName"
          value={contacts.fName}
          onChange={handleChange}
        />
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Surname"
          style={{ width: "300px" }}
          name="lName"
          value={contacts.lName}
          onChange={handleChange}
        />
        <input
          type="email"
          class="form-control"
          id="lastName"
          placeholder="Email"
          style={{ width: "300px" }}
          name="email"
          value={contacts.email}
          onChange={handleChange}
        />
        <button type="button" class="btn btn-primary mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormStateChallenge;
