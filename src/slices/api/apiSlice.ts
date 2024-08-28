// Dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store"; // Import RootState for type checking

const baseQuery = fetchBaseQuery({
  baseUrl: "", // Base URL is empty because a proxy is used in vite.config.js

  prepareHeaders: (headers, { getState }) => {
    // Get token from Redux state
    const token = (getState() as RootState).auth.token; // Access token from auth slice

    // DEBUGGING
    console.log("API SLICE getState() ====> ", getState());
    console.log("API SLICE Token ====> ", token);

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User"], // Define any tag types if needed for caching and invalidation
  // This is the parent slice, used to inject endpoints
  endpoints: (builder) => ({
    placeholder: builder.query({
      query: () => "",
    }),
  }),
});
