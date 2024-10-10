import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../apis/types";
import { RootState } from "..";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const { reducer: userSliceReducer } = userSlice; // diff
