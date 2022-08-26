import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from 'constants';
import { prepareHeaders, handleAuthResponse, handleLogoutResponse } from 'utils';

const baseUrl = ENDPOINTS.BASE_URL + ENDPOINTS.AUTH.baseUrl;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders }),
    endpoints: (builder) => ({
      createUser: builder.mutation({
        query: (userCredentials) => ({
          url: ENDPOINTS.AUTH.createUser,
          method: 'POST',
          body: userCredentials,
        }),
        onQueryStarted(_, queryLifecycleApi) {
          handleAuthResponse(queryLifecycleApi);
        }
      }),
      loginUser: builder.mutation({
        query: userCredentials => ({
          url: ENDPOINTS.AUTH.loginUser,
          method: 'POST',
          body: userCredentials
        }),
        onQueryStarted(_, queryLifecycleApi) {
          handleAuthResponse(queryLifecycleApi);
        }
      }),
      logoutUser: builder.mutation({
        query: () => ({
          url: ENDPOINTS.AUTH.logoutUser,
          method: 'POST',
        }),
        onQueryStarted(_, queryLifecycleApi) {
          handleLogoutResponse(queryLifecycleApi);
        }
      }),
      getLoggedInUser: builder.query({
        query: () => ENDPOINTS.AUTH.currentUser
      })
    }),
  })

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetLoggedInUserQuery
} = authApi;