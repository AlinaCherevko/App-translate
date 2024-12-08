import { FC } from "react";

type SearchInputProps = {
  placeholder?: string;
  children?: React.ReactNode;
  setKeyword?: (prop: string) => void;
  setPage?: (prop: number) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  children,
  setKeyword,
  setPage,
}) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setKeyword && setKeyword(e.target.value.trim());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setPage && setPage(1);
  };

  return (
    <div>
      <input
        onChange={handleSearchInputChange}
        type="text"
        placeholder={placeholder}
        className="w-full h-[48px] bg-transparent rounded-md border border-gray-border-color hover:border-dark-green-color pl-2 placeholder:text-main-text-color placeholder:text-mediumSmall text-mediumSmall tablet:placeholder:text-tiny tablet:text-tiny"
      />
      {children}
    </div>
  );
};
