import { RootState } from "../store";

export const selectResults = (state: RootState) =>
  state.words.recommendedWords.results;
export const selectTotalPages = (state: RootState) =>
  state.words.recommendedWords.totalPages;
export const selectCategories = (state: RootState) => state.words.categories;
export const selectOwn = (state: RootState) => state.words.own.results;
export const selectOwnTotalPages = (state: RootState) =>
  state.words.own.totalPages;
export const selectError = (state: RootState) => state.words.error;
