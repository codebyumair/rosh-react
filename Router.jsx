import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import HomePage from "./src/pages/HomePage";
import InteriorPage from "./src/pages/InteriorPage";
import GiftPage from "./src/pages/GiftPage";
import AboutPage from "./src/pages/AboutPage";
import ContactPage from "./src/pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div
        className="flex items-center justify-center h-screen w-full bg-primary bg-opacity-[.88] fixed top-0 left-0"
        style={{ zIndex: 999999 }}
      >
        NOT FOUND
      </div>
    ),
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
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
