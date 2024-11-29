import { FC } from "react";

export enum Style {
  Dark = "Dark",
  Light = "Light",
}

export type ButtonProps = {
  style?: Style;
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};
export const Button: FC<ButtonProps> = ({ text, type, onClick, style }) => {
  return (
    <button
      className={`text-tiny font-bold border rounded-lg ${
        style === Style.Dark
          ? "text-primary-white-color bg-dark-green-color hover:bg-light-green-color w-full h-[56px] tablet:h-[60px]"
          : "text-dark-green-color hover:text-primary-white-color bg-primary-white-color hover:bg-dark-green-color w-[145px] tablet:w-[245px] h-[56px] tablet:h-[60px] border border-dark-green-color"
      }`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
