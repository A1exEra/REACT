import { useLoaderData, Await } from 'react-router-dom';
import EventsList from '../components/Events/EventsList';
import { EVENT } from '../types';
import { Suspense } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
const EventsPage = () => {
  const { events } = useLoaderData() as { [key: string]: EVENT[] };
  const loading = <LoadingSpinner />;
  return (
    <Suspense fallback={loading}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;
