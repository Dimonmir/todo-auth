
import { AuthForm } from '@widgets/authForm/authForm';
import PageTodo from '@pages/pageTodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from '../store';
import sessionSlice from '@/entities/session/sessionSlice';
import { useAppSelector } from '@/shared/store/redux';
import { RegForm } from '@/widgets/regForm/regForm';


const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AuthForm />,
  },
  {
    path: '/reg',
    element: <RegForm />,
  },
]);

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PageTodo />,
  },
]);

const WithRouter = () => {
  const accessToken = useAppSelector(store => store.session.token)
  console.log(!!accessToken)
  return <RouterProvider router={ accessToken.length ? privateRoutes : publicRoutes} />;  
};

export default WithRouter;