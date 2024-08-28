// Dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Interfaces
import { User } from "../../interfaces/auth";

// Define the shape of the state for the user authentication slice
interface UserAuthState {
  user: User | null; // The user object or null if not logged in
  token: string | null; // The JWT token or null if not logged in
}

// Initialize the state with default values
const initialState: UserAuthState = {
  user: null, // No user information by default
  token: null, // No token by default
};

// Create a slice of the Redux store for user authentication
const userAuthSlice = createSlice({
  name: "userAuth", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Action to set user credentials in the state
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string | null}>
    ) => {
      // Destructure the user and token from the action payload
      const { user, token } = action.payload;
      state.user = user; // Set user info in the state
      state.token = token; // Set JWT token in the state
    },

    // Action to clear user credentials
    clearCredentials: (state) => {
      state.user = null; // Clear user info
      state.token = null; // Clear JWT token
    },
  },
});

// Export the action creators for use in components
export const { setCredentials, clearCredentials } = userAuthSlice.actions;
// Export the reducer to be used in the Redux store
export default userAuthSlice.reducer;