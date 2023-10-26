import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import EventItem from '../components/Events/EventItem';
import { DUMMY_EVENTS } from './EventsPage';
import { EVENT } from '../types';
const EventDetailPage = () => {
  const params = useParams();
  const event = DUMMY_EVENTS.find((event) => event.id === params.eventId);
  return (
    <Styled>
      <EventItem event={event as EVENT} />
    </Styled>
  );
};

export default EventDetailPage;

const Styled = styled.div``;
