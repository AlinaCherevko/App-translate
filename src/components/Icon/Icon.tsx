import type { FC } from "react";
import sprite from "/symbol-defs.svg";

export type IconProps = {
  id: string;
  fill?: string;
  stroke?: string;
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
};

export const Icon: FC<IconProps> = ({
  id,
  fill,
  stroke,
  width,
  height,
  disabled,
}) => {
  return (
    <svg
      fill={disabled ? "rgba(18, 20, 23, 0.1)" : fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};
