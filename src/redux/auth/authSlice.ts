import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { logIn, logOut, getCurrentUser, signup } from "./authOperation";
import { IState } from "./types";

const initialState: IState = {
  user: { name: "", email: "", _id: "" },
  token: null,
  isAuth: false,
  isRefreshing: false,
  isAuthLoading: false,
  isRefreshingToken: false,
  error: "",
};

const handleAuthPending = (state: IState) => {
  state.isAuthLoading = true;
  state.error = "";
};

const handleAuthRejected = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  state.isAuthLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //register
    builder.addCase(signup.pending, handleAuthPending);
    builder.addCase(signup.rejected, handleAuthRejected);
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isAuth = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //login
    builder.addCase(logIn.pending, handleAuthPending);
    builder.addCase(logIn.rejected, handleAuthRejected);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isAuth = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //logout
    builder.addCase(logOut.pending, handleAuthPending);
    builder.addCase(logOut.rejected, handleAuthRejected);
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isAuth = initialState.isAuth;
      state.isAuthLoading = initialState.isAuthLoading;
      state.error = initialState.error;
    });
    //current
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.user._id = payload._id;
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isAuth = true;
      state.isRefreshing = false;
      state.error = "";
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });
  },
});

export const authReducer = authSlice.reducer;
