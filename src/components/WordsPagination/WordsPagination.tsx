import { FC } from "react";
import Pagination from "rc-pagination";
import { BtnIcon } from "../BtnIcon/BtnIcon";

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

  const handlePageClick = (currentPage: number) => {
    console.log(currentPage);
    localStorage.setItem("page", currentPage.toString());
    setPage(currentPage);
  };

  return (
    <div className="paginationContainer">
      <Pagination
        //className={style.rcPagination}
        current={page}
        total={totalPages}
        onChange={handlePageClick}
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
