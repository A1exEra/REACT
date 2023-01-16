import React, { useState } from "react";

function FormStateChallenge() {
  return (
    <div className="formContainer">
      <h1>Hello, FirstName LastName!</h1>
      <p>email</p>
      <form>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Name"
          style={{ width: "300px" }}
        />
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Surname"
          style={{ width: "300px" }}
        />
        <input
          type="email"
          class="form-control"
          id="lastName"
          placeholder="Email"
          style={{ width: "300px" }}
        />
        <button type="button" class="btn btn-primary mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormStateChallenge;
