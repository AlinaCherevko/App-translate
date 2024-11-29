import { FC } from "react";
import { Icon } from "../index";

interface MenuProps {
  onClick: () => void;
  id: string;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  text?: string;
}

export const BtnIcon: FC<MenuProps> = ({
  onClick,
  id,
  width,
  height,
  stroke,
  fill,
  text,
}) => {
  return (
    <button
      className="flex gap-2  items-center bg-transparent"
      type="button"
      onClick={onClick}
    >
      {text}
      <Icon id={id} stroke={stroke} fill={fill} width={width} height={height} />
    </button>
  );
};
