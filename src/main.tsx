import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";

import router from "./routes";

import "./index.css";

const env = import.meta.env.MODE;

const AppContent = (
  <Suspense fallback={<>Loading....</>}>
    <RouterProvider router={router} fallbackElement={<>Loading....</>} />
    <Outlet />
  </Suspense>
);

createRoot(document.getElementById("root")!).render(
  env === "development" ? <StrictMode>{AppContent}</StrictMode> : AppContent
);
