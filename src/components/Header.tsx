import styled from 'styled-components';

const Header = () => {
  return (
    <Styled>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
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
  background-color: #3c0080;
  color: white;
  padding: 0 10%;
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
