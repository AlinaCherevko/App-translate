import { FC, useState } from "react";
import {
  Icon,
  SearchInput,
  SelectEl,
  RadioGroupEl,
  BtnIcon,
  Modal,
  AddWordModal,
} from "../index";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { WordCategory } from "../../redux/words/types";
import { CreateOptionsArray } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Style } from "../Button/Button";

type DashboardType = {
  setOption: (props: string) => void;
  setKeyword: (props: string) => void;
  setPage: (props: number) => void;
  option?: WordCategory | string;
  setIsIrregular: (props: boolean) => void;
  currentPage: "DictionaryPage" | "RecommendPage";
};

export const Dashboard: FC<DashboardType> = ({
  setOption,
  setKeyword,
  setPage,
  option,
  setIsIrregular,
  currentPage,
}) => {
  const [isVisibleAddWordModal, setIsVisibleAddWordModal] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const categories = useSelector(selector.selectCategories);
  const options = [
    { value: "all", label: "all" },
    ...CreateOptionsArray(categories),
  ];

  return (
    <>
      <div className="flex flex-col gap-2 tablet:gap-7 desktop:flex-row tablet:items-start mb-8 tablet:mb-7 desktop:items-center desktop:justify-between ">
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
          <SelectEl
            style={Style.Dark}
            options={options}
            onChange={setOption}
            setPage={setPage}
          />
          <div className="h-5">
            {option === "verb" && (
              <RadioGroupEl
                style={Style.Dark}
                setIsIrregular={setIsIrregular}
                setPage={setPage}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 tablet:flex-row desktop:items-center tablet:gap-4">
          <p className="text-mediumSmall text-light-link-color tablet:text-tiny">
            To study:
          </p>
          <div className="flex gap-4">
            {currentPage === "DictionaryPage" && (
              <BtnIcon
                text="Add word"
                id="icon-plus"
                width={24}
                height={24}
                stroke="#85AA9F"
                onClick={() => setIsVisibleAddWordModal(true)}
              />
            )}
            <BtnIcon
              text="Train yourself"
              id="icon-arrow"
              width={16}
              height={16}
              fill="#85AA9F"
              onClick={() => navigate("/training")}
            />
          </div>
        </div>
      </div>
      {isVisibleAddWordModal && (
        <Modal onClose={() => setIsVisibleAddWordModal(false)}>
          <AddWordModal
            setPage={setPage}
            setIsVisibleAddWordModal={setIsVisibleAddWordModal}
          />
        </Modal>
      )}
    </>
  );
};
