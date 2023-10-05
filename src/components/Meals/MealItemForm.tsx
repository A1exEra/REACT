import styled from 'styled-components';
import Input from '../UI/Input';
import { FormEvent, useRef, useState } from 'react';
function MealItemForm({
  id,
  onAddToCart,
}: {
  id: string;
  onAddToCart: (amount: number) => void;
}) {
  const amountRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    if (amountRef.current) {
      const enteredAmount = +amountRef.current.value;
      if (
        enteredAmount.toString().trim().length === 0 ||
        enteredAmount < 1 ||
        enteredAmount > 5
      ) {
        setAmountIsValid(false);
        return;
      }
      setAmountIsValid(true);
      onAddToCart(enteredAmount);
    }
  };
  return (
    <Styled onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: `amount_+${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>
        <p>+Add</p>
      </button>
      {!amountIsValid && <p>Please enter a valid amounnt (1-5)</p>}
    </Styled>
  );
}

const Styled = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`;
export default MealItemForm;
