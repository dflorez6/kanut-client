// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// Redux Store
import { store } from "./store";
import { Provider } from "react-redux";
// Components
import App from "./App.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
// Pages/Screens
//==========
// Public
//==========
// TODO: Add public pages here
import HomePublic from "./pages/public/home/HomePublic.tsx"; // Root
// import Login from "./pages/public/auth/Login.jsx";
// import UserRegistration from "./pages/public/auth/VendorRegistration.jsx";
//==========
// Private
//==========
// TODO: Add private pages here
// import Dashboard from "./pages/private/dashboard/Dashboard.jsx";
// import Notification from "./pages/private/notifications/Notification.jsx";
//----------
// Resources
//----------
// TODO: Add resource specific pages here
// Styles
import "./style.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      {/* TODO: Update for Public Home */}
      <Route index element={<HomePublic />} />
      {/* 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegistration />} />
      */}
      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        {/* 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notification />} />
        */}

        {/* Resources */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
