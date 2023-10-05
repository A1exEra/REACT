import styled from 'styled-components';
import { CART_ITEM } from '../../types';

function CartItem({
  item,
  onRemove,
  onAdd,
}: {
  item: CART_ITEM;
  onRemove: (id: string) => void;
  onAdd: (item: CART_ITEM) => void;
}) {
  const price = `$${item.price.toFixed(2)}`;
  return (
    <Styled>
      <div>
        <h2>{item.name}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {item.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => onRemove(item.id)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </Styled>
  );
}

const Styled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;
  h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  .summary {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-weight: bold;
    color: #8a2b06;
  }

  .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  }
`;
export default CartItem;
