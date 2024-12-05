import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { Dashboard, WordsPagination, WordsTable } from "../../components";
import { AppDispatch } from "../../redux/store";
import { getAllWords } from "../../redux/words/wordsOperations";

const RecommendPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const recommendedWords = useSelector(selector.selectResults);
  const totalPages = useSelector(selector.selectTotalPages);

  const [option, SetOption] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const [isVerbRegular, setIsVerbRegular] = useState<boolean>(true);
  const currentPage = "RecommendPage";

  useEffect(() => {
    dispatch(getAllWords({ keyword, category: option, page, isIrregular: "" }));
  }, [dispatch, keyword, option, page]);

  console.log(recommendedWords);
  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard setOption={SetOption} setKeyword={setKeyword} />
        <WordsTable results={recommendedWords} currentPage={currentPage} />
        <WordsPagination
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default RecommendPage;
