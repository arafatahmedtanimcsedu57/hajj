import { createBrowserRouter, type RouteObject } from "react-router-dom";

import Layout from "../Layout";
import SignIn from "../../pages/SignIn";
import Dashboard from "../../pages/Dashboard";
import Error404 from "./../../pages/Error";

import { ROUTER_PATHS } from "../../constant/routePaths";
import RenderOnAuthenticated from "./RenderOnAuthenticated";

const { SIGN_IN, HOME } = ROUTER_PATHS;

export const getRouter = () => {
  const routes: RouteObject[] = [
    {
      id: `${SIGN_IN.LABEL}`,
      path: `${SIGN_IN.PATH}`,
      element: <SignIn />,
    },
    {
      id: `${HOME.LABEL}`,
      path: `${HOME.PATH}`,
      element: <Layout />,
      children: [
        {
          id: `${HOME.LABEL}.1`,
          index: true,
          element: (
            <RenderOnAuthenticated>
              <Dashboard />
            </RenderOnAuthenticated>
          ),
        },
      ],
    },
    {
      id: "ERROR",
      path: "*",
      element: <Error404 />,
    },
  ];

  return createBrowserRouter(routes, { basename: "/" });
};
