/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { ORDER_FORM } from '../../types';
function Checkout(props: {
  onConfirm: (data: ORDER_FORM) => void;
  onCancel: () => void;
}) {
  let isFormValid = false;
  const {
    value: nameInput,
    valueIsValid: isNameInputValid,
    hasError: nameInputError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: postCodeInput,
    valueIsValid: isPostCodeInputValid,
    hasError: postCodeInputError,
    valueChangeHandler: postCodeInputChangeHandler,
    inputBlurHandler: postCodeInputBlurHandler,
    reset: postCodeInputReset,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: streetInput,
    valueIsValid: isStreetInputValid,
    hasError: streetInputError,
    valueChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetInputReset,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: cityInput,
    valueIsValid: isCityInputValid,
    hasError: cityInputError,
    valueChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityInputReset,
  } = useInput((value: string) => value.trim() !== '');
  if (
    isNameInputValid &&
    isStreetInputValid &&
    isPostCodeInputValid &&
    isCityInputValid
  ) {
    isFormValid = true;
  }
  const confirmHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log({
      name: nameInput,
      street: streetInput,
      postCode: postCodeInput,
      city: cityInput,
    });
    nameInputReset();
    streetInputReset();
    postCodeInputReset();
    cityInputReset();
    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postCode: postCodeInput,
      city: cityInput,
    });
  };
  return (
    <Styled onSubmit={confirmHandler}>
      <div className={`control ${nameInputError ? 'invalid' : ''}`}>
        <label htmlFor="name">
          <p>Name: {nameInput}</p>
        </label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={nameInput}
        />
        {nameInputError && <p className="error-text">Enter a valid name</p>}
      </div>
      <div className={`control ${streetInputError ? 'invalid' : ''}`}>
        <label htmlFor="street">
          <p>Street: {streetInput}</p>
        </label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetInputError && <p className="error-text">Enter a valid street</p>}
      </div>
      <div className={`control ${postCodeInputError ? 'invalid' : ''}`}>
        <label htmlFor="postalCode">
          <p>Post code: {postCodeInput}</p>
        </label>
        <input
          type="text"
          id="postalCode"
          value={postCodeInput}
          onChange={postCodeInputChangeHandler}
          onBlur={postCodeInputBlurHandler}
        />
        {postCodeInputError && (
          <p className="error-text">Enter a valid post code</p>
        )}
      </div>
      <div className={`control ${cityInputError ? 'invalid' : ''}`}>
        <label htmlFor="city">
          {' '}
          <p>City: {cityInput}</p>
        </label>
        <input
          type="text"
          id="city"
          value={cityInput}
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityInputError && <p className="error-text">Enter a valid city</p>}
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!isFormValid}>Confirm</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  margin: 1rem 0;
  /* height: 16rem; */
  overflow: auto;
  .control {
    margin-bottom: 0.5rem;
    label {
      font-weight: bold;
      margin-bottom: 0.25rem;
      display: block;
    }

    input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 20rem;
      max-width: 100%;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    button {
      font: inherit;
      color: #5a1a01;
      cursor: pointer;
      background-color: transparent;
      border: none;
      border-radius: 25px;
      padding: 0.5rem 2rem;
      &:hover,
      &:active {
        background-color: #ffe6dc;
      }
      &:disabled {
        background-color: #afa8a8;
        border-color: #b40e0e;
        color: red;
        &:hover,
        &:active {
          background-color: none;
        }
      }
    }
    .submit {
      border: 1px solid #5a1a01;
      background-color: #5a1a01;
      color: white;
      &:hover,
      &:active {
        background-color: #7a2706;
      }
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
    font-size: 0.8rem;
  }
`;
export default Checkout;
