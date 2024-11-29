import { FC } from "react";
import { useDispatch } from "react-redux";
import { BtnIcon, Navigation } from "../index";
import { StyleLink } from "../NavigationLink/NavigationLink";
import { logOut } from "../../redux/auth/authOperation";
import { AppDispatch } from "../../redux/store";

interface MenuProps {
  onClose: () => void;
}

export const MobMenu: FC<MenuProps> = ({ onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="p-10 bg-light-bg-color flex flex-col justify-between menu">
      <BtnIcon id="icon-close" onClick={onClose} width={20} height={20} />
      <div className="flex flex-col gap-5">
        <Navigation style={StyleLink.WHITE} />
      </div>
      <BtnIcon id="icon-arrow" text="Log out" onClick={handleLogout} />
    </div>
  );
};
