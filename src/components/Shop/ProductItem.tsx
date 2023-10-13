import Card from '../UI/Card';
import styled from 'styled-components';
import { BOOK } from '../../types';
import { useDispatch } from 'react-redux';
import { cartActions, uiActions } from '../../store/store';
const ProductItem = ({ title, price, description, id }: BOOK) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    const item = { title, price, total: price, quantity: 1, id };
    dispatch(cartActions.addItemToCart(item));
    dispatch(uiActions.setIsInitial());
  };
  return (
    <Styled>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={onClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </Styled>
  );
};

export default ProductItem;
const Styled = styled.li`
  h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .price {
    border-radius: 30px;
    padding: 0.15rem 1.5rem;
    background-color: #3a3a3a;
    color: white;
    font-size: 1.5rem;
  }

  p {
    color: #3a3a3a;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
`;
