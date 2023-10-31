import EventForm from '../components/Events/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
import { EVENT } from '../types';
const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail') as EVENT;
  return <EventForm method="patch" event={data} />;
};

export default EditEventPage;
