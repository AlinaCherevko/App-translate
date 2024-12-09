import { FC } from "react";
import { Icon } from "../index";

interface MenuProps {
  onClick?: () => void;
  id?: string;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  text?: string;
  disabled?: boolean;
}

export const BtnIcon: FC<MenuProps> = ({
  onClick,
  id,
  width,
  height,
  stroke,
  fill,
  text,
  disabled,
}) => {
  return (
    <button
      className="flex gap-2  items-center bg-transparent hover:text-dark-green-color text-mediumSmall tablet:text-tiny"
      type="button"
      onClick={onClick}
    >
      {text}
      {id && (
        <Icon
          disabled={disabled}
          id={id}
          stroke={stroke}
          fill={fill}
          width={width}
          height={height}
        />
      )}
    </button>
  );
};
