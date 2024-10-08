import type React from "react";
import { useEffect } from "react";
import { ROUTER_PATHS } from "../../constant/routePaths";
import { useNavigate } from "react-router-dom";

const { SIGN_IN } = ROUTER_PATHS;

interface PropsType {
  children:
    | string
    | React.JSX.Element
    | React.JSX.Element[]
    | (() => React.JSX.Element);
}

const RenderOnAuthenticated = ({ children }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userData")) navigate(SIGN_IN.PATH);
  }, [navigate]);

  return localStorage.getItem("userData")
    ? (children as React.JSX.Element)
    : null;
};

export default RenderOnAuthenticated;
