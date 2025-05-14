import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/Home";
import UpdateCoffee from "./components/UpdateCoffee";
import AddCoffee from "./components/AddCoffee";

// 5.0 now created the component AddCoffee, UpdateCoffee, Home and set the layout

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        // 7.1 fetching the data as we are going to show the data in Home page
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      { path: "/addcoffee", Component: AddCoffee },
      { path: "/updatecoffee", Component: UpdateCoffee },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
