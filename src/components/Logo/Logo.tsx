import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../constants/routes";

export const Logo: FC = () => {
  return (
    <Link to={RoutesPath.dictionary} className="flex gap-1 items-center">
      <img
        src="/logo.svg"
        alt="logo-img"
        className="cursor-pointer w-9 h-9 tablet:w-11 tablet:h-11"
      />
      <span className="text-small font-bold tablet:text-lightMedium hover:text-dark-green-color">
        VocabBuilder
      </span>
    </Link>
  );
};
