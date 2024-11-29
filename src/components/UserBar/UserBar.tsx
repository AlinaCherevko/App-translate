import { FC } from "react";
import { BtnIcon } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import * as selector from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperation";

export const UserBar: FC = () => {
  const { name } = useSelector(selector.selectUser);
  const dispatch: AppDispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  const onOpenModalMenu = () => {};

  return (
    <div className="flex gap-2 items-center">
      <span>{name}</span>
      <div className="w-9 h-9 flex items-center justify-center tablet:w-11 tablet:h-11 rounded-full bg-dark-green-color ">
        <span>{name.slice(0, 1).toUpperCase()}</span>
      </div>
      <div className="hidden desktop:flex ">
        <BtnIcon
          text="Log out"
          id="icon-arrow"
          width={16}
          height={16}
          onClick={onLogoutClick}
        />
      </div>
      <div className="desktop:hidden">
        <BtnIcon
          id="icon-menu"
          width={28}
          height={28}
          onClick={onOpenModalMenu}
          stroke="#262626"
        />
      </div>
    </div>
  );
};
