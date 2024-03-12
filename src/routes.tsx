import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';
import NotFound from './NotFound';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz/:id/question/:questionId', element: <Quiz /> },
  { path: '*', element: <NotFound /> },
]);

export default router;
