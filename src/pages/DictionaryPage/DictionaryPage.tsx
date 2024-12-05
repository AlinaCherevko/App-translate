import { FC, useState, useEffect } from "react";
import { Dashboard, WordsPagination, WordsTable } from "../../components";
import { AppDispatch } from "../../redux/store";
import * as selector from "../../redux/words/wordsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getOwnWords } from "../../redux/words/wordsOperations";

const DictionaryPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const ownUsersWords = useSelector(selector.selectOwn);
  const totalPages = useSelector(selector.selectOwnTotalPages);
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const currentPage = "DictionaryPage";

  useEffect(() => {
    dispatch(getOwnWords({ keyword, category, page, isIrregular: "" }));
  }, [dispatch, keyword, category, page]);

  console.log(ownUsersWords);
  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard
          setOption={setCategory}
          setKeyword={setKeyword}
          option={category}
        />
        <WordsTable results={ownUsersWords} currentPage={currentPage} />
        <WordsPagination
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default DictionaryPage;
