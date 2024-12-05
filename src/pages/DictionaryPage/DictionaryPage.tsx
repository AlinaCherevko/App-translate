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
  const [option, SetOption] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const currentPage = "DictionaryPage";

  useEffect(() => {
    dispatch(getOwnWords({ keyword, category: option, page, isIrregular: "" }));
  }, [dispatch, keyword, option, page]);

  console.log(ownUsersWords);
  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard setOption={SetOption} setKeyword={setKeyword} />
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
