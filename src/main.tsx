import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import router from "./routes";

import "./index.css";

const env = import.meta.env.MODE;


const AppContent = (
  <NextUIProvider>
    <NextThemesProvider>
      <RouterProvider router={router} />
      <Outlet />
    </NextThemesProvider>
  </NextUIProvider>
);

createRoot(document.getElementById("root")!).render(
  env === "development" ? <StrictMode>{AppContent}</StrictMode> : AppContent
);
