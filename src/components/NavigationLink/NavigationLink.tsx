import { FC } from "react";
import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  to: string;
  text: string;
  onClick?: () => void;
  style: StyleLink;
};

export enum StyleLink {
  GREEN = "green",
  WHITE = "white",
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  text,
  onClick,
  style,
}) => {
  return (
    <NavLink
      className={`text-tiny font-medium h-[43px] px-5 py-2.5  ${
        style === StyleLink.GREEN ? "hover:text-dark-green-color " : ""
      }`}
      to={to}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};
