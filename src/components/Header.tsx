/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import authSlice from '../store/authSlice';
const Header = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authSlice.actions.logout());
  };
  const navItems = (
    <nav>
      <ul>
        <li>
          <a href="/">
            <p>Products</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Sales</p>
          </a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <Styled>
      <h1>Redux Auth</h1>
      {isAuthenticated ? (
        navItems
      ) : (
        <p className="error">Use login form to view this content!</p>
      )}
    </Styled>
  );
};

export default Header;

const Styled = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary500};
  color: white;
  padding: 0 1rem;
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.text20};
  }
  .error {
    color: red;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    li {
      margin: 0 1rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
    &:hover,
    &:active {
      color: #b864da;
    }
  }
  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
    &:hover,
    &:active {
      background-color: #ffa600;
      border-color: #ffa600;
    }
  }
`;
