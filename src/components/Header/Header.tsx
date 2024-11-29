import { FC } from "react";
import { Logo, Navigation, UserBar } from "../index";
import { StyleLink } from "../NavigationLink/NavigationLink";

export const Header: FC = () => {
  return (
    <header className=" bg-primary-white-color pt-4 pb-4 tablet:pt-5 tablet:pb-5 ">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <div className="hidden desktop:flex">
          <Navigation style={StyleLink.GREEN} />
        </div>
        <UserBar />
      </div>
    </header>
  );
};
