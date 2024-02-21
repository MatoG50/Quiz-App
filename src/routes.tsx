import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz/:id', element: <Quiz /> },
]);

export default router;
