import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RegisterInput } from "../../pages/register.page";
// import customFetchBase from "./customFetchBase";
// import { GenericResponse, IResetPasswordRequest } from "./types";
// import { userApi } from "./userApi";
import { IUserRequest } from "../apis/types";
import { setUser } from "../features/userSlice";
import { notification } from "antd";

export const authApi = createApi({
  reducerPath: "authApi",
  // baseQuery: customFetchBase,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backendhwa.revlox.com/api/v1",
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation<
      IUserRequest,
      any // get data from api
    >({
      query(data: IUserRequest) {
        return {
          url: "token",
          method: "POST",
          body: data,
          // credentials: "include",
        };
      },

      async onQueryStarted(_args: any, { dispatch, queryFulfilled }: any) {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem("userData", JSON.stringify(data));
          dispatch(setUser(data));
        } catch (error: any) {
          notification.error({
            message: "Login Error",
            description: error?.error?.data?.detail || "Something went wrong",
          });
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
