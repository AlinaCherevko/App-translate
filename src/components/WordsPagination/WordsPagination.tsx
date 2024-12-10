import { FC } from "react";
import Pagination from "rc-pagination";
import { BtnIcon } from "../index";

type PaginationProps = {
  setPage: (props: number) => void;
  page: number;
  totalPages: number;
};

export const WordsPagination: FC<PaginationProps> = ({
  setPage,
  page,
  totalPages,
}) => {
  const disablePrevArrow = page === 1;
  const disableNextArrow = page === totalPages;
  const perPage = 7;

  const handlePageClick = (currentPage: number) => {
    setPage(currentPage);
  };

  const itemRender = (
    current: number,
    type: string,
    originalElement: React.ReactNode
  ) => {
    if (type === "page") {
      return <button>{current}</button>;
    }
    if (type === "jump-prev" || type === "jump-next") {
      return <span>...</span>;
    }
    return originalElement;
  };

  return (
    <div className="paginationContainer">
      <Pagination
        current={page}
        total={totalPages * perPage}
        onChange={handlePageClick}
        defaultPageSize={perPage}
        itemRender={itemRender}
        prevIcon={
          <BtnIcon
            id="icon-arrow-left"
            width={16}
            height={16}
            disabled={disablePrevArrow}
          />
        }
        nextIcon={
          <BtnIcon
            id="icon-arrow-right"
            width={16}
            height={16}
            disabled={disableNextArrow}
          />
        }
      />
    </div>
  );
};
