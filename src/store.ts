//====================
// Redux Store
//====================
// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/auth/userAuthSlice";
import { apiSlice } from "./slices/api/apiSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: userAuthReducer, // Reducer for managing authentication state
    [apiSlice.reducerPath]: apiSlice.reducer, // Reducer for handling API interactions related to authentication
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add API middleware to handle API requests
  devTools: true, // TODO: Remove for production
});

// Typed Hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
