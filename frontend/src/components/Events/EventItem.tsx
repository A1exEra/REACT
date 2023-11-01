import styled from 'styled-components';
import { EVENT } from '../../types';
import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';
import { ReactNode } from 'react';

const EventItem = ({ event }: { event: EVENT }) => {
  const token = useRouteLoaderData('root') as ReactNode;
  const submit = useSubmit();
  function startDeleteHandler() {
    const isDeletionConfirmed = window.confirm(
      'Are you sure you want to delete?'
    );
    if (isDeletionConfirmed) {
      console.log('DELETING...');
      submit(null, { method: 'delete' });
    }
  }
  return (
    <Styled>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className="actions">
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </Styled>
  );
};
export default EventItem;

const Styled = styled.article`
  max-width: 50rem;
  margin: 2rem auto;
  text-align: center;
  img {
    width: 30rem;
    border-radius: 4px;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0;

    a,
    button {
      padding: 0.25rem 1rem;
      text-decoration: none;
      font: inherit;
      cursor: pointer;
    }

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.primary800};
    }
  }
`;
