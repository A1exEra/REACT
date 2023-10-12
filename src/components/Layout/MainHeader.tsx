import CartButton from '../Cart/CartButton';
import styled from 'styled-components';
const MainHeader = () => {
  return (
    <Styled>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </Styled>
  );
};

export default MainHeader;
const Styled = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
  h1 {
    color: white;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
