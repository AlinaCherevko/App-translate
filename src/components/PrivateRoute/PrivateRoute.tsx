import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as selector from "../../redux/auth/authSelectors";
import { Route } from "../RestrictedRoute/RestrictedRoute";
import { RoutesPath } from "../../constants/routes";

export const PrivateRoute: FC<Route> = ({ children }) => {
  const isAuth = useSelector(selector.selectIsAuth);

  return isAuth ? children : <Navigate to={RoutesPath.auth} />;
};
