import styled from 'styled-components';
import useInput from './hooks/useInput';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function SimpleInput() {
  //NAME INPUT CUSTOM HOOK
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim() !== '');
  //EMAIL INPUT CUSTOM HOOK
  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => emailPattern.test(value));
  let isFormValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }
  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    // nameInputRef.current!.value = ''; //DO NOT DO IT THIS WAY!!! DO NOT MDIRTECTLY MANIPULATE THE DOM, LEAVE IT TO REACT
    resetNameInput();
    resetEmailInput();
  };
  return (
    <Styled onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputHasError ? 'invalid' : ''}`}>
        <label htmlFor="name">
          <p>Your name: {enteredName}</p>
        </label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name is not valid!</p>}
      </div>
      <div className={`form-control ${emailInputHasError ? 'invalid' : ''}`}>
        <label htmlFor="email">
          <p>Your email: {enteredEmail}</p>
        </label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email is not valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>
          <p>Submit</p>
        </button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16;
  flex-wrap: wrap;
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
      font-family: 'Oswald';
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
  .form-actions {
    text-align: right;
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
  .error-text {
    color: #b40e0e;
    margin-bottom: 1rem;
  }
`;
export default SimpleInput;
