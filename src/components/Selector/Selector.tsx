import { FC } from "react";
import Select from "react-select";
import { useSelectStyles } from "../../hooks/hooks";
import { Style } from "../Button/Button";

export type Option = { value: string; label: string };

export type ISelect = {
  onChange: (value: string) => void;
  setPage?: (value: number) => void;
  options: Option[];
  style: Style;
  label: string;
};

export const SelectEl: FC<ISelect> = ({
  options,
  onChange,
  setPage,
  style,
  label,
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
    <div className="">
      {label && <label>{label}</label>}
      <Select
        className=""
        //isClearable
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder="Categories"
        styles={useSelectStyles(style)}
      />
    </div>
  );
};
