import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme";

export const store = configureStore({
  reducer: {
    themes: themeReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
