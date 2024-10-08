import React from "react";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./components/Router";

const Page = () => {
  return <RouterProvider router={getRouter()} />;
};

export default Page;
