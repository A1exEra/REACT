import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NewsLetterSignup from '../NewsLetterSignup';
const MainNavigation = () => {
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
