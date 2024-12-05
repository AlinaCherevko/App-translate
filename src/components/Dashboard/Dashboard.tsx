import { FC } from "react";
import { Icon, SearchInput, SelectEl, RadioGroupEl } from "../index";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { WordCategory } from "../../redux/words/types";

type DashboardType = {
  setOption: (props: string) => void;
  setKeyword: (props: string) => void;
  option?: WordCategory | string;
};

export const Dashboard: FC<DashboardType> = ({
  setOption,
  setKeyword,
  option,
}) => {
  const categories = useSelector(selector.selectCategories);
  const options =
    categories &&
    Array.from({ length: categories.length }, (_, index) => {
      return {
        value: categories[index],
        label: categories[index],
      };
    });

  return (
    <div className="flex flex-col gap-2 tablet:flex-row tablet:justify-between tablet:items-center ">
      <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center pb-2 tablet:p-0">
        <div className="relative">
          <SearchInput placeholder="Find the word" setKeyword={setKeyword}>
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
        <SelectEl options={options} onChange={setOption} />
        <div className="h-5">{option === "verb" && <RadioGroupEl />}</div>
      </div>
      <p>To study:</p>
    </div>
  );
};
