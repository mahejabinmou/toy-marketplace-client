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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/alltoys",
        element:<AllToys></AllToys>
      },
      {
        path:"/mytoys",
        element:<MyToys></MyToys>
      },
      {
        path:"/addtoy",
        element:<AddAToy></AddAToy>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
