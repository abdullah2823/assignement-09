import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllProduct from "../Component/Allproduct";

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
    element: <h1>Auth Page</h1>,
  },
  {
    path: "/toys",
    element: <h1>Toys Page</h1>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
