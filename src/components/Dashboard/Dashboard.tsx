import { FC } from "react";
import { Icon, SearchInput, SelectEl, RadioGroupEl } from "../index";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";

type DashboardType = {
  setOption: (props: string) => void;
  setKeyword: (props: string) => void;
};

export const Dashboard: FC<DashboardType> = ({ setOption, setKeyword }) => {
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
    <div>
      <div className="flex flex-col gap-2 tablet:flex-row pb-2 tablet:p-0">
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
      </div>
      <div>
        <RadioGroupEl />
      </div>
    </div>
  );
};
