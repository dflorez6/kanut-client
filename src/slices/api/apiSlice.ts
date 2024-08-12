// Dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "", // Base URL is empty because a proxy is used in vite.config.js
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
