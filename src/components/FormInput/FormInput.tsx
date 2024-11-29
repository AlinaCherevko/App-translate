import {
  UseFormRegister,
  Path,
  FieldError,
  FieldValues,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  placeholder: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  success?: boolean | string | number;
  describe?: string;
  type?: string;
};

export const FormInput = <T extends FieldValues>({
  placeholder,
  register,
  label,
  error,
  success,
  type,
}: InputProps<T>) => {
  return (
    <div className="relative">
      <input
        className="bg-transparent border border-gray-border-color rounded-md  h-[56px] w-full  text-tiny text-main-text-color pl-2 placeholder:text-main-text-color hover:border-dark-green-color"
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
