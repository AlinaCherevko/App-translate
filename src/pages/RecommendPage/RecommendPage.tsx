import { FC, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { Dashboard, WordsPagination, WordsTable } from "../../components";
import { AppDispatch } from "../../redux/store";
import { getAllWords } from "../../redux/words/wordsOperations";
import { toast } from "react-toastify";

const RecommendPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const error = useSelector(selector.selectError);
  const recommendedWords = useSelector(selector.selectResults);
  const totalPages = useSelector(selector.selectTotalPages);
  const notification = useSelector(selector.selectNotification);
  const [isIrregular, setIsIrregular] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const currentPage = "RecommendPage";
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (error) toast.error(error);
    if (notification === "") return;
    if (notification !== "") toast.success(notification);
  }, [notification, error]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (category === "verb")
      dispatch(getAllWords({ keyword, category, page, isIrregular }));
    else dispatch(getAllWords({ keyword, category, page, isIrregular: "" }));
  }, [dispatch, keyword, category, page, isIrregular, error]);

  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard
          setIsIrregular={setIsIrregular}
          setOption={setCategory}
          setKeyword={setKeyword}
          setPage={setPage}
          option={category}
          currentPage={currentPage}
        />
        <div className="rounded-md h-[432px] tablet:h-[552px] desktop:h-[576px] overflow-y-hidden  max-w-full mobileAdaptive:w-full">
          <WordsTable results={recommendedWords} currentPage={currentPage} />
        </div>
        <WordsPagination
          totalPages={totalPages}
          setPage={setPage}
          page={page}
        />
      </div>
    </section>
  );
};

export default RecommendPage;
