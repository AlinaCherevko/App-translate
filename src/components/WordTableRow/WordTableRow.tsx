import { FC } from "react";
import { IWordsResult } from "../../redux/words/types";
import { Table } from "@chakra-ui/react";
import { addWordToDictionary } from "../../redux/words/wordsOperations";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { BtnIcon, PopupEl } from "../index";

type WordTableRowProps = {
  result: IWordsResult;
  currentPage: "RecommendPage" | "DictionaryPage";
};

export const WordTableRow: FC<WordTableRowProps> = ({
  result,
  currentPage,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const onAddToDictionaryClick = () => {
    dispatch(addWordToDictionary({ id: result._id }));
  };

  //   const showInfoPopup = () => {};

  return (
    <Table.Row className="h-[54px] tablet:h-[69px] pl-5 text-lightSmall tablet:text-tiny break-words whitespace-normal max-w-full  mobileAdaptive:w-[343px]">
      <Table.Cell className="pl-3 tablet:pl-5 mobileAdaptive:max-w-[90px] break-words whitespace-normal">
        {result.en}
      </Table.Cell>
      <Table.Cell className="pl-3 tablet:pl-5 mobileAdaptive:max-w-[116px] break-words whitespace-normal">
        {result.ua}
      </Table.Cell>
      {currentPage === "RecommendPage" ? (
        <Table.Cell className="pl-3 tablet:pl-5 mobileAdaptive:max-w-[100px] break-words whitespace-normal">
          {result.category}
        </Table.Cell>
      ) : (
        <>
          <Table.Cell className="hidden tablet:table-cell pl-3 tablet:pl-5 mobileAdaptive:max-w-[100px] break-words whitespace-normal">
            {result.category}
          </Table.Cell>
          <Table.Cell className="pl-3 tablet:pl-5">
            {result.progress}
          </Table.Cell>
        </>
      )}
      {currentPage === "DictionaryPage" ? (
        <Table.Cell className="pl-3 tablet:pl-5">
          <PopupEl content="...">
            <div className="flex flex-col gap-2.5">
              <BtnIcon
                id="icon-edit"
                stroke="#85AA9F"
                fill="transparent"
                text="Edit"
                width={16}
                height={16}
              />
              <BtnIcon
                id="icon-trash"
                stroke="#85AA9F"
                fill="transparent"
                text="Delete"
                width={16}
                height={16}
              />
            </div>
          </PopupEl>
        </Table.Cell>
      ) : (
        <Table.Cell className="pl-3 tablet:pl-5">
          <div className="tablet:hidden">
            <BtnIcon
              id="icon-arrow"
              width={16}
              height={16}
              onClick={onAddToDictionaryClick}
              fill="#85AA9F"
            />
          </div>
          <div className="hidden tablet:flex">
            <BtnIcon
              text="Add to dictionary"
              id="icon-arrow"
              width={16}
              height={16}
              onClick={onAddToDictionaryClick}
              fill="#85AA9F"
            />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  );
};
