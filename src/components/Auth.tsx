/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/store';
import useInput from '../hooks/useInput';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
const passwordHintPattern =
  'At least 8 characters long. Contains at least one digit (0-9). Contains at least one lowercase letter (a-z). Contains at least one uppercase letter (A-Z). Contains at least one special character (non-alphanumeric).';
const Auth = () => {
  const dispatch = useDispatch();
  let isFormValid = false;
  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value: string) => emailPattern.test(value));
  const {
    value: password,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value: string) => passwordPattern.test(value));
  if (emailIsValid && passwordIsValid) {
    isFormValid = true;
  }
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }
    dispatch(authActions.login());
    dispatch(authActions.showUserData({ email, password }));
    resetEmail();
    resetPassword();
  };
  return (
    <Styled>
      <section>
        <form onSubmit={submitHandler}>
          <div className={`control ${emailHasError ? 'invalid' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Incorect email pattern!</p>
            )}
          </div>
          <div className={`control ${passwordHasError ? 'invalid' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text">{passwordHintPattern}</p>
            )}
          </div>
          <button disabled={!isFormValid}>Login</button>
        </form>
      </section>
    </Styled>
  );
};

export default Auth;

const Styled = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  .control {
    margin-bottom: 0.5rem;

    label {
      display: block;
      color: #616161;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    input {
      display: block;
      width: 20rem;
      margin: auto;
      border-radius: 4px;
      padding: 0.25rem;
      border: 1px solid #ccc;
    }
  }
  .error-text {
    color: #b40e0e;
    margin-bottom: 1rem;
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
`;
