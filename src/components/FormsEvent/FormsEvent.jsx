import { useState } from "react";
function FormEvent() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(`Name is: ${name}`);
    console.log(`Value is: ${value}`);
    // setFullName((prevValue) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue,
    //     };
    //   } else {
    //     return { fName: prevValue, lName: value };
    //   }
    // });
    // }
    name === "fName"
      ? setFullName({ fName: value, lName: fullName.lName })
      : setFullName({ lName: value, fName: fullName.fName });
  }
  return (
    <div className="formContainer">
      <h1>
        Hello, {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="What's your name?"
          style={{ width: "300px" }}
          name="fName"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="What's your surname?"
          style={{ width: "300px" }}
          name="lName"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button type="button" class="btn btn-primary mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormEvent;
