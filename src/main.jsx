import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/homePage";
import ContactPage from "./Pages/contactPage";

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: (
      <div className="flex justify-center items-center">
        ..~.. sry UwU ..~..
      </div>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: (
      <div className="flex justify-center items-center">
        ..~.. sry UwU ..~..
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
