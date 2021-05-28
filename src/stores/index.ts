import { configureStore } from "@reduxjs/toolkit";
// stores
import AuthReducer from "./auth/slice";

export const rootStore = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
