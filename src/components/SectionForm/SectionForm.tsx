import { FC } from "react";
import { SectionFormProps } from "./types";
import { LinkComponent } from "../index";
import { RoutesPath } from "../../constants/routes";

export const SectionForm: FC<SectionFormProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className="bg-transparent tablet:bg-light-green-bg tablet:h-auto tablet:rounded-lg tablet:px-[64px] tablet:py-[48px] desktop:w-[628px]">
      <h2 className="text-medium font-bold mb-4">{title}</h2>
      <p className="text-tiny mb-4">{text}</p>
      {children}
      <div className="text-center">
        <LinkComponent
          to={title === "Register" ? RoutesPath.auth : RoutesPath.register}
          text={title === "Register" ? "Login" : "Register"}
        />
      </div>
    </div>
  );
};
