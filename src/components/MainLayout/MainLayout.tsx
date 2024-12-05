import { FC, useEffect } from "react";
import { Header, NoAuthHeader } from "../index";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as selector from "../../redux/auth/authSelectors";
import * as selectorWords from "../../redux/words/wordsSelectors";
import { AppDispatch } from "../../redux/store";
import {
  getAllWords,
  getOwnWords,
  getWordsCategories,
} from "../../redux/words/wordsOperations";

export const MainLayout: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(selector.selectIsAuth);
  const recommendedWords = useSelector(selectorWords.selectResults);
  const ownUsersWords = useSelector(selectorWords.selectOwn);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    recommendedWords.length === 0 &&
      dispatch(
        getAllWords({ keyword: "", category: "", page: 1, isIrregular: "" })
      );
  }, [dispatch, recommendedWords, isAuth]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ownUsersWords.length === 0 &&
      dispatch(
        getOwnWords({ keyword: "", category: "", page: 1, isIrregular: "" })
      );
  }, [dispatch, isAuth, ownUsersWords]);

  useEffect(() => {
    dispatch(getWordsCategories());
  }, [dispatch, isAuth]);

  return (
    <>
      {isAuth ? <Header /> : <NoAuthHeader />}
      <main>
        <Outlet />
      </main>
    </>
  );
};
