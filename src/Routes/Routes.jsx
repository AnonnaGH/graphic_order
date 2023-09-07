import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DesignSample from "../Pages/DesignSample/DesignSample";
import OrderForm from "../Pages/Order/OrderForm";
import OrderList from "../Pages/Order/OrderList";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrders from "../Pages/Order/MyOrders";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/sample',
            element: <DesignSample></DesignSample>
        },
        {
            path:'/order',
            element: <OrderForm></OrderForm>
        },
      //   {
      //     path:'/orderlist',
      //     element: <OrderList></OrderList>,
      //     loader: () => fetch('http://localhost:5000/order')
      // },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'login',
        element:<Login></Login>
      }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>, 
      children: [
        {
          path:'orderlist',
          element: <OrderList></OrderList>,
          loader: () => fetch('http://localhost:5000/order')
      },
        {
          path:'admin',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
        {
          path:'myorders',
          element: <MyOrders></MyOrders>
      },
        {
          path:'order',
          element: <OrderForm></OrderForm>,
          
      },
      {
        path: 'allusers', 
        element:<AllUsers></AllUsers>
      },
      ]
    }
  ]);


export default router;