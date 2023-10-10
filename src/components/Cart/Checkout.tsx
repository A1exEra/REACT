/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

function Checkout(props: any) {
  const confirmHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <Styled onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className="control">
        <label htmlFor="postalCode">Postal code</label>
        <input type="text" id="postalCode" />
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </Styled>
  );
}

const Styled = styled.form`
  margin: 1rem 0;
  height: 16rem;
  overflow: auto;
  .control {
    margin-bottom: 0.5rem;
    label {
      font-weight: bold;
      margin-bottom: 0.25rem;
      display: block;
    }

    input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 20rem;
      max-width: 100%;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    button {
      font: inherit;
      color: #5a1a01;
      cursor: pointer;
      background-color: transparent;
      border: none;
      border-radius: 25px;
      padding: 0.5rem 2rem;
      &:hover,
      &:active {
        background-color: #ffe6dc;
      }
    }
    .submit {
      border: 1px solid #5a1a01;
      background-color: #5a1a01;
      color: white;
      &:hover,
      &:active {
        background-color: #7a2706;
      }
    }
  }

  .invalid label {
    color: #ca3e51;
    input {
      border-color: #aa0b20;
      background-color: #ffeff1;
    }
  }
`;
export default Checkout;
