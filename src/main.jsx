import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },{
        path:"/product/:id" ,element:<ProductPage/>
      },
      {
        path:"/cart" ,element:<Cart />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
