import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../apis/types";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};
/*
{
  user: null,
}

redux = {
  user:  {
    data: null,
  }
}

*/

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = userSlice.actions;
export const { reducer: userSliceReducer } = userSlice; // diff
