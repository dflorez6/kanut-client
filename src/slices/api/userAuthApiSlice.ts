// Dependencies
import { apiSlice } from "./apiSlice";

const API_ENDPOINT = "/api/v1/users";

export const userAuthApiSlice = apiSlice.injectEndpoints({
  // Endpoints
  endpoints: (builder) => ({
    // Sign Up
    signUp: builder.mutation({
      query: (userData) => ({
        url: `${API_ENDPOINT}/signup`,
        method: "POST",
        body: userData,
        // TODO: Check if headers are needed
        /*
        headers: {
          "Content-Type": "application/json",
        },
        */

        // TODO: Implement transformResponse is needed & test it
        /*
        transformResponse: (response: any, meta: any) => {
          // Extract token from API response headers
          const token = meta?.response?.headers.get("Authorization");
  
          // Extract user data from API response body
          const user = response?.status?.data?.user;
  
          return { user, token };
        },
        */
      }),
    }),

    // Sign In
    signIn: builder.mutation({
      query: (credentials) => ({
        url: `${API_ENDPOINT}/login`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: any, meta: any) => {
        // Extract token from API response headers
        const token = meta?.response?.headers.get("Authorization");

        // Extract user data from API response body
        const user = response?.status?.data?.user;

        return { user, token };
      },
    }),

    // Sign Out
    signOut: builder.mutation({
      query: () => ({
        url: `${API_ENDPOINT}/logout`,
        method: "DELETE",
      }),
    }),
  }),

  // Add Mutation/Query Hooks
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  userAuthApiSlice;
