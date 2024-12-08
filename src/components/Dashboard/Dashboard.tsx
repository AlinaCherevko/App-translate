import { FC } from "react";
import { Icon, SearchInput, SelectEl, RadioGroupEl } from "../index";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { WordCategory } from "../../redux/words/types";
import { CreateOptionsArray } from "../../utils/utils";

type DashboardType = {
  setOption: (props: string) => void;
  setKeyword: (props: string) => void;
  setPage: (props: number) => void;
  option?: WordCategory | string;
  setIsIrregular: (props: boolean) => void;
};

export const Dashboard: FC<DashboardType> = ({
  setOption,
  setKeyword,
  setPage,
  option,
  setIsIrregular,
}) => {
  const categories = useSelector(selector.selectCategories);
  const options = CreateOptionsArray(categories);

  return (
    <div className="flex flex-col gap-2 tablet:flex-row tablet:justify-between tablet:items-center mb-8 tablet:mb-7 ">
      <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center pb-2 tablet:p-0">
        <div className="relative">
          <SearchInput
            placeholder="Find the word"
            setPage={setPage}
            setKeyword={setKeyword}
          >
            <div className="absolute top-3.5 right-3.5">
              <Icon
                id="icon-search"
                width={20}
                height={20}
                fill="transparent"
                stroke="#262626"
              />
            </div>
          </SearchInput>
        </div>
        <SelectEl options={options} onChange={setOption} setPage={setPage} />
        <div className="h-5">
          {option === "verb" && (
            <RadioGroupEl setIsIrregular={setIsIrregular} setPage={setPage} />
          )}
        </div>
      </div>
      <p>To study:</p>
    </div>
  );
};
