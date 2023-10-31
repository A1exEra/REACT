import { useNavigate, useNavigation, useActionData } from 'react-router-dom';
import styled from 'styled-components';
import { EVENT } from '../../types';
import { Form } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
const EventForm = ({
  method,
  event,
}: {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined;
  event?: EVENT;
}) => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData() as {
    message: string;
    errors: { [key: string]: string };
  };
  const isSubmitting = navigation.state === 'submitting';
  function cancelHandler() {
    navigate('..');
  }
  return (
    <Styled>
      {isSubmitting && <LoadingSpinner />}
      <Form method={method} className="form">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error: string) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={event ? event.title : ''}
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="url"
            name="image"
            defaultValue={event ? event.image : ''}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            defaultValue={event ? event.date : ''}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            defaultValue={event ? event.description : ''}
          />
        </p>
        <div className="actions">
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </Styled>
  );
};

export default EventForm;

const Styled = styled.div`
  ul {
    border: 2px solid cornflowerblue;
    border-radius: 4px;
    padding: 8px;
  }
  .form {
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
      border: 1px solid ${({ theme }) => theme.colors.gray700};
      border-radius: 4px;
      font: inherit;
      padding: 0.25rem;
      margin-bottom: 8px;
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
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.colors.primary300};
        }
      }

      button[type='button'] {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.gray300};
      }

      button[type='button']:hover {
        background-color: ${({ theme }) => theme.colors.gray800};
      }
    }
  }
`;
