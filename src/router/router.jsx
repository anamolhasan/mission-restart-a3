// src/routes/routes.jsx
import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;