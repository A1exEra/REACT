/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { CART_ITEM } from '../../types';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import { CartContext } from '../../store/ContextProvider';
import CartItem from './CartItem';
// import useHttp from '../../hooks/useHTTP';
// import LoadingSpinner from '../UI/LoadingSpinner';
import Checkout from './Checkout';
// const URL = import.meta.env.VITE_FOODIE_URL;
function Cart({ onCloseCart }: { onCloseCart: () => void }) {
  // const { isLoading, sendRequest: submitOrder } = useHttp();
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const cartContext = useContext(CartContext);
  const isCartEmpty = cartContext.items.length > 0 ? false : true;
  const onItemAddHandler = (item: CART_ITEM) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const onItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  // const getFetchedOrders = (order: CART_ITEM[], orderData: any) => {
  //   const generatedId = orderData.name; // firebase-specific => "name" contains generated id
  //   const fetchedOrder = { id: generatedId, order };
  //   console.log(fetchedOrder);
  // };
  // const onOrderSubmitHandler = async () => {
  //   submitOrder(
  //     {
  //       url: `${URL}/orders.json`,
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: { order: cartContext.items },
  //     },
  //     getFetchedOrders.bind(null, cartContext.items)
  //   );
  //   cartContext.emptyCart();
  // };
  // if (isLoading) {
  //   return (
  //     <Modal onClick={onCloseCart}>
  //       <LoadingSpinner />
  //     </Modal>
  //   );
  // }
  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item: CART_ITEM) => (
        <CartItem
          key={item.id + Math.random().toFixed(2)}
          item={item}
          onRemove={onItemRemoveHandler}
          onAdd={onItemAddHandler}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={onCloseCart}>
      <Styled>
        {cartItems}
        <div className="total">
          <span>
            <h4>Total Amount</h4>
          </span>
          <span>
            <h4>${cartContext.totalAmount.toFixed(2)}</h4>
          </span>
        </div>
        {isCheckout ? (
          <Checkout onCancel={onCloseCart} />
        ) : (
          <div className="actions">
            <button className="button--alt" onClick={onCloseCart}>
              Close
            </button>
            {!isCartEmpty && (
              <button className="button" onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        )}
      </Styled>
    </Modal>
  );
}

const Styled = styled.div`
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .actions {
    text-align: right;

    button {
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;

      &:hover,
      &:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
      }
    }

    .button--alt {
      color: #8a2b06;
    }

    .button {
      background-color: #8a2b06;
      color: white;
    }
  }
`;
export default Cart;