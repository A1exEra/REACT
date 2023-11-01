/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';

const AuthForm = () => {
  const data: any = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Styled>
      <Form method="post" className="form">
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error as string}>
                <p>{error as string}</p>
              </li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className="actions">
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting && !isLogin && 'Submitting...'}
            {isLogin ? 'Login' : 'Save'}
          </button>
        </div>
      </Form>
    </Styled>
  );
};

export default AuthForm;

const Styled = styled.div`
  .form {
    max-width: 40rem;
    margin: 2rem auto;
    label,
    input,
    textarea {
      display: block;
      width: 100%;
    }
    input,
    textarea {
      margin-bottom: 8px;
      font: inherit;
      padding: 0.25rem;
    }
    .actions {
      margin-top: 24px;
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      align-items: center;

      button {
        font: inherit;
        cursor: pointer;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;

        background-color: ${({ theme }) => theme.colors.gray300};
        color: ${({ theme }) => theme.colors.gray800};
        border: none;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary300};
        }
      }

      a {
        text-decoration: none;
        cursor: pointer;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.gray300};
        color: ${({ theme }) => theme.colors.gray800};
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary300};
        }
      }
    }
  }
`;
