import styled from 'styled-components';
import { CART_ITEM } from '../../types';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/store';
const CartItem = (props: { item: CART_ITEM }) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const onRemoveHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const onAddHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };
  return (
    <Styled className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{' '}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </Styled>
  );
};

export default CartItem;
const Styled = styled.li`
  margin: 1rem 0;
  background-color: #575757;
  padding: 1rem;
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.75rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .quantity span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .itemprice {
    font-weight: normal;
    font-size: 1rem;
    font-style: italic;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 0;
    button {
      background-color: transparent;
      border: 1px solid white;
      margin-left: 0.5rem;
      padding: 0.15rem 1rem;
      color: white;
      &:hover,
      &:active {
        background-color: #4b4b4b;
        color: white;
      }
    }
  }
`;
