import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { User } from "api/types";

export interface State {
  user: User | null;
  isInitialized: boolean;
}

export const initialState: State = {
  user: null,
  isInitialized: false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isInitialized = true;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export default slice.reducer;
