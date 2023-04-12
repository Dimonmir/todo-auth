import { AuthForm } from '@features/authForm';
import PageTodo from '@pages/pageTodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AuthForm />,
  },
]);

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PageTodo />,
  },
]);

const WithRouter = () => {
  const accessToken = localStorage.getItem("accessToken");

  return <RouterProvider router={ accessToken === null || accessToken.length ? privateRoutes : publicRoutes} />;
};

export default WithRouter;