import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './assets/styles/theme';
import EventsPage from './Pages/EventsPage';
import EventDetailPage from './Pages/EventDetailPage';
import NewEventPage from './Pages/NewEventPage';
import EditEventPage from './Pages/EditEventPage';
import HomePage from './Pages/HomePage';
import RootLayout from './Pages/RootLayout';
import EventsRoot from './Pages/EventsRoot';
import {
  getEvents,
  patchOrPostEventActions,
  deleteEvent,
  getEventById,
} from './components/utils/HTTP';
import ErrorPage from './Pages/ErrorPage';
import NewsLetterPage, {
  action as newsletterAction,
} from './Pages/NewsLetterPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: getEvents,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: getEventById,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: patchOrPostEventActions,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: patchOrPostEventActions,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsLetterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
