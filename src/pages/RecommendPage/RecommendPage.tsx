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

  const [isVerbRegular, setIsVerbRegular] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    const res = localStorage.getItem("page");
    return res ? +res : 1;
  });
  const currentPage = "RecommendPage";

  useEffect(() => {
    dispatch(getAllWords({ keyword, category, page, isIrregular: "" }));
  }, [dispatch, keyword, category, page]);

  console.log(recommendedWords);
  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard
          setOption={setCategory}
          setKeyword={setKeyword}
          option={category}
        />
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
