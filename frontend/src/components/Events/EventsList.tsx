/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const EventsList = ({ events }: any) => {
  return (
    <Styled>
      <h1>All Events</h1>
      <ul className="list">
        {events.map((event: any) => (
          <li key={event.id} className="item">
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className="content">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default EventsList;

const Styled = styled.div`
  margin: 2rem auto;
  max-width: 40rem;
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item {
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      background-color: ${({ theme }) => theme.colors.gray800};
      border-radius: 4px;
      overflow: hidden;
      a:hover {
        transform: scale(1.02);
        background-color: ${({ theme }) => theme.colors.gray700};
      }
    }
    img {
      width: 33%;
      object-fit: cover;
    }
    h2 {
      margin: 0 0 1rem 0;
    }
    .content {
      padding: 1rem;
    }
  }
`;
