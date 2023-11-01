import styled from 'styled-components';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import NewsLetterSignup from '../NewsLetterSignup';
import { ReactNode } from 'react';
const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  return (
    <Styled>
      <nav>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="newsletter"
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="auth/?mode=login"
                className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Authentication
              </NavLink>
            </li>
          )}
          {(token as ReactNode) && (
            <li>
              <Form action="logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsLetterSignup />
    </Styled>
  );
};

export default MainNavigation;

const Styled = styled.header`
  max-width: 60rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  .list {
    display: flex;
    gap: 1rem;
    button {
      font: inherit;
      cursor: pointer;
      /* padding: 0.5rem 1.5rem; */
      border-radius: 4px;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary400};
      border: none;
      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.primary800};
      }
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary400};
    }
    a:hover,
    a.active {
      color: ${({ theme }) => theme.colors.primary800};
    }
  }
`;
