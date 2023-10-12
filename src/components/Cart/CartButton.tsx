import styled from 'styled-components';
const CartButton = () => {
  return (
    <Styled>
      <span>My Cart</span>
      <span className="badge">1</span>
    </Styled>
  );
};

export default CartButton;
const Styled = styled.button`
  background-color: transparent;
  border-color: #1ad1b9;
  color: #1ad1b9;
  &:hover,
  &:active {
    color: white;
  }
  span {
    margin: 0 0.5rem;
  }
  .badge {
    background-color: #1ad1b9;
    border-radius: 30px;
    padding: 0.15rem 1.25rem;
    color: #1d1d1d;
  }
`;
