import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { User } from "api/types";

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export default slice.reducer;
