import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/Navigation/EventsNavigation';

const EventsRoot = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRoot;
