// Dependencies
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// Redux Toolkit
import { useSelector } from 'react-redux'; // Acces Redux store state
import { RootState } from '../store'; // Import RootState type

const PrivateRoute: React.FC = () => {
  const isUserAuthenticated = useSelector((state: RootState) => !!state.auth.user);  // Check if user is authenticated

   // Redirect to login if not authenticated
  if (!isUserAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  // Render child routes if authenticated
  return <Outlet />;
}

export default PrivateRoute;