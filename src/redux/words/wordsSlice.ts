import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWordsState } from "./types";
import {
  getAllWords,
  getWordsCategories,
  getOwnWords,
  getWordsStatistics,
  getUsersTasks,
} from "./wordsOperations";

const initialState: IWordsState = {
  results: [],
  own: null,
  categories: [],
  words: [],
  error: "",
  isLoading: false,
  totalPages: 0,
  page: 1,
  perPage: 10,
  totalCount: 0,
};

const isPending = (state: IWordsState) => {
  state.isLoading = true;
  state.error = "";
};

const isRejected = (
  state: IWordsState,
  action: PayloadAction<string | undefined>
) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const wordsSlice = createSlice({
  name: "books",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //getAllWords
    builder.addCase(getAllWords.pending, isPending);
    builder.addCase(getAllWords.rejected, isRejected);
    builder.addCase(getAllWords.fulfilled, (state, { payload }) => {
      state.results = payload.results;
      state.totalPages = payload.totalPages;
      state.error = "";
      state.isLoading = false;
    });
    //getAllCategories
    builder.addCase(getWordsCategories.pending, isPending);
    builder.addCase(getWordsCategories.rejected, isRejected);
    builder.addCase(getWordsCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.error = "";
      state.isLoading = false;
    });
    //getOwnWords
    builder.addCase(getOwnWords.pending, isPending);
    builder.addCase(getOwnWords.rejected, isRejected);
    builder.addCase(getOwnWords.fulfilled, (state, { payload }) => {
      state.own = payload;
      state.error = "";
      state.isLoading = false;
    });
    //getWordsStatistics
    builder.addCase(getWordsStatistics.pending, isPending);
    builder.addCase(getWordsStatistics.rejected, isRejected);
    builder.addCase(getWordsStatistics.fulfilled, (state, { payload }) => {
      state.totalCount = payload.totalCount;
      state.error = "";
      state.isLoading = false;
    });
    //getUsersTasks;
    builder.addCase(getUsersTasks.pending, isPending);
    builder.addCase(getUsersTasks.rejected, isRejected);
    builder.addCase(getUsersTasks.fulfilled, (state, { payload }) => {
      state.words = payload.words;
      state.error = "";
      state.isLoading = false;
    });
  },
});

export const wordsReducer = wordsSlice.reducer;
