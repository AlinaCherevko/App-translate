import { useEffect } from "react";
import AppRouter from "./router/Router";
import { useDispatch, useSelector } from "react-redux";
import * as selector from "./redux/auth/authSelectors";
import { AppDispatch } from "./redux/store";
import { getCurrentUser } from "./redux/auth/authOperation";
import { Loader } from "./components/index";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const isRefreshing = useSelector(selector.selectRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? <Loader /> : <AppRouter />;
}
export default App;
