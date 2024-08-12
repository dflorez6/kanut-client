// Dependencies
import { apiSlice } from "./apiSlice";

const API_ENDPOINT = "/api/v1/users";

export const userAuthApiSlice = apiSlice.injectEndpoints({
  // Endpoints
  endpoints: (builder) => ({
    // Sign Up
    signUp: builder.mutation({
      query: (userData) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: userData,
      }),
    }),

    // Sign In
    signIn: builder.mutation({
      query: (credentials) => ({
        url: `${API_ENDPOINT}/sign_in`,
        method: "POST",
        body: credentials,
      }),
    }),

    // Sign Out
    signOut: builder.mutation({
      query: () => ({
        url: `${API_ENDPOINT}/sign_out`,
        method: "DELETE",
      }),
    }),
  }),

  // Add Mutation/Query Hooks
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  userAuthApiSlice;
