import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="app-grid">
      <div className="content">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;
