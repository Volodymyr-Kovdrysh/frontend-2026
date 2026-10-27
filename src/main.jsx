import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/about-page.jsx";
import ParamsDemoPage from "./pages/params-demo-page.jsx";
import ErrorPage from "./pages/error-page.jsx";
import RootPage from "./pages/root-page.jsx";
import FeedBackProvider from "./context/FeedBackProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/about", element: <AboutPage /> },
      { path: "params/:id/:name", element: <ParamsDemoPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FeedBackProvider>
      <RouterProvider router={router} />
    </FeedBackProvider>
  </StrictMode>,
);
