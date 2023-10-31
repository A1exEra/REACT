import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/Events/EventItem';
import { EVENT } from '../types';
const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail') as EVENT;
  return <EventItem event={data} />;
};

export default EventDetailPage;
