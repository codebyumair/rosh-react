import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import HomePage from "./src/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>ERROR OCCURED</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "*",
        element: <div>NOT FOUND</div>,
      },
    ],
  },
]);

export default router;
