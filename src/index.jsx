import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MenuPage from './pages/MenuPage/MenuPage';
import PianoGamePage from './pages/PianoGamePage/PianoGamePage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import AboutPage from './pages/AboutPage/AboutPage';
import InfoPage from './pages/InfoPage/InfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPage />, // Menu with links to game, tutorial, etc.
  },
  {
    path: '*',
    element: <NotFoundPage />, // komponenta, kterou si vytvoříš pro 404
  },
  {
    path: '/game',
    element: <PianoGamePage />,
  },
  {
    path: '/tutorial',
    element: <TutorialPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
