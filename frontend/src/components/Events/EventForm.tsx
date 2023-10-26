import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EventForm = ({ method, event }: { method: string; event: string }) => {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
    console.log({ method, event });
  }

  return (
    <Styled>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required />
      </p>
      <div className="actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Styled>
  );
};

export default EventForm;

const Styled = styled.form`
  max-width: 40rem;
  margin: 2rem auto;
  h1 {
    color: ${({ theme }) => theme.colors.gray800};
  }
  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }

  input,
  textarea {
    font: inherit;
    padding: 0.25rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;

    button {
      font: inherit;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.gray300};
      color: ${({ theme }) => theme.colors.gray800};
      border: none;
    }

    button[type='button'] {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray300};
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.gray300};
    }

    button[type='button']:hover {
      background-color: ${({ theme }) => theme.colors.gray800};
    }
  }
`;
