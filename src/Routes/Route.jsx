import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllProduct from "../Component/Allproduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/product.JSON"),
      },
      {
        path: "/allproduct",
        element: <AllProduct />,
        loader: () => fetch("/product.JSON"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/toy-details/:id",
    element: <ToyDetails />,
  },

  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
