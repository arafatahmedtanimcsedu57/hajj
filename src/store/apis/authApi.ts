/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { RegisterInput } from "../../pages/register.page";
import customFetchBase from "./customFetchBase";
import { GenericResponse, IResetPasswordRequest } from "./types";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<GenericResponse, RegisterInput>({
      query(data: any) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      any // get data from api
    >({
      query(data: any) {
        return {
          url: "auth/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(_args: any, { dispatch, queryFulfilled }: any) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          /* empty */
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
    verifyEmail: builder.mutation<GenericResponse, string>({
      query(verificationCode: any) {
        return {
          url: `auth/verifyemail/${verificationCode}`,
          credentials: "include",
        };
      },
    }),
    forgotPassword: builder.mutation<GenericResponse, { email: string }>({
      query(body: any) {
        return {
          url: `auth/forgotpassword`,
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
    resetPassword: builder.mutation<GenericResponse, IResetPasswordRequest>({
      query({ resetToken, password, passwordConfirm }: any) {
        return {
          url: `auth/resetpassword/${resetToken}`,
          method: "PATCH",
          body: { password, passwordConfirm },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
