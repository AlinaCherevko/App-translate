import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPath } from "../constants/routes";
import DictionaryPage from "../pages/DictionaryPage/DictionaryPage";
import RecommendPage from "../pages/RecommendPage/RecommendPage";
import TrainingPage from "../pages/TrainingPage/TrainingPage";
import { MainLayout, PrivateRoute, RestrictedRoute } from "../components/index";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPath.auth} element={<MainLayout />}>
          <Route
            index
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path={RoutesPath.register}
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path={RoutesPath.dictionary}
            element={
              <PrivateRoute>
                <DictionaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutesPath.recommend}
            element={
              <PrivateRoute>
                <RecommendPage />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutesPath.training}
            element={
              <PrivateRoute>
                <TrainingPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
