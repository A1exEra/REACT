import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const EventsNavigation = () => {
  return (
    <Styled>
      <nav>
        <ul className="list">
          <li>
            <NavLink
              to="/events"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </Styled>
  );
};

export default EventsNavigation;

const Styled = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  .list {
    display: flex;
    gap: 1rem;
    a {
      background-color: ${({ theme }) => theme.colors.gray500};
      color: ${({ theme }) => theme.colors.gray900};
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      a:hover,
      a:active {
        background-color: ${({ theme }) => theme.colors.primary600};
      }
    }
    .active {
      background-color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
