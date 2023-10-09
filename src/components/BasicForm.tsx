import styled from 'styled-components';

function BasicForm() {
  return (
    <Styled>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  .form-control {
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

  .control-group {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;

    .form-control {
      min-width: 15rem;
      flex: 1;
    }
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

  .form-actions {
    text-align: right;

    button {
      margin-left: 1rem;
    }
  }
`;
export default BasicForm;
