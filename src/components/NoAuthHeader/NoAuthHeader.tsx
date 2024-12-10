import { FC } from "react";
import { Logo } from "../index";

export const NoAuthHeader: FC = () => {
  return (
    <header className="bg-primary-white-color py-[18px] tablet:py-[24px]">
      <div className="wrapper">
        <Logo />
      </div>
    </header>
  );
};
