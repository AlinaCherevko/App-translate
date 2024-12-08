import { FC } from "react";
import Select from "react-select";
import { useSelectStyles } from "../../hooks/hooks";

export type Option = { value: string; label: string };

export type ISelect = {
  onChange: (value: string) => void;
  setPage: (value: number) => void;
  options: Option[];
};

export const SelectEl: FC<ISelect> = ({ options, onChange, setPage }) => {
  const onSelectChange = (newValue: unknown) => {
    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;

      if (selectedOption.value === "all") {
        onChange("");
      } else {
        onChange(selectedOption.value);
      }
      setPage(1);
    }
  };

  return (
    <div className="">
      <Select
        className=""
        //isClearable
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder="Categories"
        styles={useSelectStyles()}
      />
    </div>
  );
};
