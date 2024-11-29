import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { RoutesPath } from "../../constants/routes";

export type Route = {
  children: React.ReactNode;
};

export const RestrictedRoute: FC<Route> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={RoutesPath.dictionary} /> : children;
};
