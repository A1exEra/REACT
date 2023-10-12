import styled from 'styled-components';
import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <Styled>
      <Card className="cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
          />
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
