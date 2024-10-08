import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryApi, EndpointDefinitions, FetchArgs } from '@reduxjs/toolkit/query/react';

const {
  VITE_API_VERSION,
  VITE_API_PATH,
  VITE_API_PUBLIC,
  VITE_USER_MANAGEMENT_BASE_URL,
  VITE_USER_MANAGEMENT_PORT,
  VITE_USER_MANAGEMENT_SERVICE,
} = import.meta.env;

export const _userManagementServiceBaseUrl = `${VITE_USER_MANAGEMENT_BASE_URL}${VITE_USER_MANAGEMENT_PORT}/${VITE_USER_MANAGEMENT_SERVICE}/${VITE_API_PATH}/${VITE_API_VERSION}/${VITE_API_PUBLIC}`;

const userManagementServiceBaseQuery = fetchBaseQuery({
  baseUrl: _userManagementServiceBaseUrl,
});

const userManagementServiceBaseQueryNoAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const result = await userManagementServiceBaseQuery(args, api, extraOptions);
  return result;
};

export const userManagementServiceApiSlice = createApi({
  reducerPath: 'user-management-service-api',
  baseQuery: userManagementServiceBaseQueryNoAuth,
  tagTypes: ['create-user'],
  endpoints: () => ({}) satisfies EndpointDefinitions,
});
