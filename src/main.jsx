import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Home/Home';
import AllToys from './AllToys/AllToys';
import MyToys from './MyToys/MyToys';
import AddAToy from './AddAToy/AddAToy';
import Blogs from './Blogs/Blogs';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SingleToyDetails from './SingleToyDetails/SingleToyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/singletoydetails/:id",
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto p-4'>
    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>,
  </div>
)
