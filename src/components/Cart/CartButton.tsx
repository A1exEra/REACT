/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/store';
const CartButton = () => {
  const dispatch = useDispatch();
  const { totalCartItems } = useSelector((state: any) => state.cart);
  const onClickHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <Styled onClick={onClickHandler}>
      <span>My Cart</span>
      <span className="badge">{totalCartItems}</span>
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
