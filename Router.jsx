import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import HomePage from "./src/pages/HomePage";
import InteriorPage from "./src/pages/InteriorPage";
import GiftPage from "./src/pages/GiftPage";
import AboutPage from "./src/pages/AboutPage";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/product/interiors-in-stained-glass",
        element: <InteriorPage />,
      },
      {
        path: "/product/fusion-glass-showpiece",
        element: <GiftPage />,
      },
      {
        path: "*",
        element: <div>NOT FOUND</div>,
      },
    ],
  },
]);

export default router;
