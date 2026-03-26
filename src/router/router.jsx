// src/routes/routes.jsx
import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";
import Apps from "../pages/apps/Apps";
import Installation from "../pages/installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;