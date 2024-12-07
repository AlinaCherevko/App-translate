import { FC, useEffect, useRef } from "react";
import { WordTableRow } from "../WordTableRow/WordTableRow";
import { IWordsResult } from "../../redux/words/types";
import { Table } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { toast } from "react-toastify";
// import { useReactTable } from "@tanstack/react-table";

type WordTableProps = {
  results: IWordsResult[];
  currentPage: "RecommendPage" | "DictionaryPage";
};

export const WordsTable: FC<WordTableProps> = ({ results, currentPage }) => {
  const notification = useSelector(selector.selectNotification);
  const error = useSelector(selector.selectError);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (notification === "") return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else toast.success(notification);
  }, [notification, error]);

  return (
    <div className="tablet:p-4 tablet:bg-primary-white-color rounded-md max-w-full mobileAdaptive:w-full">
      <Table.Root
        striped
        showColumnBorder={true}
        size="sm"
        variant="outline"
        className="table-fixed rounded-md w-full "
      >
        <Table.Header>
          <Table.Row className="bg-light-green-bg h-[54px] tablet:h-[69px]">
            <Table.ColumnHeader className="flex-[1] pl-3 tablet:pl-5 text-mediumSmall tablet:text-small font-bold">
              <div className="flex items-center justify-between">
                <p>Word</p>
                <img
                  src="../../../public/united kingdom.svg"
                  alt="UK flag"
                  className="hidden tablet:flex"
                />
              </div>
            </Table.ColumnHeader>
            <Table.ColumnHeader className="flex-[1] pl-3 tablet:pl-5 text-mediumSmall tablet:text-small font-bold">
              <div className="flex items-center justify-between">
                <p>Translation</p>
                <img
                  src="../../../public/ukraine.svg"
                  alt="Ukraine flag"
                  className="hidden tablet:flex"
                />
              </div>
            </Table.ColumnHeader>
            {currentPage === "RecommendPage" ? (
              <Table.ColumnHeader className="flex-[1] pl-3 tablet:pl-5 text-mediumSmall tablet:text-small font-bold">
                Category
              </Table.ColumnHeader>
            ) : (
              <>
                <Table.ColumnHeader className="hidden tablet:table-cell flex-[1] pl-3 tablet:pl-5 text-mediumSmall tablet:text-small font-bold">
                  Category
                </Table.ColumnHeader>
                <Table.ColumnHeader className="flex-[1] pl-3 tablet:pl-5 text-mediumSmall tablet:text-small font-bold">
                  Progress
                </Table.ColumnHeader>
              </>
            )}

            <Table.ColumnHeader
              className={` pl-3 tablet:pl-5 text-mediumSmall tablet:text-small ${
                currentPage === "RecommendPage"
                  ? "w-[36px] tablet:w-[140px] desktop:w-[180px]"
                  : "w-[36px] tablet:w-[66px] desktop:w-[80px]"
              }`}
            ></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {results.map((result) => (
            <WordTableRow
              result={result}
              key={result._id}
              currentPage={currentPage}
            />
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
