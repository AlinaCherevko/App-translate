import { store, RootState } from "../store";
import { instance } from "./authOperation";

instance.interceptors.request.use(
  function (config) {
    const state = store.getState() as RootState;
    const token = state.auth.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      config.headers["Authorization"] = "";
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
