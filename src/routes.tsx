import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz/:id/question/:questionId', element: <Quiz /> },
]);

export default router;
