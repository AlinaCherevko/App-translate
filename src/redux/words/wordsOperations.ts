import { AxiosError } from "axios";
import { instance } from "../auth/authOperation";
import {
  IAllWordsResult,
  IStatistic,
  WordCategory,
  IWordsTasks,
  IRecommendedWords,
  IGetAllWordsReq,
  IWordsResult,
  IDeleteWord,
  IEditWord,
} from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../constants/apiPath";

//getWordsCategories
export const getWordsCategories = createAsyncThunk<
  WordCategory[],
  undefined,
  { rejectValue: string }
>("words/getWordsCategories", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get(api.words.getCategories);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//getAllWords
export const getAllWords = createAsyncThunk<
  IRecommendedWords,
  IGetAllWordsReq,
  { rejectValue: string }
>(
  "words/getAllWords",
  async ({ keyword, category, page, isIrregular }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `${api.words.getAllWords}?keyword=${keyword}&category=${category}&page=${page}&isIrregular=${isIrregular}&limit=7`
      );
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//getOwnWords
export const getOwnWords = createAsyncThunk<
  IAllWordsResult,
  IGetAllWordsReq,
  { rejectValue: string }
>(
  "words/getOwnWords",
  async ({ keyword, category, page, isIrregular }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `${api.words.getUsersWords}?keyword=${keyword}&category=${category}&page=${page}&isIrregular=${isIrregular}&limit=7`
      );
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

// getWordsStatistics
export const getWordsStatistics = createAsyncThunk<
  IStatistic,
  undefined,
  { rejectValue: string }
>("words/getWordsStatistics", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get(api.words.getUsersStatistic);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//getUsersTasks
export const getUsersTasks = createAsyncThunk<
  IWordsTasks,
  undefined,
  { rejectValue: string }
>("words/getUsersTasks", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get(api.words.getUsersTasks);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//addWordToDictionary
export const addWordToDictionary = createAsyncThunk<
  IWordsResult,
  string,
  { rejectValue: string }
>("words/addWordToDictionary", async (id, thunkAPI) => {
  try {
    const { data } = await instance.post(api.words.addNewUsersWord(id));
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//deleteUsersWord
export const deleteUsersWord = createAsyncThunk<
  IDeleteWord,
  string,
  { rejectValue: string }
>("words/deleteUsersWord", async (id, thunkAPI) => {
  try {
    const { data } = await instance.delete(api.words.deleteUsersWord(id));
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

// editWord
export const editWord = createAsyncThunk<
  IWordsResult,
  IEditWord,
  { rejectValue: string }
>("words/editWord", async ({ id, en, ua, category, isIrregular }, thunkAPI) => {
  try {
    const { data } = await instance.patch(api.words.editWord(id), {
      en,
      ua,
      category,
      isIrregular,
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
