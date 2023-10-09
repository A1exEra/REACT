import styled from 'styled-components';
import useInput from './hooks/useInput';

function BasicForm() {
  let isFormValid = false;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const {
    value: nameInput,
    valueIsValid: isNameInputValid,
    hasError: nameInputError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: lastNameInput,
    valueIsValid: isLastNameInputValid,
    hasError: lastNameInputError,
    valueChangeHandler: lastnameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: emailInput,
    valueIsValid: isEmailInputValid,
    hasError: emailInputError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value: string) => emailPattern.test(value));
  if (isNameInputValid && isLastNameInputValid && isEmailInputValid) {
    isFormValid = true;
  }
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log({
      name: nameInput,
      lastName: lastNameInput,
      email: emailInput,
    });
    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };
  return (
    <Styled onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${nameInputError ? 'invalid' : ''}`}>
          <label htmlFor="name">
            <p>First Name:{nameInput}</p>
          </label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          {nameInputError && (
            <p className="error-text">Enter correct first name!</p>
          )}
        </div>
        <div className={`form-control ${lastNameInputError ? 'invalid' : ''}`}>
          <label htmlFor="name">
            <p>Last Name:{lastNameInput} </p>
          </label>
          <input
            type="text"
            id="name"
            onChange={lastnameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameInput}
          />
          {lastNameInputError && (
            <p className="error-text">Enter correct email!</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInputError ? 'invalid' : ''}`}>
        <label htmlFor="name">
          <p>E-Mail:</p>
        </label>
        <input
          type="text"
          id="name"
          value={emailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputError && (
          <p className="error-text">Enter correct last name!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  .control-group {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
    .form-control {
      min-width: 15rem;
      flex: 1;
    }
  }

  .form-control {
    margin-bottom: 1rem;
    input,
    label {
      display: block;
    }
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    input,
    select {
      font-family: 'Ubuntu';
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
    }
    input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
    }
  }
  button {
    font: inherit;
    background-color: #240370;
    color: white;
    border: 1px solid #240370;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: #33059e;
      border-color: #33059e;
    }
    &:disabled {
      background-color: #4a4160;
      border-color: #33059e;
    }
  }
  .form-actions {
    text-align: right;
    button {
      margin-left: 1rem;
    }
  }
  .invalid {
    input {
      border: 1px solid #b40e0e;
      background-color: #fddddd;
      &:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    }
  }
  .error-text {
    color: #b40e0e;
    margin-top: 1rem;
  }
`;
export default BasicForm;
