import { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/ContextProvider';
import { CART_ITEM } from '../../types';
function CartButton(props: { onClick: () => void }) {
  const [btnIsHoghlighted, setBtnIsHoghlighted] = useState<boolean>(false);
  const { items } = useContext(CartContext);
  const cartItems = items.reduce((acc, item: CART_ITEM) => {
    return acc + item.amount!;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHoghlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHoghlighted(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);
  return (
    <StyledCartButton
      onClick={props.onClick}
      btnIsHighlighted={btnIsHoghlighted}>
      <span className="icon">
        <CartIcon />
      </span>
      <span className="badge">{cartItems}</span>
    </StyledCartButton>
  );
}
interface StyledCartButtonProps {
  btnIsHighlighted: boolean;
}
const StyledCartButton = styled.button<StyledCartButtonProps>`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  ${(props) =>
    props.btnIsHighlighted &&
    css`
      animation: bump 300ms ease-out;
    `}
  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
    &:hover,
    &:active {
      background-color: #92320c;
    }
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export default CartButton;
