import { FC } from "react";

type SearchInputProps = {
  placeholder: string;
  children: React.ReactNode;
  setKeyword: (prop: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  children,
  setKeyword,
}) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleSearchInputChange}
        type="text"
        placeholder={placeholder}
        className=" w-full h-[48px] bg-transparent rounded-md border border-gray-border-color hover:border-dark-green-color pl-2 text-small placeholder:text-main-text-color"
      />
      {children}
    </div>
  );
};
