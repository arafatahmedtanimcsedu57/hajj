import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./apis/authApi";
import { userSliceReducer } from "./features/userSlice";
// import { postApi } from "./api/postApi";
// import { userApi } from "./api/userApi";
// import userReducer from "./features/userSlice";
// import postReducer from "./features/postSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  user: userSliceReducer,
  // [userApi.reducerPath]: userApi.reducer,
  // Connect the PostApi reducer to the store
  // [postApi.reducerPath]: postApi.reducer,
  // userState: userReducer,
  // postState: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // devTools: import.meta.env.VITE_NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      // userApi.middleware,
      // Add the PostApi middleware to the store
      // postApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
