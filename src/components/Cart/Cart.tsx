/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import Card from '../UI/Card';
import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CART_ITEM } from '../../types';
const Cart = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  return (
    <Styled>
      <Card className="cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map(
              ({ title, price, id, total, quantity }: CART_ITEM) => (
                <CartItem
                  key={id}
                  item={{ title, quantity, total, price, id }}
                />
              )
            )
          ) : (
            <p>Your shopping cart is empty</p>
          )}
        </ul>
      </Card>
    </Styled>
  );
};

export default Cart;
const Styled = styled.div`
  .cart {
    max-width: 30rem;
    background-color: #313131;
    color: white;

    h2 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
`;
