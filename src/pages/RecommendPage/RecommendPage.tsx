import { FC } from "react";
import { useSelector } from "react-redux";
import * as selector from "../../redux/words/wordsSelectors";
import { Dashboard, WordsPagination, WordsTable } from "../../components";

const RecommendPage: FC = () => {
  const recommendedWords = useSelector(selector.selectResults);
  console.log(recommendedWords);
  return (
    <section className="bg-secondary-white pt-8 pb-12 tablet:pt-20">
      <div className="wrapper">
        <Dashboard />
        <WordsTable />
        <WordsPagination />
      </div>
    </section>
  );
};

export default RecommendPage;
