import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { wordsReducer } from "./words/wordsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const wordsPersistConfig = {
  key: "words",
  storage,
  whitelist: ["results", "categories"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  words: persistReducer(wordsPersistConfig, wordsReducer),
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);