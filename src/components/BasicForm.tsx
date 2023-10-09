import styled from 'styled-components';

function BasicForm() {
  return (
    <Styled>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">
            <p>First Name:</p>
          </label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">
            <p>Last Name: </p>
          </label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">
          <p>E-Mail:</p>
        </label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  .control-group {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
    .form-control {
      min-width: 15rem;
      flex: 1;
    }
  }

  .form-control {
    margin-bottom: 1rem;
    input,
    label {
      display: block;
    }
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    input,
    select {
      font: inherit;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
    }
    input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
    }
  }
  button {
    font-family: 'Ubuntu';
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
  .form-actions {
    text-align: right;
    button {
      margin-left: 1rem;
    }
  }
  .invalid {
    input {
      border: 1px solid #b40e0e;
      background-color: #fddddd;
      &:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    }
  }
  .error-text {
    color: #b40e0e;
    margin-bottom: 1rem;
  }
`;
export default BasicForm;
