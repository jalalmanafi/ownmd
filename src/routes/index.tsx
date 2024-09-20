import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Editor = lazy(() => import("@/pages/Editor"));

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);

export default router