import styled from 'styled-components';

function SimpleInput() {
  return (
    <Styled>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  form-control {
    margin-bottom: 1rem;
  }

  .form-control input,
  .form-control label {
    display: block;
  }

  .form-control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .form-control input,
  .form-control select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .form-control input:focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }
  form-actions {
    text-align: right;
  }

  .form-actions button {
    margin-left: 1rem;
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }

  .error-text {
    color: #b40e0e;
  }
  button {
    font: inherit;
    background-color: #240370;
    color: white;
    border: 1px solid #240370;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: #33059e;
      border-color: #33059e;
    }
  }
`;
export default SimpleInput;
