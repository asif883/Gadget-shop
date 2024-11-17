import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Components/DashboardComponents/Overview";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
    ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'dashboard/overview',
          element: <Overview></Overview>
        }
      ]
    }
  ]);