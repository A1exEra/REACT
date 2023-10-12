/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/store';
const Counter = () => {
  const { counter, showCounter } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };
  const increaseByHandler = () => {
    // dispatch({ type: 'increaseby', amount: 5 });
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };
  return (
    <Styled>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className="value">
            <h3>{counter}</h3>
          </div>
          <div className="btns">
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseByHandler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </Styled>
  );
};

export default Counter;

const Styled = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  border: 1px solid ${({ theme }) => theme.colors.third600};
  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    font-size: 1rem;
  }

  .value {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 2rem 0;
    font-weight: bold;
  }
  .btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
