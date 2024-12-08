import {
  UseFormRegister,
  Path,
  FieldError,
  FieldValues,
} from "react-hook-form";
import { Style } from "../Button/Button";

export type InputProps<T extends FieldValues> = {
  placeholder?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  success?: boolean | string | number;
  describe?: string;
  type?: string;
  style: Style;
};

export const FormInput = <T extends FieldValues>({
  placeholder,
  register,
  label,
  error,
  success,
  type,
  style,
}: InputProps<T>) => {
  return (
    <div className="relative">
      <input
        className={`bg-transparent border  rounded-md h-[56px] w-full  text-tiny  pl-2 ${
          style === Style.Dark
            ? "text-main-text-color placeholder:text-main-text-color hover:border-dark-green-color"
            : "text-primary-white-color border-primary-white-color"
        }`}
        placeholder={placeholder}
        {...register(label)}
        type={type}
      />

      {error && (
        <p className="absolute text-lightSmall text-red-error-color tablet:text-lightSmall">
          {error.message}
        </p>
      )}
      {success && (
        <p className="absolute text-lightSmall text-green-success-color tablet:text-lightSmall">
          Valid {label}
        </p>
      )}
    </div>
  );
};
