import styled from 'styled-components';

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <Styled>
      <h1>Redux Counter</h1>
      <div className="value">-- COUNTER VALUE --</div>
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
  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }

  .value {
    font-size: 2rem;
    color: #3c0080;
    margin: 2rem 0;
    font-weight: bold;
  }
`;
