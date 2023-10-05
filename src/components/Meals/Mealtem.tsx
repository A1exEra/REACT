import styled from 'styled-components';
import { CART_ITEM, MEAL } from '../../types';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import { CartContext } from '../../store/ContextProvider';
function MealItem({ meal }: { meal: MEAL }) {
  const price = `$${meal.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);
  const onAddToCartHandler = (amount: number) => {
    const cartItem: CART_ITEM = {
      id: meal.id,
      price: meal.price,
      name: meal.name,
      amount: amount,
    };
    cartContext.addItem(cartItem);
  };
  return (
    <Styled>
      <div>
        <h3>{meal.name}</h3>
        <p className="description">{meal.description}</p>
        <h3 className="price">{price}</h3>
      </div>
      <MealItemForm id={meal.id} onAddToCart={onAddToCartHandler} />
    </Styled>
  );
}

const Styled = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: ${({ theme }) => theme.fontSizes.text20};
  }
`;
export default MealItem;
