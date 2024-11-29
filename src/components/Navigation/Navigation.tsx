import { FC } from "react";
import { StyleLink } from "../NavigationLink/NavigationLink";
import { RoutesPath } from "../../constants/routes";
import { NavigationLink } from "../index";

type NavigationProps = {
  style: StyleLink;
};

export const Navigation: FC<NavigationProps> = ({ style }) => {
  return (
    <nav className="flex gap-[28px] ">
      <NavigationLink
        style={style}
        to={RoutesPath.dictionary}
        text="Dictionary"
      />
      <NavigationLink
        style={style}
        to={RoutesPath.recommend}
        text="Recommend"
      />
      <NavigationLink style={style} to={RoutesPath.training} text="Training" />
    </nav>
  );
};
