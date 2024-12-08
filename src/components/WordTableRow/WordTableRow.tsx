import { FC, useState } from "react";
import { IWordsResult } from "../../redux/words/types";
import { Table } from "@chakra-ui/react";
import {
  addWordToDictionary,
  deleteUsersWord,
} from "../../redux/words/wordsOperations";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { BtnIcon, EditWordModal, Modal, PopupEl } from "../index";

type WordTableRowProps = {
  result: IWordsResult;
  currentPage: "RecommendPage" | "DictionaryPage";
};

export const WordTableRow: FC<WordTableRowProps> = ({
  result,
  currentPage,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [isVisibleEditWordModal, setIsVisibleEditWordModal] =
    useState<boolean>(false);

  const onAddToDictionaryClick = () => {
    dispatch(addWordToDictionary(result._id));
  };

  const onDeleteWordClick = () => {
    dispatch(deleteUsersWord(result._id));
  };

  return (
    <>
      <Table.Row className="max-h-[54px] tablet:h-[69px] pl-5 text-mediumSmall tablet:text-tiny break-words whitespace-normal max-w-full  mobileAdaptive:w-[343px]">
        <Table.Cell className=" pl-3 tablet:pl-5 mobileAdaptive:max-w-[90px] break-words whitespace-normal">
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
                  onClick={() => setIsVisibleEditWordModal(true)}
                />
                <BtnIcon
                  id="icon-trash"
                  stroke="#85AA9F"
                  fill="transparent"
                  text="Delete"
                  width={16}
                  height={16}
                  onClick={onDeleteWordClick}
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
      {isVisibleEditWordModal && (
        <Modal onClose={() => setIsVisibleEditWordModal(false)}>
          <EditWordModal
            setIsVisibleEditWordModal={setIsVisibleEditWordModal}
            result={result}
          />
        </Modal>
      )}
    </>
  );
};
