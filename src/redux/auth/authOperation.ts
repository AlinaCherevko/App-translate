import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";
import * as api from "../../constants/apiPath";
import { ISignUpData, ISignUpRes, ILoginData, ICurrentUserRes } from "./types";

export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});

//signup
export const signup = createAsyncThunk<
  ISignUpRes,
  ISignUpData,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post(api.auth.register, credentials);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//login
export const logIn = createAsyncThunk<
  ISignUpRes,
  ILoginData,
  { rejectValue: string }
>("auth/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post(api.auth.login, credentials);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//logout
export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post(api.auth.logout);
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//get current
export const getCurrentUser = createAsyncThunk<
  ICurrentUserRes,
  undefined,
  { rejectValue: string }
>("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
  try {
    const { data } = await instance.get(api.auth.current);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
