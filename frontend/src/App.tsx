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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
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
