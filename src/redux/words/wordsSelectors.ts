import { RootState } from "../store";

export const selectResults = (state: RootState) => state.words.results;
export const selectTotalPages = (state: RootState) => state.words.totalPages;
export const selectCategories = (state: RootState) => state.words.categories;
export const selectOwn = (state: RootState) => state.words.own;
export const selectError = (state: RootState) => state.words.error;
