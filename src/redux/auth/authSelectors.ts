import { RootState } from "../store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectError = (state: RootState) => state.auth.error;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsAuthLoading = (state: RootState) =>
  state.auth.isAuthLoading;
export const selectRefreshing = (state: RootState) => state.auth.isRefreshing;
