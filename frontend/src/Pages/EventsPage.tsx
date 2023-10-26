import styled from 'styled-components';
import { EVENT } from '../types';
import { Link } from 'react-router-dom';
export const DUMMY_EVENTS: EVENT[] = [
  {
    id: 'e1',
    title: 'A dummy event',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
];
const EventsPage = () => {
  return (
    <Styled>
      <ul>
        {DUMMY_EVENTS.map((event: EVENT, index: number) => (
          <li key={event.id + index}>
            <Link to={`${event.id}`}>
              <h3>{event.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default EventsPage;

const Styled = styled.div``;
