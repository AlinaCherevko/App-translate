import { AxiosError } from "axios";
import { instance } from "../auth/authOperation";
import {
  IAllWordsResult,
  IStatistic,
  IWordsCategories,
  IWordsTasks,
} from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../constants/apiPath";

//getWordsCategories
export const getWordsCategories = createAsyncThunk<
  IWordsCategories[],
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
  IAllWordsResult,
  undefined,
  { rejectValue: string }
>("words/getAllWords", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get(api.words.getAllWords);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//getOwnWords
export const getOwnWords = createAsyncThunk<
  IAllWordsResult,
  undefined,
  { rejectValue: string }
>("words/getOwnWords", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get(api.words.getUsersWords);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

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
