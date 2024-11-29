import { FC } from "react";
import { Link } from "react-router-dom";
type LinkProps = {
  text: string;
  to: string;
};

export const LinkComponent: FC<LinkProps> = ({ text, to }) => {
  return (
    <Link
      className="underline text-light-link-color text-tiny font-bold hover:text-main-text-color"
      to={to}
    >
      {text}
    </Link>
  );
};
