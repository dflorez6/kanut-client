// Dependencies
import React from "react";
import { Outlet } from "react-router-dom"; // Outlet to render nested routes
// State
// Components
// TODO: Public Header
// TODO: Footer
// Styles
import "./PublicLayout.scss";

const PublicLayout: React.FC = () => {
  return (
    <>
      <header>
        <p>Public Header</p>
      </header>
      <main className="main-wrapper">
        <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default PublicLayout;
