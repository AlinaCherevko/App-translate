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
  const [isIrregular, setIsIrregular] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const currentPage = "DictionaryPage";

  useEffect(() => {
    if (category === "verb")
      dispatch(getOwnWords({ keyword, category, page, isIrregular }));
    else dispatch(getOwnWords({ keyword, category, page, isIrregular: "" }));
  }, [dispatch, keyword, category, page, isIrregular]);

  return (
    <section className="flex flex-col justify-between bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard
          setIsIrregular={setIsIrregular}
          setOption={setCategory}
          setKeyword={setKeyword}
          setPage={setPage}
          option={category}
        />
        <WordsTable results={ownUsersWords} currentPage={currentPage} />
        <WordsPagination
          totalPages={totalPages}
          setPage={setPage}
          page={page}
        />
      </div>
    </section>
  );
};

export default DictionaryPage;
