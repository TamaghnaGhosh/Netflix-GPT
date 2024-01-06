import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Watch from './Watch/Watch'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/watch/:watchId",
      element: <Watch />,
    }
  ]);

  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
