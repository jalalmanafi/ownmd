import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "./App";
import router from "./routes";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<>Loading....</>}>
    <RouterProvider router={router} fallbackElement={<>Loading....</>}/>
    <App />
    </Suspense>
  </StrictMode>
);
