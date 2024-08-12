// Dependencies
import React from "react";
// State
import { useSelector } from "react-redux";
import { RootState } from "./store";
// Toatsify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import PublicLayout from "./layouts/public/PublicLayout";
import PrivateLayout from "./layouts/private/PrivateLayout";

// Component
const App: React.FC = () => {
  //----------
  // State
  //----------
  // Get user information from the Redux store state using typed useSelector hook
  const { user } = useSelector((state: RootState) => state.auth);

  // Conditional layout rendering
  let layoutComponent;
  if (user) {
    layoutComponent = <PrivateLayout />;
  } else {
    layoutComponent = <PublicLayout />;
  }

  //----------
  // Output
  //----------
  return (
    <>
      <ToastContainer />
      {layoutComponent} {/* Displays UI Layout depending on access level */}
    </>
  );
};

export default App;
