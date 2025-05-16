import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/Home";
import UpdateCoffee from "./components/UpdateCoffee";
import AddCoffee from "./components/AddCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthContext from "./context/AuthContext";
import AuthProvider from "./context/AuthProvider";
import Users from "./components/Users";

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
      // 9.1 created a route and simultaneously created component CoffeeDetails. then load the data using loader and pass the params and get the specific coffee
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      // 10.0 My requirement is update the specific coffee. to take the specicfic item we use id dynamically simultaneously created the UpdateCoffee component and load the backend coffee data by dynamic id
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      // 14.1 created a route for Users component
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 12.4 */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
