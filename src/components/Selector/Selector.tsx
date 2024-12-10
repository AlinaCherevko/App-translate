import { FC } from "react";
import Select from "react-select";
import { useSelectStyles } from "../../hooks/hooks";
import { Style } from "../Button/Button";
import { FieldError } from "react-hook-form";

export type Option = { value: string; label: string };

export type ISelect = {
  onChange: (value: string) => void;
  setPage?: (value: number) => void;
  options: Option[];
  style: Style;
  error?: FieldError;
};

export const SelectEl: FC<ISelect> = ({
  options,
  onChange,
  setPage,
  error,
  style,
}) => {
  const onSelectChange = (newValue: unknown) => {
    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;

      if (selectedOption.value === "all") {
        onChange("");
      } else {
        onChange(selectedOption.value);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      setPage && setPage(1);
    }
  };

  return (
    <div className="relative">
      <Select
        //isClearable
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder="Categories"
        styles={useSelectStyles(style)}
      />
      {error && (
        <p className="absolute text-lightSmall text-red-error-color tablet:text-lightSmall">
          {error.message}
        </p>
      )}
    </div>
  );
};
