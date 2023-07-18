import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegistrationPage from './components/regisration';
import LoginForm from './components/login';
import AccountPage from './components/account';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Index />
  },
  {
    path:'/register',
    element: <RegistrationPage />
  },
  {
    path:'/login',
    element:<LoginForm />
  },
  {
    path: '/account',
    element: <AccountPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);

reportWebVitals();
