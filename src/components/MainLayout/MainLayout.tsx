import { FC, useEffect } from "react";
import { Header, NoAuthHeader } from "../index";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as selector from "../../redux/auth/authSelectors";
import { AppDispatch } from "../../redux/store";
import { getAllWords } from "../../redux/words/wordsOperations";

export const MainLayout: FC = () => {
  const isAuth = useSelector(selector.selectIsAuth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <>
      {isAuth ? <Header /> : <NoAuthHeader />}
      <main>
        <Outlet />
      </main>
    </>
  );
};
